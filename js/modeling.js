// js/modeling.js - Logic for the new Maturity Modeling Canvas V7 (Dual-Thumb Slider Implementation)

// --- Add a constant to hold ARIA's assessment scores for the demo ---
const ariaAssessments = {
    'techflow-solutions': {
        'C130': { as_is: 1.4, to_be: 4.1 }, // As seen in the mockup for Account Management
        'D-111': { as_is: 2.0, to_be: 3.5 },
        'D-112': { as_is: 1.5, to_be: 4.0 },
        'D-131': { as_is: 1.2, to_be: 4.2 },
    },
    'cloudvantage': {
        'C130': { as_is: 3.8, to_be: 4.8 },
        'D-131': { as_is: 3.5, to_be: 4.9 },
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'modeling') {
        if (typeof maturityModel === 'undefined') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `<div class="p-8 text-center"><h1 class="text-2xl font-bold text-red-600">Fatal Error</h1><p class="text-secondary mt-2">A required data model could not be loaded.</p></div>`;
            return;
        }

        // CORRECTED: State must be set BEFORE loading shared components
        const urlParams = new URLSearchParams(window.location.search);
        const companyIdFromUrl = urlParams.get('company');
        let state = loadState();
        const companyId = companyIdFromUrl || (state.selectedCompanyId && state.selectedCompanyId !== 'all' ? state.selectedCompanyId : 'techflow-solutions');
        state.selectedCompanyId = companyId;
        saveState(state);

        await loadSharedComponents();
        
        renderModelingPage(state);
        initializeModelingEventListeners();
    }
});

// --- MAIN RENDERER ---
function renderModelingPage(state) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="modeling-container">
            <div class="modeling-pane modeling-left-pane" id="modeling-left-pane"></div>
            <div class="modeling-pane modeling-right-pane" id="modeling-right-pane"></div>
        </div>
    `;
    
    renderRightPane(state);
    updateDynamicPanes(state);
}

function updateDynamicPanes(state) {
    renderLeftPane(state);
    drawRadarChart(state);
}

// --- PANE RENDERERS ---

function renderRightPane(state) {
    const rightPane = document.getElementById('modeling-right-pane');
    rightPane.innerHTML = `
        <div class="modeling-card h-full">
            <h2 class="text-xl font-bold mb-4">Value Creation Canvas</h2>
            <div class="tree-view-container">
                ${renderTreeView(state)}
            </div>
        </div>
    `;
}

function renderLeftPane(state) {
    const leftPane = document.getElementById('modeling-left-pane');
    const { selectedItemId } = state.modeling;
    
    const item = findItemInModel(selectedItemId);
    if (!item) return;

    let title;
    if (selectedItemId.startsWith('D-')) {
        title = findParent(selectedItemId)?.name || "Details";
    } else if (selectedItemId === 'all-disciplines') {
        title = "All Disciplines";
    } else {
        title = item.name;
    }

    leftPane.innerHTML = `
        <div class="modeling-card radar-card">
            <div class="radar-table-grid">
                <div class="radar-chart-container">
                    <h3 class="radar-chart-title">${title}</h3>
                    <canvas id="modeling-radar-chart"></canvas>
                </div>
                <div class="maturity-table-container">
                    ${renderMaturityTable(state)}
                </div>
            </div>
        </div>
        <div class="aria-perspective-card">
            <div class="aria-perspective-header">
                <h3>ARIA's Perspective</h3>
                <button class="reset-button" data-action="reset-assessment" title="Reset to default scores">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                    </svg>
                </button>
            </div>
            <div id="aria-perspective-content">
                ${generateAriaPerspective(state)}
            </div>
        </div>
        <div class="modeling-card description-card">
            <h3 class="text-lg font-bold">${item.name}</h3>
            <p class="text-sm text-secondary mt-1">${item.controlQuestion}</p>
            ${renderDualSlider(state)}
        </div>
    `;
}

function renderMaturityTable(state) {
    const { selectedItemId } = state.modeling;
    const companyId = state.selectedCompanyId;
    const assessmentData = state.modeling.assessments[companyId];
    
    const selectedItem = findItemInModel(selectedItemId);
    let itemsToDisplay;

    if (selectedItemId.startsWith('D-')) {
        const parent = findParent(selectedItemId);
        itemsToDisplay = parent ? Object.values(parent.domains) : [];
    } else if (selectedItemId.startsWith('C')) {
        itemsToDisplay = Object.values(selectedItem.domains);
    } else if (selectedItemId.startsWith('D')) {
        itemsToDisplay = Object.values(selectedItem.capabilities);
    } else {
        itemsToDisplay = Object.values(maturityModel.disciplines);
    }

    let tableHTML = `
        <table class="maturity-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th class="stage-cell">As-Is Stage</th>
                    <th class="stage-cell">To-Be Stage</th>
                    <th class="score-cell">Gap</th>
                </tr>
            </thead>
            <tbody>
    `;

    itemsToDisplay.sort((a,b) => a.id.localeCompare(b.id)).forEach(item => {
        const scores = calculateAverage(item, assessmentData);
        const gap = scores.target - scores.current;
        const gapClass = gap > 0.1 ? 'gap-positive' : (gap < -0.1 ? 'gap-negative' : '');
        
        tableHTML += `
            <tr data-action="select-item" data-item-id="${item.id}">
                <td>${item.name}</td>
                <td class="stage-cell">${getMaturityLevelName(scores.current)}</td>
                <td class="stage-cell">${getMaturityLevelName(scores.target)}</td>
                <td class="score-cell ${gapClass}">${gap.toFixed(1)}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;
    return tableHTML;
}

function renderDualSlider(state) {
    const { selectedItemId } = state.modeling;
    const companyId = state.selectedCompanyId;
    const assessmentData = state.modeling.assessments[companyId];
    const item = findItemInModel(selectedItemId);
    if (!item || !assessmentData) return '<div class="p-4 text-secondary">Please select a specific company to view assessment data.</div>';

    const isDomain = selectedItemId.startsWith('D-');
    const currentValue = isDomain ? assessmentData[selectedItemId]?.current || 0 : calculateAverage(item, assessmentData).current;
    const targetValue = isDomain ? assessmentData[selectedItemId]?.target || 0 : calculateAverage(item, assessmentData).target;

    const currentLevelName = getMaturityLevelName(currentValue);
    const targetLevelName = getMaturityLevelName(targetValue);
    const currentDescription = getMaturityLevelDescription(currentValue);
    const targetDescription = getMaturityLevelDescription(targetValue);

    const ariaScores = ariaAssessments[companyId]?.[selectedItemId];

    let ariaIndicatorHTML = '';
    if (ariaScores) {
        const asIsPercent = (ariaScores.as_is / 5) * 100;
        const toBePercent = (ariaScores.to_be / 5) * 100;
        ariaIndicatorHTML = `
            <div class="aria-indicator-container">
                <span class="aria-indicator-label as-is" style="left: ${asIsPercent}%;" title="Aria As-Is Score: ${ariaScores.as_is.toFixed(1)}">Aria As-Is</span>
                <div class="aria-indicator as-is" style="left: ${asIsPercent}%;"></div>
                
                <span class="aria-indicator-label to-be" style="left: ${toBePercent}%;" title="Aria To-Be Score: ${ariaScores.to_be.toFixed(1)}">Aria To-Be</span>
                <div class="aria-indicator to-be" style="left: ${toBePercent}%;"></div>
            </div>
        `;
    }

    return `
        <div class="dual-slider-component">
            <div class="dual-slider-header">
                <div class="dual-slider-labels" data-action="activate-slider" data-type="current">
                    CURRENT STATE
                    <div class="dual-slider-values" id="current-value-display">
                        ${currentValue.toFixed(1)} <span class="value-text">${currentLevelName}</span>
                    </div>
                </div>
                <div class="dual-slider-labels text-right" data-action="activate-slider" data-type="target">
                    TARGET STATE
                    <div class="dual-slider-values" id="target-value-display">
                        ${targetValue.toFixed(1)} <span class="value-text">${targetLevelName}</span>
                    </div>
                </div>
            </div>
            
            ${ariaIndicatorHTML}

            <div class="dual-slider-track-container">
                <div class="dual-slider-track"></div>
                <input type="range" min="0" max="5" value="${currentValue}" step="0.1" class="dual-slider-range-input as-is" data-action="update-score" data-item-id="${selectedItemId}" data-type="current">
                <input type="range" min="0" max="5" value="${targetValue}" step="0.1" class="dual-slider-range-input to-be" data-action="update-score" data-item-id="${selectedItemId}" data-type="target">
            </div>
            
            <div class="dual-slider-descriptions">
                <div class="slider-description-box" id="current-desc-display">${currentDescription}</div>
                <div class="slider-description-box" id="target-desc-display">${targetDescription}</div>
            </div>
        </div>
    `;
}


// --- TREE VIEW LOGIC ---
function renderTreeView(state) {
    const { expandedNodes, selectedItemId } = state.modeling;
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label font-bold">All Disciplines</span></div>`;
    const disciplines = Object.values(maturityModel.disciplines).sort((a, b) => a.id.localeCompare(b.id));

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
                    const domains = Object.values(capability.domains).sort((a, b) => a.id.localeCompare(b.id));
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
    const { selectedItemId } = state.modeling;
    const companyId = state.selectedCompanyId;
    const assessmentData = state.modeling.assessments[companyId];
    if (!assessmentData) return '<p>Please select a company to see ARIA\'s perspective.</p>';

    const item = findItemInModel(selectedItemId);
    if (!item) return '';

    const isDomain = selectedItemId.startsWith('D-');
    const currentScore = isDomain ? assessmentData[selectedItemId]?.current || 0 : calculateAverage(item, assessmentData).current;
    const targetScore = isDomain ? assessmentData[selectedItemId]?.target || 0 : calculateAverage(item, assessmentData).target;
    const gap = targetScore - currentScore;

    let html = `<h4>On ${item.name}</h4>`;

    if (gap <= 0.1 && isDomain) {
        html += `<p class="mt-2">This area meets or exceeds the current target maturity level. Focus should be directed to other areas with a larger maturity gap.</p>`;
        return html;
    }

    if (companyId === 'techflow-solutions') {
        html += `<p class="mt-2">For <strong>TechFlow Solutions</strong>, improving this area is critical. Our diligence flagged several operational risks that a higher maturity level would directly mitigate.</p>`;
    } else {
        html += `<p class="mt-2">For <strong>CloudVantage</strong>, achieving a Level ${Math.ceil(targetScore)} in this area is a key enabler for the 'Rule of 60' growth strategy, unlocking new efficiencies and scalability.</p>`;
    }

    html += `<h4 class="font-semibold mt-4 mb-2">To bridge the gap from Level ${currentScore.toFixed(1)} to ${targetScore.toFixed(1)}:</h4>`;
    
    if (isDomain) {
        const nextStepLevel = Math.floor(currentScore) + 1;
        if (nextStepLevel <= 5 && nextStepLevel > 0) {
             html += `<p>The immediate next step is to achieve the characteristics of Level ${nextStepLevel}:</p>
                      <p class="mt-2 p-2 bg-hover rounded-md"><em>"${item.levels[nextStepLevel - 1]}"</em></p>`;
        }
    } else {
        const childItems = getDomainsRecursive(item);
        const itemsWithGaps = childItems
            .map(d => ({ ...d, gap: (assessmentData[d.id]?.target || 0) - (assessmentData[d.id]?.current || 0) }))
            .filter(d => d.gap > 0.1)
            .sort((a, b) => b.gap - a.gap);
        
        if (itemsWithGaps.length > 0) {
            html += `<p>The highest priority should be on the following areas:</p>
                     <ul class="list-disc pl-5 mt-2 space-y-1">
                        ${itemsWithGaps.slice(0, 3).map(d => `<li><strong>${d.name}</strong> (Gap of ${d.gap.toFixed(1)} levels)</li>`).join('')}
                     </ul>`;
        } else {
            html += `<p>All underlying areas currently meet their target maturity levels. Consider increasing the 'To-Be' scores for specific areas to generate a new uplift plan.</p>`;
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

    const styles = getComputedStyle(document.body);
    const purple = styles.getPropertyValue('--purple').trim();
    const accentBlue = styles.getPropertyValue('--accent-blue').trim();
    const borderColor = styles.getPropertyValue('--border-color').trim();
    const textPrimary = styles.getPropertyValue('--text-primary').trim();
    const textSecondary = styles.getPropertyValue('--text-secondary').trim();
    const bgCard = styles.getPropertyValue('--bg-card').trim();

    const { selectedItemId } = state.modeling;
    const companyId = state.selectedCompanyId;
    const assessmentData = state.modeling.assessments[companyId];
    if (!assessmentData) return; // Exit if no data for the company
    
    const selectedItem = findItemInModel(selectedItemId);
    
    let itemsToChart;
    if (selectedItemId.startsWith('D-')) {
        const parent = findParent(selectedItemId);
        itemsToChart = parent ? Object.values(parent.domains) : [];
    } else if (selectedItemId.startsWith('C')) {
        itemsToChart = Object.values(selectedItem.domains);
    } else if (selectedItemId.startsWith('D')) {
        itemsToChart = Object.values(selectedItem.capabilities);
    } else {
        itemsToChart = Object.values(maturityModel.disciplines);
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
                    borderColor: purple, 
                    backgroundColor: 'rgba(108, 101, 205, 0.2)',
                    borderWidth: 2, 
                    pointBackgroundColor: purple,
                    fill: true
                },
                { 
                    label: 'To-Be', 
                    data: toBeData, 
                    borderColor: accentBlue, 
                    backgroundColor: 'rgba(72, 170, 221, 0.2)',
                    borderWidth: 2, 
                    pointBackgroundColor: accentBlue,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { 
                r: { 
                    beginAtZero: true, 
                    max: 5, 
                    stepSize: 1, 
                    pointLabels: { 
                        font: { weight: 'bold', size: 12 },
                        color: (context) => context.label === selectedItem.name ? textPrimary : textSecondary,
                    }, 
                    grid: { color: borderColor }, 
                    angleLines: { color: borderColor }, 
                    ticks: { 
                        backdropColor: bgCard, 
                        color: textPrimary,
                        font: { weight: 'bold' },
                        padding: 8,
                        z: 1
                    } 
                } 
            },
            plugins: { 
                legend: { 
                    position: 'bottom',
                    align: 'end',
                    labels: { color: textPrimary, padding: 20 } 
                },
                title: { display: false }
            }
        }
    });
}

function findItemInModel(id) {
    if (!id || id === 'all-disciplines') {
        return { id: 'all-disciplines', name: 'All Disciplines', controlQuestion: 'An overview of the entire maturity model.', capabilities: maturityModel.disciplines };
    }
    
    for (const discipline of Object.values(maturityModel.disciplines)) {
        if (discipline.id === id) return discipline;
        for (const capability of Object.values(discipline.capabilities)) {
            if (capability.id === id) return capability;
            if (capability.domains && capability.domains[id]) {
                return capability.domains[id];
            }
        }
    }
    return null;
}

function findParent(itemId) {
    if (itemId.startsWith('D-')) { // Domain
        for (const disc of Object.values(maturityModel.disciplines)) {
            for (const cap of Object.values(disc.capabilities)) {
                if (cap.domains && cap.domains[itemId]) {
                    return cap;
                }
            }
        }
    }
    if (itemId.startsWith('C')) { // Capability
        for (const disc of Object.values(maturityModel.disciplines)) {
            if (disc.capabilities[itemId]) {
                return disc;
            }
        }
    }
    return null;
}

function getDomainsRecursive(item) {
    if (!item) return [];
    if (item.id.startsWith('D-')) return [item]; // It's a domain
    if (item.domains) return Object.values(item.domains); // It's a capability
    if (item.capabilities) return Object.values(item.capabilities).flatMap(getDomainsRecursive); // It's a discipline or 'all'
    return [];
}

function calculateAverage(item, assessmentData) {
    if (!assessmentData) return { current: 0, target: 0 }; // Safety check
    if (item.id.startsWith('D-')) {
        return assessmentData[item.id] || { current: 0, target: 0 };
    }
    
    const childDomains = getDomainsRecursive(item);
    if (childDomains.length === 0) return { current: 0, target: 0 };

    const scores = childDomains.map(d => assessmentData[d.id] || { current: 0, target: 0 });
    const totalCurrent = scores.reduce((sum, s) => sum + s.current, 0);
    const totalTarget = scores.reduce((sum, s) => sum + s.target, 0);

    return {
        current: totalCurrent / scores.length,
        target: totalTarget / scores.length
    };
}

function getMaturityLevelName(score) {
    if (score < 1) return "Initial";
    if (score >= 5) return "Intelligent";
    const levels = ["Reactive", "Organized", "Managed", "Platform-led", "Intelligent"];
    return levels[Math.floor(score - 0.01)] || "Initial";
}


function getMaturityLevelDescription(score) {
    const state = loadState();
    const itemId = state.modeling.selectedItemId;
    const item = findItemInModel(itemId);

    if (!item) return "Description not found.";

    const roundedScore = Math.round(score);
    if (roundedScore < 1) return "The initial stage before formal processes are established.";

    if (item.levels && item.levels.length >= roundedScore) {
        return item.levels[roundedScore - 1];
    }
    
    // Fallback for aggregate levels
    const summaryItem = findItemInModel(itemId) || maturityModel.summary;
    if (summaryItem.levels && summaryItem.levels.length >= roundedScore) {
        return summaryItem.levels[roundedScore - 1];
    }

    return maturityModel.summary.levels[roundedScore - 1] || maturityModel.summary.levels[4];
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
            renderRightPane(state);
        }
        
        if (action === 'toggle-node') {
            e.stopPropagation();
            const nodeId = target.dataset.nodeId;
            state.modeling.expandedNodes[nodeId] = !state.modeling.expandedNodes[nodeId];
            saveState(state);
            renderRightPane(state);
        }

        if (action === 'activate-slider') {
            const type = target.dataset.type;
            const header = target.closest('.dual-slider-header');
            if (header) {
                header.children[0].classList.remove('active');
                header.children[1].classList.remove('active');
                target.classList.add('active');
            }
        }

        if (action === 'reset-assessment') {
            if (confirm("Are you sure you want to reset all maturity scores for this company to their default values?")) {
                const companyId = state.selectedCompanyId;
                state.modeling.assessments[companyId] = buildInitialAssessmentData(companyId);
                saveState(state);
                updateDynamicPanes(state);
            }
        }
    });
    
    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'update-score') {
            let state = loadState();
            const companyId = state.selectedCompanyId;
            const { itemId, type } = target.dataset;
            const value = parseFloat(target.value);

            const header = target.closest('.dual-slider-component').querySelector('.dual-slider-header');
            if (header) {
                 header.children[0].classList.toggle('active', type === 'current');
                 header.children[1].classList.toggle('active', type === 'target');
            }

            const item = findItemInModel(itemId);
            if (item.id.startsWith('D-')) {
                 if (state.modeling.assessments[companyId][itemId]) {
                    state.modeling.assessments[companyId][itemId][type] = value;
                }
            } else {
                const childItems = getDomainsRecursive(item);
                childItems.forEach(d => {
                    if (state.modeling.assessments[companyId][d.id]) {
                        state.modeling.assessments[companyId][d.id][type] = value;
                    }
                });
            }
            saveState(state);

            const assessmentData = state.modeling.assessments[companyId];
            const { current: newCurrent, target: newTarget } = calculateAverage(item, assessmentData);
            document.getElementById('current-value-display').innerHTML = `${newCurrent.toFixed(1)} <span class="value-text">${getMaturityLevelName(newCurrent)}</span>`;
            document.getElementById('target-value-display').innerHTML = `${newTarget.toFixed(1)} <span class="value-text">${getMaturityLevelName(newTarget)}</span>`;
            document.getElementById('current-desc-display').textContent = getMaturityLevelDescription(newCurrent);
            document.getElementById('target-desc-display').textContent = getMaturityLevelDescription(newTarget);
            
            clearTimeout(window.rerenderDebounce);
            window.rerenderDebounce = setTimeout(() => {
                document.querySelector('.maturity-table-container').innerHTML = renderMaturityTable(loadState());
                drawRadarChart(loadState());
            }, 50);
        }
    });
}