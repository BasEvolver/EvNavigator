// js/modeling.js - Logic for the new Maturity Modeling Canvas V4 (Interactive Three-Pane)
// FINAL CORRECTED VERSION

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof maturityModel === 'undefined' || typeof maturityModel_Cap === 'undefined') {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `<div class="p-8 text-center"><h1 class="text-2xl font-bold text-red-600">Fatal Error</h1><p class="text-secondary mt-2">A required data model could not be loaded.</p></div>`;
        return;
    }

    await loadSharedComponents();
    
    let state = loadState();
    renderModelingPage(state);
    initializeModelingEventListeners();
});

// --- MAIN RENDERER ---
function renderModelingPage(state) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="modeling-container">
            <div class="modeling-pane modeling-left-pane" id="modeling-left-pane"></div>
            <div class="modeling-pane modeling-middle-pane" id="modeling-middle-pane"></div>
            <div class="modeling-pane modeling-right-pane" id="modeling-right-pane"></div>
        </div>
    `;
    
    renderRightPane(state);
    updateDynamicPanes(state);
}

function updateDynamicPanes(state) {
    renderLeftPane(state);
    renderMiddlePane(state);
    drawRadarChart(state);
}

// --- PANE RENDERERS ---

function renderRightPane(state) {
    const rightPane = document.getElementById('modeling-right-pane');
    rightPane.innerHTML = `
        <div class="modeling-card h-full">
            <h2 class="text-xl font-bold mb-4">Maturity Model Explorer</h2>
            <div class="tree-view-container">
                ${renderTreeView(state)}
            </div>
        </div>
    `;
}

function renderLeftPane(state) {
    const leftPane = document.getElementById('modeling-left-pane');
    const { selectedItemId, assessmentData } = state.modeling;
    
    const item = findItemInModel(selectedItemId);
    if (!item) {
        leftPane.innerHTML = `<div class="modeling-card"><p class="text-red-500">Error: Could not find data for item ID ${selectedItemId}.</p></div>`;
        return;
    }

    const isDomain = selectedItemId.startsWith('D-');
    const currentScore = isDomain ? assessmentData[selectedItemId]?.current || 1 : calculateAverage(item, assessmentData).current;
    const targetScore = isDomain ? assessmentData[selectedItemId]?.target || 1 : calculateAverage(item, assessmentData).target;

    const targetLevelDescription = isDomain 
        ? item.levels[targetScore - 1]
        : maturityModel.summary.levels[Math.round(targetScore) - 1];

    leftPane.innerHTML = `
        <div class="modeling-card radar-card">
            <canvas id="modeling-radar-chart"></canvas>
        </div>
        <div class="modeling-card description-card">
            <h3 class="text-lg font-bold">${item.name}</h3>
            <p class="text-sm text-secondary mt-1">${item.controlQuestion}</p>
            
            ${renderMaturitySlider('Current State', currentScore)}

            ${isDomain ? `
            <div class="tobe-slider-vertical mt-4">
                <div>
                    <p class="slider-label">Set Target Maturity</p>
                    <div class="flex items-center gap-2 mt-1">
                        <input type="range" min="1" max="5" value="${targetScore}" data-action="set-target-score" data-domain-id="${selectedItemId}">
                        <span class="font-bold text-2xl">${targetScore}</span>
                    </div>
                </div>
                <div class="flex-grow">
                    <p class="slider-label">Target Level ${targetScore} Characteristics</p>
                    <p class="text-xs text-muted mt-1">${targetLevelDescription}</p>
                </div>
            </div>
            ` : 
            renderMaturitySlider('Target State', targetScore)
            }
        </div>
    `;
}

function renderMaturitySlider(label, value) {
    const levelName = getMaturityLevelName(value);
    const thumbPosition = ((value - 1) / 4) * 100;

    return `
        <div class="maturity-slider-wrapper">
            <div class="slider-header">
                <span class="slider-label">${label}</span>
                <div class="slider-value-group">
                    <span class="slider-value-text">${levelName}</span>
                    <span class="slider-value-num">${value.toFixed(1)}</span>
                </div>
            </div>
            <div class="slider-track">
                <div class="slider-thumb" style="left: ${thumbPosition}%;"></div>
            </div>
        </div>
    `;
}


function renderMiddlePane(state) {
    const middlePane = document.getElementById('modeling-middle-pane');
    middlePane.innerHTML = `
        <div class="aria-perspective-card">
            ${generateAriaPerspective(state)}
        </div>
    `;
}

// --- TREE VIEW LOGIC ---

function renderTreeView(state) {
    const { expandedNodes, selectedItemId } = state.modeling;
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label font-bold">All Disciplines</span></div>`;
    const disciplines = Object.values(maturityModel_Cap.disciplines).sort((a, b) => a.id.localeCompare(b.id));

    for (const discipline of disciplines) {
        const isExpanded = expandedNodes[discipline.id];
        html += `
            <div class="tree-node ${selectedItemId === discipline.id ? 'active' : ''}" data-action="select-item" data-item-id="${discipline.id}">
                <svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${discipline.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span class="node-label">${discipline.name}</span>
            </div>
        `;
        if (isExpanded) {
            html += `<div class="node-children">`;
            const capabilities = Object.values(discipline.capabilities).sort((a, b) => a.id.localeCompare(b.id));
            for (const capability of capabilities) {
                const capIsExpanded = expandedNodes[capability.id];
                html += `
                    <div class="tree-node ${selectedItemId === capability.id ? 'active' : ''}" data-action="select-item" data-item-id="${capability.id}">
                        <svg class="chevron ${capIsExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${capability.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        <span class="node-label">${capability.name}</span>
                    </div>
                `;
                if (capIsExpanded && capability.domains) {
                    html += `<div class="node-children">`;
                    const domains = capability.domains.sort((a, b) => a.id.localeCompare(b.id));
                    for (const domain of domains) {
                         html += `
                            <div class="tree-node ${selectedItemId === domain.id ? 'active' : ''}" data-action="select-item" data-item-id="${domain.id}">
                                <span class="chevron hidden"></span>
                                <span class="node-label">${domain.name}</span>
                            </div>
                        `;
                    }
                    html += `</div>`;
                }
            }
            html += `</div>`;
        }
    }
    return html;
}

// --- ARIA'S PERSPECTIVE GENERATOR ---

function generateAriaPerspective(state) {
    const { selectedItemId, assessmentData } = state.modeling;
    const companyId = state.selectedCompanyId;
    const item = findItemInModel(selectedItemId);
    if (!item) return '';

    const isDomain = selectedItemId.startsWith('D-');
    const currentScore = isDomain ? assessmentData[selectedItemId]?.current : calculateAverage(item, assessmentData).current;
    const targetScore = isDomain ? assessmentData[selectedItemId]?.target : calculateAverage(item, assessmentData).target;
    const gap = targetScore - currentScore;

    let html = `<h3>ARIA's Perspective on ${item.name}</h3>`;

    if (gap <= 0 && isDomain) {
        html += `<p class="mt-2">This area meets or exceeds the current target maturity level. Focus should be directed to other areas with a larger maturity gap.</p>`;
        return html;
    }

    if (companyId === 'techflow-solutions') {
        html += `<p class="mt-2">For <strong>TechFlow Solutions</strong>, improving this area is critical. Our diligence flagged several operational risks that a higher maturity level would directly mitigate.</p>`;
    } else {
        html += `<p class="mt-2">For <strong>CloudVantage</strong>, achieving a Level ${Math.round(targetScore)} in this area is a key enabler for the 'Rule of 60' growth strategy, unlocking new efficiencies and scalability.</p>`;
    }

    html += `<h4 class="font-semibold mt-4 mb-2">To bridge the gap from Level ${currentScore.toFixed(1)} to ${targetScore.toFixed(1)}:</h4>`;
    
    if (isDomain) {
        const nextStepLevel = Math.floor(currentScore);
        if (nextStepLevel < 5) {
             html += `<p>The immediate next step is to achieve the characteristics of Level ${nextStepLevel + 1}:</p>
                      <p class="mt-2 p-2 bg-hover rounded-md"><em>"${item.levels[nextStepLevel]}"</em></p>`;
        }
    } else {
        const domains = getDomainsRecursive(item);
        const domainsWithGaps = domains
            .map(d => ({ ...d, gap: (assessmentData[d.id]?.target || 1) - (assessmentData[d.id]?.current || 1) }))
            .filter(d => d.gap > 0)
            .sort((a, b) => b.gap - a.gap);
        
        if (domainsWithGaps.length > 0) {
            html += `<p>The highest priority should be on the following domains:</p>
                     <ul class="list-disc pl-5 mt-2 space-y-1">
                        ${domainsWithGaps.slice(0, 3).map(d => `<li><strong>${d.name}</strong> (Gap of ${d.gap.toFixed(1)} levels)</li>`).join('')}
                     </ul>`;
        } else {
            html += `<p>All underlying domains currently meet their target maturity levels. Consider increasing the 'To-Be' scores for specific domains to generate a new uplift plan.</p>`;
        }
    }
    
    return html;
}


// --- CHART & DATA HELPERS ---

let chartInstance = null;
function drawRadarChart(state) {
    const ctx = document.getElementById('modeling-radar-chart')?.getContext('2d');
    if (!ctx) return;

    if (chartInstance) {
        chartInstance.destroy();
    }

    const { selectedItemId, assessmentData } = state.modeling;
    const itemForChart = findItemInModel(selectedItemId, true); // Use lightweight model for chart structure
    let itemsToChart = [];
    
    if (selectedItemId === 'all-disciplines') {
        itemsToChart = Object.values(maturityModel_Cap.disciplines);
    } else if (selectedItemId.startsWith('D') && !selectedItemId.startsWith('D-')) {
        itemsToChart = Object.values(itemForChart.capabilities);
    } else { 
        const parentCapability = selectedItemId.startsWith('C') 
            ? itemForChart
            : findParent(selectedItemId, true);
        itemsToChart = parentCapability.domains;
    }

    itemsToChart.sort((a, b) => a.id.localeCompare(b.id));
    const labels = itemsToChart.map(i => i.name);
    const asIsData = itemsToChart.map(i => calculateAverage(i, assessmentData).current);
    const toBeData = itemsToChart.map(i => calculateAverage(i, assessmentData).target);

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                { 
                    label: 'As-Is', 
                    data: asIsData, 
                    borderColor: 'var(--accent-teal)', 
                    backgroundColor: 'transparent', 
                    borderWidth: 2, 
                    pointBackgroundColor: 'var(--accent-teal)' 
                },
                { 
                    label: 'To-Be', 
                    data: toBeData, 
                    borderColor: 'var(--accent-blue)', 
                    backgroundColor: 'var(--accent-blue-translucent)',
                    borderWidth: 2, 
                    pointBackgroundColor: 'var(--accent-blue)',
                    fill: '+1'
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { beginAtZero: true, max: 5, stepSize: 1, pointLabels: { font: { size: 11 } }, grid: { color: 'var(--border-color)' }, angleLines: { color: 'var(--border-color)' }, ticks: { backdropColor: 'var(--bg-card)', color: 'var(--text-secondary)'} } },
            plugins: { legend: { position: 'top', labels: { color: 'var(--text-primary)' } } }
        }
    });
}

// *** CRITICAL FIX: This function now correctly handles all cases ***
function findItemInModel(id, useLightweight = false) {
    const capModel = maturityModel_Cap;
    const fullModel = maturityModel;

    if (!id || id === 'all-disciplines') {
        return { id: 'all-disciplines', name: 'All Disciplines', controlQuestion: 'An overview of the entire maturity model.', capabilities: capModel.disciplines };
    }
    
    for (const disc of Object.values(capModel.disciplines)) {
        if (disc.id === id) return useLightweight ? disc : fullModel.disciplines[id];
        for (const cap of Object.values(disc.capabilities)) {
            if (cap.id === id) return useLightweight ? cap : fullModel.disciplines[disc.id].capabilities[id];
            if (cap.domains && cap.domains.some(d => d.id === id)) {
                return useLightweight ? cap.domains.find(d => d.id === id) : fullModel.disciplines[disc.id].capabilities[cap.id].domains[id];
            }
        }
    }
    return null;
}

function findParent(itemId, useLightweight = false) {
    const model = useLightweight ? maturityModel_Cap : maturityModel;
    if (itemId.startsWith('D-')) {
        for (const disc of Object.values(model.disciplines)) {
            for (const cap of Object.values(disc.capabilities)) {
                const domainsSource = useLightweight ? cap.domains : Object.values(cap.domains || {});
                if (domainsSource.some(d => d.id === itemId)) return cap;
            }
        }
    }
    if (itemId.startsWith('C')) {
        for (const disc of Object.values(model.disciplines)) {
            if (disc.capabilities[itemId]) return disc;
        }
    }
    return null;
}

function getDomainsRecursive(item) {
    const capItem = findItemInModel(item.id, true);
    if (!capItem) return [];
    if (capItem.id.startsWith('D-')) return [capItem];
    if (capItem.domains) return capItem.domains;
    if (capItem.capabilities) return Object.values(capItem.capabilities).flatMap(getDomainsRecursive);
    return [];
}

function calculateAverage(item, assessmentData) {
    if (item.id.startsWith('D-')) {
        return assessmentData[item.id] || { current: 1, target: 1 };
    }
    
    const childDomains = getDomainsRecursive(item);
    if (childDomains.length === 0) return { current: 1, target: 1 };

    const scores = childDomains.map(d => assessmentData[d.id] || { current: 1, target: 1 });
    const totalCurrent = scores.reduce((sum, s) => sum + s.current, 0);
    const totalTarget = scores.reduce((sum, s) => sum + s.target, 0);

    return {
        current: totalCurrent / scores.length,
        target: totalTarget / scores.length
    };
}

function getMaturityLevelName(score) {
    const roundedScore = Math.round(score);
    const levels = ["Reactive", "Organized", "Managed", "Platform-led", "Intelligent"];
    return levels[roundedScore - 1] || "Unknown";
}

// --- EVENT LISTENERS ---

function initializeModelingEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        let state = loadState();
        const action = target.dataset.action;

        if (action === 'select-item') {
            const itemId = target.dataset.itemId;
            if (state.modeling.selectedItemId === itemId) return;
            
            state.modeling.selectedItemId = itemId;
            saveState(state);
            updateDynamicPanes(state);
            document.querySelectorAll('.tree-node.active').forEach(n => n.classList.remove('active'));
            target.classList.add('active');
        }
        
        if (action === 'toggle-node') {
            e.stopPropagation(); // *** THIS IS THE CRITICAL FIX FOR THE TREE INTERACTION ***
            const nodeId = target.dataset.nodeId;
            state.modeling.expandedNodes[nodeId] = !state.modeling.expandedNodes[nodeId];
            saveState(state);
            renderRightPane(state); // Only re-render the tree pane
        }
    });
    
    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'set-target-score') {
            let state = loadState();
            const { domainId } = target.dataset;
            const value = parseInt(target.value);

            if (state.modeling.assessmentData[domainId]) {
                state.modeling.assessmentData[domainId].target = value;
            }
            
            saveState(state);
            updateDynamicPanes(state);
        }
    });
}