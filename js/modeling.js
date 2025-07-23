// js/modeling.js - Logic for the new Maturity Modeling Canvas

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load the state structure first.
    let state = loadState();

    // 2. CRITICAL FIX: Explicitly check and build the assessment data NOW.
    // This ensures MaturityModel.js is loaded and available before we proceed.
    if (!state.modeling.assessmentData || Object.keys(state.modeling.assessmentData).length === 0) {
        console.log("Modeling page is initializing assessment data for the first time.");
        state.modeling.assessmentData = buildInitialAssessmentData();
        saveState(state);
    }

    // 3. Now that the state is guaranteed to be complete, load the shared components.
    await loadSharedComponents();

    // 4. Render the page with the fully populated state.
    renderModelingPage(state);
    initializeModelingEventListeners();
});


/**
 * Main rendering router. Determines which view to show based on the current state.
 * @param {object} state - The current application state.
 */
function renderModelingPage(state) {
    const { view, selectedDisciplineId, selectedCapabilityId } = state.modeling;
    const mainContent = document.getElementById('main-content');

    let contentHTML = '';
    switch (view) {
        case 'capability':
            contentHTML = renderCapabilityView(state, selectedDisciplineId);
            break;
        case 'domain':
            contentHTML = renderDomainView(state, selectedCapabilityId);
            break;
        case 'discipline':
        default:
            contentHTML = renderDisciplineView(state);
            break;
    }
    mainContent.innerHTML = `<div class="p-4 sm:p-6 space-y-6">${contentHTML}</div>`;
    
    // Render charts after the HTML is in the DOM
    if (view === 'discipline') drawDisciplineRadar(state);
    if (view === 'capability') drawCapabilityRadar(state, selectedDisciplineId);
}

// --- VIEW RENDERING FUNCTIONS ---

/**
 * Renders the top-level Discipline Hub view with a radar chart.
 * @param {object} state - The current application state.
 */
function renderDisciplineView(state) {
    const companyId = state.selectedCompanyId;
    const ariaBlurb = companyId === 'techflow-solutions'
        ? "Based on my analysis of 3 critical anomalies, I've generated a preliminary 'As-Is' assessment. Please review and adjust."
        : "To achieve your 'Rule of 60' goal, I recommend focusing on elevating 'Partner' and 'AI' capabilities. Here is a suggested target state.";

    return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 bg-card border border-border-color rounded-lg p-6">
                <h2 class="text-xl font-bold mb-1">Maturity Assessment Hub</h2>
                <p class="text-secondary mb-4">Set the 'As-Is' and 'To-Be' maturity for each discipline. Click a discipline to drill down into its capabilities.</p>
                <div class="h-96 md:h-[500px]"><canvas id="discipline-radar-chart"></canvas></div>
            </div>
            <div class="space-y-6">
                <div class="bg-accent-blue-translucent border border-accent-blue rounded-lg p-4">
                    <h3 class="font-bold text-accent-blue">ARIA's Recommendation</h3>
                    <p class="text-sm text-secondary mt-1">${ariaBlurb}</p>
                </div>
                <div id="discipline-list" class="bg-card border border-border-color rounded-lg p-4 space-y-2">
                    ${Object.values(maturityModel.disciplines).map(d => `
                        <div class="p-2 rounded-md hover:bg-hover cursor-pointer" data-action="view-capability" data-discipline-id="${d.id}">
                            <span class="font-semibold">${d.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the drill-down view for a specific Discipline's Capabilities.
 * @param {object} state - The current application state.
 * @param {string} disciplineId - The ID of the selected discipline.
 */
function renderCapabilityView(state, disciplineId) {
    const discipline = maturityModel.disciplines[disciplineId];
    if (!discipline) return `<p>Discipline not found.</p>`;
    
    const companyId = state.selectedCompanyId;
    // Differentiated context for each company
    const ariaContext = companyId === 'techflow-solutions'
        ? techflow_anomalies.filter(a => a.workstream.startsWith(discipline.name.split(' ')[0]))
        : cloudvantage_workstreamData.filter(w => w.title.startsWith(discipline.name.split(' ')[0]));

    return `
        <div class="mb-4"><button class="font-semibold text-accent-blue hover:underline" data-action="back-to-discipline">← Back to All Disciplines</button></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 bg-card border border-border-color rounded-lg p-6">
                <h2 class="text-xl font-bold mb-1">${discipline.name} Capabilities</h2>
                <p class="text-secondary mb-4">Assess the maturity of capabilities within this discipline. Click one to see its domains.</p>
                <div class="h-96 md:h-[500px]"><canvas id="capability-radar-chart"></canvas></div>
            </div>
            <div class="space-y-6">
                <div class="bg-card border border-border-color rounded-lg p-4">
                    <h3 class="font-bold text-primary">ARIA's Context for ${discipline.name}</h3>
                    <p class="text-sm text-secondary mt-1 mb-3">The following findings are relevant to this discipline:</p>
                    <ul class="text-sm space-y-2">
                        ${ariaContext.map(item => `<li class="p-2 bg-secondary rounded-md">${item.title}</li>`).join('') || '<li class="text-secondary">No specific findings from ARIA for this discipline.</li>'}
                    </ul>
                </div>
                <div id="capability-list" class="bg-card border border-border-color rounded-lg p-4 space-y-2">
                    ${Object.values(discipline.capabilities).map(c => `
                        <div class="p-2 rounded-md hover:bg-hover cursor-pointer ${state.modeling.selectedCapabilityId === c.id ? 'bg-accent-blue-translucent' : ''}" data-action="view-domain" data-capability-id="${c.id}">
                            <span class="font-semibold">${c.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the domain-level workshop for generating an uplift plan.
 * @param {object} state - The current application state.
 * @param {string} capabilityId - The ID of the selected capability.
 */
function renderDomainView(state, capabilityId) {
    const capability = Utils.findCapability(capabilityId);
    if (!capability) return `<p>Capability not found.</p>`;

    const { assessmentData, generatedPlan } = state.modeling;
    
    // ARIA's proactive insight based on the largest maturity gaps
    const domainsWithGaps = Object.values(capability.domains)
        .map(d => ({ ...d, gap: (assessmentData[d.id]?.target || 1) - (assessmentData[d.id]?.current || 1) }))
        .filter(d => d.gap > 0)
        .sort((a, b) => b.gap - a.gap);

    let ariaPriorities = `<p class="text-secondary text-sm">Set your 'To-Be' targets on the left to identify areas for improvement. ARIA will then generate a detailed plan.</p>`;
    if (domainsWithGaps.length > 0) {
        ariaPriorities = `
            <p class="text-secondary text-sm mb-2">Based on your current targets, the immediate priorities for improving <strong>${capability.name}</strong> are:</p>
            <ul class="list-disc pl-5 text-sm text-secondary space-y-1">
                ${domainsWithGaps.slice(0, 3).map(d => `<li>Focus on <strong>${d.name}</strong> (Gap of ${d.gap} levels)</li>`).join('')}
            </ul>
        `;
    }

    return `
        <div class="mb-4"><button class="font-semibold text-accent-blue hover:underline" data-action="back-to-capability">← Back to Capabilities</button></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Left Column: Domain Assessment -->
            <div class="lg:col-span-1 bg-card border border-border-color rounded-lg p-6 space-y-4 h-fit">
                <h2 class="text-xl font-bold">${capability.name}</h2>
                <p class="text-sm text-secondary border-b border-border-color pb-4">${capability.controlQuestion}</p>
                <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    ${Object.values(capability.domains).map(domain => `
                        <div class="domain-assessment-item" data-domain-id="${domain.id}">
                            <p class="font-semibold text-primary">${domain.name}</p>
                            <!-- As-Is Slider -->
                            <div class="flex items-center gap-3 mt-2">
                                <span class="text-sm font-medium w-12 flex-shrink-0">As-Is:</span>
                                <input type="range" min="1" max="5" value="${assessmentData[domain.id].current}" data-action="update-assessment" data-domain-id="${domain.id}" data-type="current" class="w-full">
                                <span class="text-sm font-bold w-8 text-center">${assessmentData[domain.id].current}</span>
                            </div>
                            <p class="text-xs text-muted pl-14" id="desc-current-${domain.id}">${domain.levels[assessmentData[domain.id].current - 1]}</p>
                            <!-- To-Be Slider -->
                            <div class="flex items-center gap-3 mt-2">
                                <span class="text-sm font-medium w-12 flex-shrink-0">To-Be:</span>
                                <input type="range" min="1" max="5" value="${assessmentData[domain.id].target}" data-action="update-assessment" data-domain-id="${domain.id}" data-type="target" class="w-full">
                                <span class="text-sm font-bold w-8 text-center">${assessmentData[domain.id].target}</span>
                            </div>
                            <p class="text-xs text-muted pl-14" id="desc-target-${domain.id}">${domain.levels[assessmentData[domain.id].target - 1]}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <!-- Right Column: Generative Canvas -->
            <div class="lg:col-span-2 space-y-6">
                 <div class="bg-card border border-border-color rounded-lg p-6">
                     <h3 class="font-bold text-primary">ARIA's Immediate Priorities</h3>
                     ${ariaPriorities}
                 </div>
                 <div id="generated-plan-container">
                    ${generatedPlan ? renderGeneratedPlan(generatedPlan, state) : `
                        <div class="bg-card border-2 border-dashed border-border-color rounded-lg p-6 h-full flex flex-col items-center justify-center text-center">
                            <p class="text-secondary mb-4">Your generated uplift plan will appear here once you've set your target states.</p>
                            <button class="p-3 font-semibold text-white bg-accent-blue rounded-lg hover:opacity-90" data-action="generate-plan" data-capability-id="${capability.id}">Generate Uplift Initiative with ARIA</button>
                        </div>
                    `}
                 </div>
            </div>
        </div>
    `;
}

/**
 * Renders the AI-generated plan.
 * @param {object} plan - The generated plan object from Utils.
 * @param {object} state - The current application state.
 */
function renderGeneratedPlan(plan, state) {
    const isAdded = state.diligenceWorkspace.valueLevers.some(l => l.id === plan.id);
    return `
        <div class="bg-card border border-border-color rounded-lg p-6 space-y-4 animate-fade-in">
            <h3 class="text-lg font-bold text-primary">${plan.title}</h3>
            <div>
                <h4 class="font-semibold text-sm uppercase text-muted tracking-wider">Rationale</h4>
                <p class="text-sm text-secondary mt-1">${plan.rationale}</p>
            </div>
            <div>
                <h4 class="font-semibold text-sm uppercase text-muted tracking-wider">Key Actions</h4>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-secondary">
                    ${plan.actions.map(action => `<li>${action}</li>`).join('')}
                </ul>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border-color">
                <div>
                    <h4 class="font-semibold text-sm uppercase text-muted tracking-wider">Success Metrics (KPIs)</h4>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-secondary">${plan.kpis.map(kpi => `<li>${kpi}</li>`).join('')}</ul>
                </div>
                <div>
                    <h4 class="font-semibold text-sm uppercase text-muted tracking-wider">Potential Risks</h4>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-secondary">${plan.risks.map(risk => `<li>${risk}</li>`).join('')}</ul>
                </div>
            </div>
             <div class="pt-2 border-t border-border-color">
                <h4 class="font-semibold text-sm uppercase text-muted tracking-wider">Estimated Budget</h4>
                <p class="text-sm text-secondary mt-1">Software: ${plan.budget.software} | Headcount: ${plan.budget.headcount}</p>
            </div>
            ${isAdded 
                ? `<button class="w-full p-3 font-semibold text-green-800 bg-green-100 rounded-lg cursor-default flex items-center justify-center gap-2">✓ Added to Workspace</button>`
                : `<button class="w-full p-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700" data-action="commit-to-workspace" data-plan-id="${plan.id}">Commit Initiative to Workspace</button>`
            }
        </div>
    `;
}

// --- CHART DRAWING FUNCTIONS ---

function drawDisciplineRadar(state) {
    const ctx = document.getElementById('discipline-radar-chart')?.getContext('2d');
    if (!ctx) return;

    const { assessmentData } = state.modeling;
    const labels = Object.values(maturityModel.disciplines).map(d => d.name);
    
    const calculateAverage = (discipline) => {
        const domainScores = Object.values(discipline.capabilities).flatMap(c => Object.values(c.domains).map(d => assessmentData[d.id]));
        if (domainScores.length === 0 || domainScores.every(d => d === undefined)) return { current: 1, target: 1 };
        
        const validScores = domainScores.filter(d => d);
        const totalCurrent = validScores.reduce((sum, d) => sum + d.current, 0);
        const totalTarget = validScores.reduce((sum, d) => sum + d.target, 0);
        return {
            current: totalCurrent / validScores.length,
            target: totalTarget / validScores.length
        };
    };

    const asIsData = Object.values(maturityModel.disciplines).map(d => calculateAverage(d).current);
    const toBeData = Object.values(maturityModel.disciplines).map(d => calculateAverage(d).target);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                { label: 'As-Is', data: asIsData, borderColor: 'var(--accent-blue)', backgroundColor: 'rgba(72, 170, 221, 0.2)' },
                { label: 'To-Be', data: toBeData, borderColor: 'var(--accent-teal)', backgroundColor: 'rgba(76, 198, 196, 0.2)' }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { beginAtZero: true, max: 5, stepSize: 1, pointLabels: { font: { size: 12 } } } },
            plugins: { legend: { position: 'top' } }
        }
    });
}

function drawCapabilityRadar(state, disciplineId) {
    const ctx = document.getElementById('capability-radar-chart')?.getContext('2d');
    if (!ctx) return;

    const { assessmentData } = state.modeling;
    const discipline = maturityModel.disciplines[disciplineId];
    const labels = Object.values(discipline.capabilities).map(c => c.name);

    const calculateAverage = (capability) => {
        const domainScores = Object.values(capability.domains).map(d => assessmentData[d.id]);
        if (domainScores.length === 0 || domainScores.every(d => d === undefined)) return { current: 1, target: 1 };

        const validScores = domainScores.filter(d => d);
        const totalCurrent = validScores.reduce((sum, d) => sum + d.current, 0);
        const totalTarget = validScores.reduce((sum, d) => sum + d.target, 0);
        return {
            current: totalCurrent / validScores.length,
            target: totalTarget / validScores.length
        };
    };

    const asIsData = Object.values(discipline.capabilities).map(c => calculateAverage(c).current);
    const toBeData = Object.values(discipline.capabilities).map(c => calculateAverage(c).target);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                { label: 'As-Is', data: asIsData, borderColor: 'var(--accent-blue)', backgroundColor: 'rgba(72, 170, 221, 0.2)' },
                { label: 'To-Be', data: toBeData, borderColor: 'var(--accent-teal)', backgroundColor: 'rgba(76, 198, 196, 0.2)' }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { beginAtZero: true, max: 5, stepSize: 1 } },
            plugins: { legend: { position: 'top' } }
        }
    });
}

// --- EVENT LISTENERS ---

function initializeModelingEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        let state = loadState();
        const action = target.dataset.action;

        switch (action) {
            case 'view-capability':
                state.modeling.view = 'capability';
                state.modeling.selectedDisciplineId = target.dataset.disciplineId;
                state.modeling.generatedPlan = null; // Clear plan when navigating
                break;
            case 'view-domain':
                state.modeling.view = 'domain';
                state.modeling.selectedCapabilityId = target.dataset.capabilityId;
                state.modeling.generatedPlan = null;
                break;
            case 'back-to-discipline':
                state.modeling.view = 'discipline';
                state.modeling.selectedDisciplineId = null;
                state.modeling.selectedCapabilityId = null;
                state.modeling.generatedPlan = null;
                break;
            case 'back-to-capability':
                state.modeling.view = 'capability';
                state.modeling.selectedCapabilityId = null;
                state.modeling.generatedPlan = null;
                break;
            case 'generate-plan':
                const capabilityId = target.dataset.capabilityId;
                state.modeling.generatedPlan = Utils.generateUpliftInitiative(capabilityId, state);
                break;
            case 'commit-to-workspace':
                const plan = state.modeling.generatedPlan;
                if (plan && !state.diligenceWorkspace.valueLevers.some(l => l.id === plan.id)) {
                    state.diligenceWorkspace.valueLevers.push({ ...plan, type: 'capability' });
                }
                break;
        }
        
        saveState(state);
        renderModelingPage(state);
    });
    
    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'update-assessment') {
            let state = loadState();
            const { domainId, type } = target.dataset;
            const value = parseInt(target.value);

            if (state.modeling.assessmentData[domainId]) {
                state.modeling.assessmentData[domainId][type] = value;
            }
            
            state.modeling.generatedPlan = null;
            saveState(state);

            // Dynamic label update without full re-render for smoothness
            const domain = Object.values(maturityModel.disciplines)
                .flatMap(d => Object.values(d.capabilities))
                .flatMap(c => Object.values(c.domains))
                .find(d => d.id === domainId);
            
            if (domain) {
                document.getElementById(`desc-${type}-${domainId}`).textContent = domain.levels[value - 1];
            }
            
            // Re-render just the plan container to show the placeholder
            const planContainer = document.getElementById('generated-plan-container');
            if (planContainer) {
                 planContainer.innerHTML = `
                    <div class="bg-card border-2 border-dashed border-border-color rounded-lg p-6 h-full flex flex-col items-center justify-center text-center">
                        <p class="text-secondary mb-4">Your assessment has changed. Click "Generate" to create an updated plan.</p>
                        <button class="p-3 font-semibold text-white bg-accent-blue rounded-lg hover:opacity-90" data-action="generate-plan" data-capability-id="${state.modeling.selectedCapabilityId}">Generate Uplift Initiative with ARIA</button>
                    </div>
                `;
            }
        }
    });
}