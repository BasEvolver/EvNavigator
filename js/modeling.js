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
    if (!item) return;

    const isDomain = selectedItemId.startsWith('D-');
    const currentScore = isDomain ? assessmentData[selectedItemId]?.current || 0 : calculateAverage(item, assessmentData).current;
    const targetScore = isDomain ? assessmentData[selectedItemId]?.target || 0 : calculateAverage(item, assessmentData).target;

    leftPane.innerHTML = `
        <div class="modeling-card radar-card">
            <canvas id="modeling-radar-chart"></canvas>
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
            ${renderDualSlider(currentScore, targetScore, selectedItemId)}
        </div>
    `;
}

function renderDualSlider(currentValue, targetValue, itemId) {
    const currentLevelName = getMaturityLevelName(currentValue);
    const targetLevelName = getMaturityLevelName(targetValue);
    const currentDescription = getMaturityLevelDescription(currentValue);
    const targetDescription = getMaturityLevelDescription(targetValue);

    // Get ARIA's assessment scores
    const state = loadState();
    const companyId = state.selectedCompanyId;
    const ariaScores = ariaAssessments[companyId]?.[itemId];
    let ariaAssessmentHTML = '';

    if (ariaScores) {
        ariaAssessmentHTML = `
            <div class="aria-assessment-box">
                <div class="aria-assessment-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
                    <span>ARIA's Assessment</span>
                </div>
                <div class="aria-assessment-scores">
                    <div>
                        <div class="aria-score-label">AS-IS</div>
                        <div class="aria-score-value">${ariaScores.as_is.toFixed(1)}</div>
                    </div>
                    <div>
                        <div class="aria-score-label">TO-BE</div>
                        <div class="aria-score-value">${ariaScores.to_be.toFixed(1)}</div>
                    </div>
                </div>
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

            <div class="dual-slider-track-container">
                <div class="dual-slider-track"></div>
                <input type="range" min="0" max="5" value="${currentValue}" step="0.1" class="dual-slider-range-input as-is" data-action="update-score" data-item-id="${itemId}" data-type="current">
                <input type="range" min="0" max="5" value="${targetValue}" step="0.1" class="dual-slider-range-input to-be" data-action="update-score" data-item-id="${itemId}" data-type="target">
            </div>

            <div class="dual-slider-descriptions">
                <div class="slider-description-box" id="current-desc-display">${currentDescription}</div>
                <div class="slider-description-box" id="target-desc-display">${targetDescription}</div>
            </div>
            ${ariaAssessmentHTML}
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

    let html = `<h4>On ${item.name}</h4>`;

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
        const nextStepLevel = Math.floor(currentScore) + 1;
        if (nextStepLevel <= 5 && nextStepLevel > 0) {
             html += `<p>The immediate next step is to achieve the characteristics of Level ${nextStepLevel}:</p>
                      <p class="mt-2 p-2 bg-hover rounded-md"><em>"${item.levels[nextStepLevel - 1]}"</em></p>`;
        }
    } else {
        const domains = getDomainsRecursive(item);
        const domainsWithGaps = domains
            .map(d => ({ ...d, gap: (assessmentData[d.id]?.target || 0) - (assessmentData[d.id]?.current || 0) }))
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

    const styles = getComputedStyle(document.body);
    const purple = styles.getPropertyValue('--purple').trim();
    const accentBlue = styles.getPropertyValue('--accent-blue').trim();
    const borderColor = styles.getPropertyValue('--border-color').trim();
    const textPrimary = styles.getPropertyValue('--text-primary').trim();
    const textSecondary = styles.getPropertyValue('--text-secondary').trim();
    const bgCard = styles.getPropertyValue('--bg-card').trim();

    const { selectedItemId, assessmentData } = state.modeling;
    
    const selectedItem = findItemInModel(selectedItemId, true);
    let chartContextItem;
    let chartTitle;
    if (selectedItemId === 'all-disciplines') {
        chartContextItem = findItemInModel('all-disciplines', true);
        chartTitle = "All Disciplines";
    } else {
        const parent = findParent(selectedItemId, true);
        chartContextItem = parent || findItemInModel('all-disciplines', true);
        chartTitle = parent ? parent.name : "All Disciplines";
    }

    let itemsToChart = [];
    if (chartContextItem.id === 'all-disciplines') {
        itemsToChart = Object.values(maturityModel_Cap.disciplines);
    } else if (chartContextItem.id.startsWith('D')) {
        itemsToChart = Object.values(chartContextItem.capabilities);
    } else {
        itemsToChart = chartContextItem.domains;
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
                        color: (context) => {
                            return context.label === selectedItem.name ? textPrimary : textSecondary;
                        },
                        backdropColor: (context) => {
                            return context.label === selectedItem.name ? 'var(--accent-blue-translucent)' : 'transparent';
                        },
                        borderColor: (context) => {
                            return context.label === selectedItem.name ? 'var(--accent-blue)' : 'transparent';
                        },
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: 4
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
                    position: 'right', 
                    align: 'center',
                    labels: { color: textPrimary } 
                },
                title: {
                    display: true,
                    text: chartTitle,
                    color: textPrimary,
                    font: { size: 16, weight: 'bold' },
                    padding: { bottom: 10 }
                }
            }
        }
    });
}

function findItemInModel(id, useLightweight = false) {
    const model = useLightweight ? maturityModel_Cap : maturityModel;
    if (!id || id === 'all-disciplines') return { id: 'all-disciplines', name: 'All Disciplines', controlQuestion: 'An overview of the entire maturity model.', capabilities: model.disciplines };
    
    for (const discipline of Object.values(model.disciplines)) {
        if (discipline.id === id) return discipline;
        for (const capability of Object.values(discipline.capabilities)) {
            if (capability.id === id) return capability;
            const domainsSource = useLightweight ? capability.domains : Object.values(capability.domains || {});
            if (domainsSource.some(d => d.id === id)) {
                return useLightweight ? domainsSource.find(d => d.id === id) : model.disciplines[discipline.id].capabilities[capability.id].domains[id];
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
    const roundedScore = Math.round(score);
    const levels = ["Reactive", "Organized", "Managed", "Platform-led", "Intelligent"];
    return levels[roundedScore - 1] || "Intelligent";
}

function getMaturityLevelDescription(score) {
    const state = loadState();
    const itemId = state.modeling.selectedItemId;
    const item = findItemInModel(itemId); // Use the full model to get level details

    if (!item) return "Description not found.";

    const roundedScore = Math.round(score);
    if (roundedScore < 1) return "The initial stage before formal processes are established.";

    // Use specific level descriptions if the item is a domain and has them
    if (item.id.startsWith('D-') && item.levels && item.levels.length >= roundedScore) {
        return item.levels[roundedScore - 1];
    }

    // Fallback to the general summary descriptions for capabilities/disciplines
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
            document.querySelectorAll('.tree-node.active').forEach(n => n.classList.remove('active'));
            target.classList.add('active');
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
                state.modeling.assessmentData = buildInitialAssessmentData(companyId);
                state.modeling.assessmentData.companyId = companyId; // Re-tag the data
                saveState(state);
                updateDynamicPanes(state); // Re-render the panes with the new data
            }
        }
    });
    
    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'update-score') {
            let state = loadState();
            const { itemId, type } = target.dataset;
            const value = parseFloat(target.value);

            // Activate the correct label on input
            const header = target.closest('.dual-slider-component').querySelector('.dual-slider-header');
            if (header) {
                 header.children[0].classList.toggle('active', type === 'current');
                 header.children[1].classList.toggle('active', type === 'target');
            }

            const item = findItemInModel(itemId, true);
            if (item.id.startsWith('D-')) {
                 if (state.modeling.assessmentData[itemId]) {
                    state.modeling.assessmentData[itemId][type] = value;
                }
            } else {
                const childDomains = getDomainsRecursive(item);
                childDomains.forEach(d => {
                    if (state.modeling.assessmentData[d.id]) {
                        state.modeling.assessmentData[d.id][type] = value;
                    }
                });
            }
            saveState(state);

            // Update display values without full re-render
            const currentScore = type === 'current' ? value : parseFloat(document.querySelector('.dual-slider-range-input.as-is').value);
            const targetScore = type === 'target' ? value : parseFloat(document.querySelector('.dual-slider-range-input.to-be').value);

            document.getElementById('current-value-display').innerHTML = `${currentScore.toFixed(1)} <span class="value-text">${getMaturityLevelName(currentScore)}</span>`;
            document.getElementById('target-value-display').innerHTML = `${targetScore.toFixed(1)} <span class="value-text">${getMaturityLevelName(targetScore)}</span>`;
            document.getElementById('current-desc-display').textContent = getMaturityLevelDescription(currentScore);
            document.getElementById('target-desc-display').textContent = getMaturityLevelDescription(targetScore);
            
            // Debounce radar chart drawing for performance
            clearTimeout(window.radarDebounce);
            window.radarDebounce = setTimeout(() => {
                drawRadarChart(loadState());
            }, 200);
        }
    });
}