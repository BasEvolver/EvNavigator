// js/aria.js - Central Conversational Engine for the Navigator Application (Persona-Aware Hub Version)


function renderAmActionCenter() {
    const ariaView = document.getElementById('aria-main-view');
    if (!ariaView) return;

    const myRenewal = croData.renewalOpportunities.find(r => r.account === 'Global Enterprises Inc.');
    const initialPrompts = [
        "Generate a conversation guide for my call with Global Enterprises Inc.",
        "I want to introduce our Platinum Support Offer, please generate a deck for Global outlining the specific benefits that would have helped them last term and what additional benefits they can leverage in the new term.",
    ];
    ariaView.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Contract Renewal Action Center</h2>
        <div class="am-action-center-layout">
            <div class="persona-main-column">
                <div class="portco-card">
                    <h3 class="card-title">Account Details</h3>
                    <div class="account-details-grid">
                        <div class="detail-item"><label>Account Name</label><p>${myRenewal.account}</p></div>
                        <div class="detail-item"><label>Health Score</label><p class="${myRenewal.health === 'At Risk' ? 'text-error' : 'text-success'}">${myRenewal.health}</p></div>
                        <div class="detail-item"><label>Current ARR</label><p>$${myRenewal.currentARR.toLocaleString()}</p></div>
                        <div class="detail-item"><label>Renewal Date</label><p>${myRenewal.renewalDate}</p></div>
                    </div>
                </div>
                <div class="portco-card">
                    <h3 class="card-title">Contract Renewal Options</h3>
                     <div class="renewal-options-grid">
                        <div class="option-card">
                            <h5>Current</h5>
                            <p class="price">$80,000</p>
                            <ul><li>Standard Package</li><li>100 Users</li></ul>
                            <p class="support-tier">Premium Support</p>
                            <button class="secondary-button">View Contract</button>
                        </div>
                        <div class="option-card recommended">
                            <h5>Recommended</h5>
                            <p class="price">$96,000</p>
                            <ul><li>Standard Package</li><li>+50 Users</li></ul>
                            <p class="support-tier">Platinum Support</p>
                            <button class="primary-button">Generate Proposal</button>
                        </div>
                        <div class="option-card">
                            <h5>Enterprise</h5>
                            <p class="price">$120,000</p>
                            <ul><li>Enterprise Package</li><li>+150 Users</li></ul>
                            <p class="support-tier">Platinum Support</p>
                            <button class="primary-button">Generate Proposal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="persona-sidebar-column">
                <div class="portco-card">
                    <h3 class="card-title">ARIA Assistant</h3>
                    <div id="aria-conversation-container" class="space-y-4">
                        <!-- Initial briefing will be loaded by runAriaSequence -->
                    </div>
                    <div id="aria-prompt-wrapper" class="mt-4">${getAdvancedPromptBoxHTML(initialPrompts)}</div>
                </div>
            </div>
        </div>
    `;
    // Kick off Maya's specific conversational narrative
    runAriaSequence("What are my priority renewals for this week?", true);
}

const generativeComponentMap = {
    "Show me the TechFlow diligence plan.": {
        script: 'js/modules/diligence-hub-component.js',
        renderer: 'DiligenceHubComponent',
        followUpQuestions: [
            "What is the impact of the 1-day delay on the critical path?",
            "Can we start the analysis 2 days earlier?",
            "Which resources are overallocated next week?"
        ]
    }
};

function getContextualPillsForCompany(companyId) {
    const state = loadState();
    const persona = state.activePersona;

    // Handle the "All Portfolio" case for Adrian first
    if (!companyId || companyId === 'all') {
        return {
            title: "Portfolio Analysis:",
            pills: [
                { label: "Performance", prompt: "How did the portfolio perform over the past 12 months?", color: "var(--accent-blue)" },
                { label: "Forecasting", prompt: "Forecast portfolio ARR for the next 6 months.", color: "var(--accent-teal)" },
                { label: "Scenario Modeling", prompt: "Model the next 12 months assuming we acquire TechFlow.", color: "var(--purple)" }
            ]
        };
    }

    // Handle specific companies based on persona
    const companyInfo = workspaceHeaders[companyId];
    const isDiligence = companyInfo && companyInfo.stage === 'Due Diligence';

    if (isDiligence) {
        // This is for Adrian's view of TechFlow
        const workstreamPills = techflow_workstreamData.map(ws => ({
            label: ws.title,
            prompt: `Show me the ${ws.title} workstream.`,
            color: ws.color
        }));
        workstreamPills.unshift({ label: "Plan", prompt: "Show me the TechFlow diligence plan.", color: "var(--text-secondary)" });
        return { title: "Explore Diligence Workstreams:", pills: workstreamPills };
    } else {
        // This handles CloudVantage for all other personas
        switch (persona) {
            case 'connor': // CRO
                return {
                    title: "CRO Hub:",
                    pills: [
                        { label: "Performance", prompt: "Give me a breakdown of our current sales performance against targets.", color: "var(--status-success)" },
                        { label: "Pipeline & Forecast", prompt: "What are the biggest risks and opportunities in the current sales pipeline?", color: "var(--accent-blue)" },
                        { label: "Organization", prompt: "What is the plan to address the EMEA performance issue?", color: "var(--purple)" },
                        { label: "Initiatives", prompt: "Analyze the NewCo customer base for further cross-sell opportunities.", color: "var(--accent-teal)" }
                    ]
                };
            case 'maya': // Account Manager
                 return {
                    title: "AM Action Center:",
                    pills: [
                        { label: "Prepare for Global Inc. call", prompt: "Generate a conversation guide for my call with Global Enterprises Inc.", color: "var(--accent-blue)" },
                        { label: "Review Apex Solutions contract", prompt: "Summarize the key terms of the Apex Solutions renewal contract.", color: "var(--accent-teal)" },
                        { label: "Propose Platinum Offer", prompt: "I want to introduce our Platinum Support Offer, please generate a deck for Global outlining the specific benefits that would have helped them last term and what additional benefits they can leverage in the new term.", color: "var(--purple)" }
                    ]
                };
            case 'evelyn':
            case 'adrian':
            default: // This is for the CEO/Operating Partner view of CloudVantage
                return {
                    title: "Explore Value Creation Pillars:",
                    pills: [
                        { label: "Engine for Growth", prompt: "Explore the Engine for Growth pillar.", color: "var(--accent-blue)" },
                        { label: "Product & Value", prompt: "Explore the Product & Value pillar.", color: "var(--accent-teal)" },
                        { label: "Operational Excellence", prompt: "Explore the Operational Excellence pillar.", color: "var(--purple)" }
                    ]
                };
        }
    }
}
document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'aria') {
        document.body.classList.add('page-aria');
        
        // --- CORRECTED ORDER ---
        // 1. Initialize the page first to set the state from the URL
        initializeAriaPage(); 
        
        // 2. NOW load shared components, which will use the correct state
        await loadSharedComponents(); 
        
        // 3. Attach event listeners
        initializeAriaEventListeners(); 
        
        if (!document.getElementById('file-attachment-input')) {
            document.body.insertAdjacentHTML('beforeend', `<input type="file" id="file-attachment-input" style="display: none;" multiple />`);
        }
    }
});

async function loadScript(url) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) { return resolve(); }
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${url}`));
        document.head.appendChild(script);
    });
}

function scrollToConversationBottom() {
    const conversationContainer = document.getElementById('aria-conversation-container');
    if (conversationContainer) {
        conversationContainer.scrollTop = conversationContainer.scrollHeight;
    }
}

function initializeAriaPage() {
    const params = new URLSearchParams(window.location.search);
    const prompt = params.get('prompt');
    const workstream = params.get('workstream');
    const contextSource = params.get('contextSource');
    
    let state = loadState();
    const companyId = params.get('company') || state.selectedCompanyId || 'techflow-solutions';
    state.selectedCompanyId = companyId;

    if (!state.aria) state.aria = {};
    state.aria.activeContextualPills = null;
    saveState(state);

    const { activePersona } = state;
    Navigation.updateCompanySelector();
    
    // --- THIS IS THE PERSONA ROUTER ---
const conversationContainer = document.getElementById('aria-conversation-container');
    if (!conversationContainer) return;
    
    // Clear the container for a fresh start
    conversationContainer.innerHTML = '';

    if (contextSource) {
        try {
            const contextData = JSON.parse(atob(contextSource));
            renderContextualHeader(contextData);
        } catch (e) {
            console.error("Failed to parse context source:", e);
        }
    }

    if (prompt) {
        if (workstream) {
            state.techflowAria.activeWorkstream = workstream;
            saveState(state);
        }
        runAriaSequence(prompt);
    } else {
        // This function now correctly handles the startup for ALL personas
        renderAriaCleanSlate(companyId, activePersona);
    }
}

function renderContextualHeader(contextData) {
    const conversationContainer = document.getElementById('aria-conversation-container');
    if (!conversationContainer || !contextData) return;

    let headerHTML = `
        <div class="context-header-wrapper">
            <p class="context-header-pre-title">Based on your selection:</p>
            <div class="context-header-card">
                <h4 class="context-header-title">${contextData.title}</h4>
                <p class="context-header-description">${contextData.description}</p>
            </div>
        </div>
    `;
    conversationContainer.innerHTML += headerHTML;
}

function renderAriaCleanSlate(companyId, persona) {
    const promptWrapper = document.getElementById('aria-prompt-wrapper');
    if (!promptWrapper) return;

    const contextualPills = getContextualPillsForCompany(companyId);
    let initialPrompts = [];

    // --- THIS IS THE KEY LOGIC CHANGE ---
    if (persona === 'connor') {
        // For Connor, we don't show initial prompts in the box.
        // Instead, we kick off his specific conversational flow immediately.
        runAriaSequence("Give me my CRO daily briefing.", true);
        return; // Stop the function here for Connor
    } else if (persona === 'maya') {
        runAriaSequence("What are my priority renewals for this week?", true);
        return; // Stop the function here for Maya
    }
    
    // Logic for other personas remains the same
    if (companyId === 'techflow-solutions') {
        initialPrompts = ["Provide an overview of the current registered anomalies.", "What is the impact of the 1-day delay on the critical path?", "Summarize the key findings from the Commercial diligence."];
    } else if (companyId === 'cloudvantage') {
        initialPrompts = [
            "Give me a summary of CloudVantage's Q2 business performance.",
            "What are the key risks to achieving the annual plan?",
            "Analyze the key drivers of our Net Revenue Retention."
        ];
    } else { 
        initialPrompts = [
            "How did the portfolio perform over the past 12 months?",
            "Show me the priority alerts across the portfolio.",
            "Forecast portfolio ARR for the next 6 months."
        ];
    }
    
    promptWrapper.innerHTML = getAdvancedPromptBoxHTML(initialPrompts, contextualPills);
}

async function typeWords(element, text, callback) {
    element.innerHTML = "";
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    let i = 0;
    const words = text.split(' ');
    const timer = setInterval(() => {
        if (i < words.length) {
            element.innerHTML += words[i] + ' ';
            i++;
            scrollToConversationBottom(); 
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 30);
}

async function runAriaSequence(promptText, isInitialBriefing = false) {
    if (!promptText) return;
    let state = loadState();
    const companyId = state.selectedCompanyId;
    
    const allStaticResponses = ariaResponseMap[companyId] || {};

    const conversationContainer = document.getElementById('aria-conversation-container');
    const promptWrapper = document.getElementById('aria-prompt-wrapper');
    if (!conversationContainer || !promptWrapper) return;

    promptWrapper.innerHTML = getAdvancedPromptBoxHTML([], null); // Clear prompts while ARIA "thinks"

    if (!isInitialBriefing) {
        const persona = PERSONAS[state.activePersona];
        const nameParts = persona.name.split(' ');
        const initials = (nameParts[0]?.[0] || '') + (nameParts[1]?.[0] || '');
        const userPromptHTML = `<div class="user-prompt-wrapper"><div class="user-prompt-bubble"><p class="font-semibold">${persona.name}:</p><p>${promptText}</p></div><div class="persona-avatar-bubble" style="background-color: ${persona.avatarColor}; color: ${persona.avatarTextColor};">${initials}</div></div>`;
        conversationContainer.insertAdjacentHTML('beforeend', userPromptHTML);
        scrollToConversationBottom();
    }
    
    const componentInfo = generativeComponentMap[promptText];
    let staticResponseData = allStaticResponses[promptText];

// State management for sticky pills
    const followUps = staticResponseData?.followUpQuestions;
    if (followUps && followUps.length > 0 && typeof followUps[0] === 'object') {
        // ONLY update sticky pills if the follow-ups are a new set of pill objects.
        if (!state.aria) state.aria = {};
        state.aria.activeContextualPills = followUps;
        saveState(state);
    } else if (isInitialBriefing) { 
        // Clear sticky pills on any initial briefing.
        if (!state.aria) state.aria = {};
        state.aria.activeContextualPills = null;
        saveState(state);
    }

    if (componentInfo || staticResponseData) {
        // --- This block handles your PRE-DEFINED, CURATED responses ---
        const responseId = `aria-content-target-${Date.now()}`;
        const responseDataId = staticResponseData?.id || 'component-response';
        const ariaHeaderHTML = `
            <div class="aria-response-wrapper">
                <div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div>
                <div class="aria-response-bubble">
                    <div class="response-main-content">
                        <p class="font-semibold">Aria:</p>
                        <div id="${responseId}" class="pt-4"></div>
                    </div>
                    ${getResponseFooterHTML(responseDataId)}
                </div>
            </div>`;
        conversationContainer.insertAdjacentHTML('beforeend', ariaHeaderHTML);
        const targetElement = document.getElementById(responseId);

        if (componentInfo) {
            await loadScript(componentInfo.script);
            window[componentInfo.renderer].render(targetElement, companyId);
            runAriaBuildingSequence({ suggestedPrompts: componentInfo.followUpQuestions }, targetElement, promptWrapper);
        } else if (staticResponseData) {
            runAriaBuildingSequence(staticResponseData, targetElement, promptWrapper);
        }
     } else {
        // --- UPGRADED: Reasoning Simulation with Blinking Dots ---
        const responseId = `aria-content-target-${Date.now()}`;
        const simulationStepsId = `simulation-steps-${responseId}`; // Unique ID for the steps container

        // New HTML structure with a persistent container for dots and a separate one for steps
        const simulationHTML = `
            <div class="aria-response-wrapper">
                <div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div>
                <div class="aria-response-bubble">
                    <p class="font-semibold">Aria:</p>
                    <div id="${responseId}" class="response-text">
                        <div class="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                        <div id="${simulationStepsId}" class="reasoning-simulation">
                            <!-- Simulation steps will be injected here -->
                        </div>
                    </div>
                </div>
            </div>`;
        conversationContainer.insertAdjacentHTML('beforeend', simulationHTML);
        
        // Get references to BOTH the main container and the steps container
        const fullResponseContainer = document.getElementById(responseId);
        const stepsContainer = document.getElementById(simulationStepsId);
        scrollToConversationBottom();

        // This async function runs the simulation and fetches the real answer
        const runSimulationAndFetch = async () => {
            // --- 1. PRE-FLIGHT: Get the likely tools (no changes here) ---
            let tools = [];
            try {
                const intentResponse = await fetch('/api/recognize-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: promptText })
                });
                const intentData = await intentResponse.json();
                tools = intentData.tools || [];
            } catch (e) {
                console.error("Frontend intent recognition failed, will use default steps.", e);
            }

            // --- 2. BACKGROUND: Start the REAL API call (no changes here) ---
            const getFinalAnswer = async () => {
                const persona = state.activePersona;
                const dynamicContext = getDynamicContext(companyId, persona);
                const apiResponse = await fetch('/api/ask-aria-agent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prompt: promptText,
                        appContext: { companyId, persona },
                        staticContext: dynamicContext
                    }),
                });
                const data = await apiResponse.json();
                if (!apiResponse.ok) {
                    throw new Error(data.error || `HTTP error! status: ${apiResponse.status}`);
                }
                return data.geminiResponse;
            };
            const finalAnswerPromise = getFinalAnswer();

            // --- 3. FOREGROUND: Run the visual simulation ---
            let steps = [];
            if (tools.length > 0) {
                tools.forEach(toolName => {
                    if (reasoningSteps[toolName]) {
                        steps.push(...reasoningSteps[toolName]);
                    }
                });
            } else {
                steps = reasoningSteps._default;
            }

            for (const step of steps) {
                // THIS IS THE KEY CHANGE: We now only update the stepsContainer
                stepsContainer.innerHTML = `<div class="reasoning-step"><div class="spinner-small"></div><span>${step}</span></div>`;
                scrollToConversationBottom();
                await new Promise(r => setTimeout(r, 1500 + Math.random() * 500));
            }

            // --- 4. FINISH: Await the real answer and render it ---
            try {
                const finalAnswer = await finalAnswerPromise;
                // THIS IS THE KEY CHANGE: We replace the entire content of the parent container
                // This removes both the dots and the steps container in one go.
                fullResponseContainer.innerHTML = marked.parse(finalAnswer);
            } catch (error) {
                console.error("Error calling Aria Reasoning Agent:", error);
                fullResponseContainer.innerHTML = `<p class="text-error">Sorry, I encountered an error. Please try again.</p>`;
            }
            scrollToConversationBottom();
        };

        runSimulationAndFetch(); // Kick off the whole process
    }
    setTimeout(() => scrollToConversationBottom(), 100);
}

// js/aria.js - REPLACE this entire function

async function runAriaBuildingSequence(responseData, targetElement, promptWrapper) {
    let state = loadState();
    
    const fullHTML = responseData.renderFunc(state);
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = fullHTML;

    const buildItems = Array.from(tempContainer.querySelectorAll('.build-item'));
    const responseContentWrapper = tempContainer.querySelector('.aria-response-content');
    
    if (responseContentWrapper) {
        responseContentWrapper.innerHTML = ''; 
        targetElement.appendChild(responseContentWrapper); 
    }

    for (const item of buildItems) {
        responseContentWrapper.appendChild(item);
        await new Promise(r => setTimeout(r, 100));
        item.classList.add('visible');
        scrollToConversationBottom();

        const typingElements = item.querySelectorAll('[data-typing-text]');
        
        for (const el of typingElements) {
            await new Promise(resolve => typeWords(el, el.dataset.typingText, resolve));
        }
        
        if (responseData.chartId && responseData.chartConfig) {
            const chartCanvas = document.getElementById(responseData.chartId);
            if (chartCanvas) {
                const themeColors = {
                    THEME_ACCENT_BLUE: getThemeColor('--accent-blue'),
                    THEME_ACCENT_TEAL: getThemeColor('--accent-teal'),
                    THEME_PURPLE: getThemeColor('--purple'),
                    THEME_STATUS_SUCCESS: getThemeColor('--status-success'),
                    THEME_STATUS_ERROR: getThemeColor('--status-error'),
                    THEME_TEXT_SECONDARY: getThemeColor('--text-secondary'),
                    THEME_TEXT_MUTED: getThemeColor('--text-muted'),
                    THEME_BORDER_COLOR: getThemeColor('--border-color'),
                    THEME_ACCENT_BLUE_TRANSLUCENT: getThemeColor('--accent-blue-translucent'),
                    THEME_ACCENT_TEAL_TRANSLUCENT: getThemeColor('--accent-teal-translucent'),
                    THEME_STATUS_ERROR_TRANSLUCENT: getThemeColor('--status-error-translucent'),
                };
                let chartString = JSON.stringify(responseData.chartConfig);
                for (const [key, value] of Object.entries(themeColors)) {
                    chartString = chartString.replace(new RegExp(`"${key}"`, 'g'), `"${value}"`);
                }
                const dynamicConfig = JSON.parse(chartString);
                new Chart(chartCanvas.getContext('2d'), dynamicConfig);
            }
        }
    }

    const responseBubble = targetElement.closest('.aria-response-bubble');
    const footer = responseBubble.querySelector('.response-actions-footer');
    if (footer) {
        await new Promise(r => setTimeout(r, 300));
        footer.classList.add('visible');
    }

    // --- START OF THE FIX ---
    let suggestedPrompts = [];
    // By default, get the main contextual pills for the current persona and company.
    let contextualPills = getContextualPillsForCompany(state.selectedCompanyId); 

    const followUps = responseData.followUpQuestions || [];

    // Check if the follow-ups are simple text prompts (strings) or a new set of pills (objects).
    if (followUps.length > 0 && typeof followUps[0] === 'string') {
        // Case 1: The follow-ups are text prompts. Use them alongside the main persona pills.
        // This is the correct flow for Connor's daily briefing.
        suggestedPrompts = followUps;
    } else if (followUps.length > 0 && typeof followUps[0] === 'object') {
        // Case 2: The follow-ups are a new set of contextual pills.
        // Overwrite the main pills with this more specific set. This is for Evelyn's drill-down.
        contextualPills = { title: "Explore Disciplines:", pills: followUps };
    }

    // Render the prompt box with the correctly sorted data.
    promptWrapper.innerHTML = getAdvancedPromptBoxHTML(suggestedPrompts, contextualPills);
    // --- END OF THE FIX ---
    
    setTimeout(() => scrollToConversationBottom(), 50);
}
function getResponseFooterHTML(responseId) {
    // Load the current state to check if this response has already been flagged
    const state = loadState();
    const isFlagged = (state.diliggingWorkspace && state.diligenceWorkspace.keyRisks[responseId]) ? 'filled' : '';

    return `
        <div class="response-actions-footer">
            <div class="workspace-controls">
                <button class="feedback-icon ${isFlagged}" data-action="flag-response" data-response-id="${responseId}">
                    <span class="tooltip-text tooltip-bottom">Add to Workspace</span>
                    <span class="icon-unfilled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/></svg></span>
                    <span class="icon-filled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001z"/></svg></span>
                </button>
            </div>
            <div class="feedback-controls">
                <button class="feedback-icon" data-action="feedback">
                    <span class="tooltip-text tooltip-bottom">Provide Feedback</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM1 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>
                </button>
                <button class="feedback-icon" data-action="thumb-down">
                    <span class="tooltip-text tooltip-bottom">Bad response</span>
                    <span class="icon-unfilled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/></svg></span>
                    <span class="icon-filled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1 .757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068-.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/></svg></span>
                </button>
                <button class="feedback-icon" data-action="thumb-up">
                    <span class="tooltip-text tooltip-bottom">Good response</span>
                    <span class="icon-unfilled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064 1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111-.273-.154-.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/></svg></span>
                    <span class="icon-filled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.638.199-.575.356-1.539.428-2.59z"/></svg></span>
                </button>
            </div>
        </div>
    `;
}

function initializeAriaEventListeners() {
    if (document.body.dataset.ariaListenerAttached) return;
    document.body.dataset.ariaListenerAttached = 'true';
    
    document.addEventListener('click', e => {
        if (Navigation.getCurrentPage() !== 'aria') return;

        const target = e.target.closest('[data-action]');
        if (!target) return;
        
        let state = loadState();
        const action = target.dataset.action;

        switch (action) {
                        case 'navigate-to-modeling':
                const capabilityId = target.dataset.capabilityId;
                const companyId = state.selectedCompanyId;
                if (capabilityId && companyId) {
                    // Create a context object to explain the navigation source
                    const contextData = {
                        title: target.dataset.contextTitle || "Modeling Initiative",
                        description: target.dataset.contextDesc || "Continuing analysis from ARIA's suggestion."
                    };
                    // Encode the context to pass in the URL
                    const encodedContext = btoa(JSON.stringify(contextData));
                    window.location.href = `modeling.html?company=${companyId}&capability=${capabilityId}&contextSource=${encodedContext}`;
                }
                break;
            // --- FIX END ---

            
       case 'run-suggested-prompt':
                const question = target.dataset.question;
                if (question) {
                    runAriaSequence(question);
                }
                break;

            case 'ask-aria':
                const input = document.getElementById('aria-prompt-input');
                const promptText = input ? input.value.trim() : '';
                if (promptText) {
                    input.value = '';
                    runAriaSequence(promptText);
                }
                break;

            case 'restart-conversation':
                const conversationContainer = document.getElementById('aria-conversation-container');
                if(conversationContainer) conversationContainer.innerHTML = '';
                if (state.aria) state.aria.activeContextualPills = null; // Clear sticky pills
                saveState(state);

                const url = new URL(window.location);
                url.searchParams.delete('prompt');
                url.searchParams.delete('contextSource');
                window.history.pushState({}, '', url);
                renderAriaCleanSlate(state.selectedCompanyId, state.activePersona);
                break;

            case 'toggle-settings-modal':
                state.ariaSettings.isModalOpen = !state.ariaSettings.isModalOpen;
                saveState(state);
                               break;
case 'toggle-settings-modal':
    document.getElementById('settings-modal')?.classList.toggle('visible');
    break;
            case 'toggle-category':
                const categoryKey = target.dataset.category;
                if (!state.ariaSettings.expandedCategories) state.ariaSettings.expandedCategories = {};
                state.ariaSettings.expandedCategories[categoryKey] = !state.ariaSettings.expandedCategories[categoryKey];
                saveState(state);
                const contentDiv = target.nextElementSibling;
                const chevronIcon = target.querySelector('svg');
                if (contentDiv && chevronIcon) {
                    contentDiv.classList.toggle('expanded');
                    chevronIcon.classList.toggle('rotate-90');
                }
                break;
                      case 'flag-response':
                const responseId = target.dataset.responseId;
                if (!responseId) break;

                // --- THIS IS THE CORRECTED LOGIC ---
                // 1. Get all possible responses from our new, unified map.
                const allResponsesFromMap = {
                    ...ariaResponseMap['all'],
                    ...ariaResponseMap['techflow-solutions'],
                    ...ariaResponseMap['cloudvantage']
                };

                // 2. Combine them with other flaggable items like anomalies.
                const allSources = [
                    ...techflow_anomalies, 
                    ...otherObservations_v2, 
                    ...techflow_minorObservations, 
                    ...Object.values(allResponsesFromMap)
                ];
                // --- END OF CORRECTION ---

                const responseData = allSources.find(item => item.id === responseId);

                if (responseData) {
                    const flagButton = target.closest('button');
                    if (state.diligenceWorkspace.keyRisks[responseId]) {
                        delete state.diligenceWorkspace.keyRisks[responseId];
                        flagButton.classList.remove('filled');
                    } else {
                        state.diligenceWorkspace.keyRisks[responseId] = { 
                            id: responseId, 
                            title: responseData.title || responseData.text, 
                            impact: responseData.impact, 
                            severity: responseData.severity,
                            source: 'Aria Assistant (Exp)' 
                        };
                        flagButton.classList.add('filled');
                    }
                    saveState(state);
                }
                break
            case 'thumb-up':
            case 'thumb-down':
                const btn = target.closest('button');
                const isFilled = btn.classList.contains('filled');
                if (action === 'thumb-up') btn.parentElement.querySelector('[data-action="thumb-down"]').classList.remove('filled');
                if (action === 'thumb-down') btn.parentElement.querySelector('[data-action="thumb-up"]').classList.remove('filled');
                btn.classList.toggle('filled', !isFilled);
                break;
            case 'feedback':
                const feedbackModalHTML = `<div id="feedback-modal-overlay" class="feedback-modal-overlay"><div class="feedback-modal-content"><h4 class="feedback-modal-title">Provide Feedback</h4><p class="feedback-modal-text">Your feedback helps improve Aria's responses.</p><textarea id="feedback-textarea" class="feedback-textarea" rows="4" placeholder="Enter your comments..."></textarea><div class="feedback-modal-actions"><button id="close-feedback-modal" class="secondary-button">Cancel</button><button id="submit-feedback" class="primary-button">Submit to Aria</button></div></div></div>`;
                document.body.insertAdjacentHTML('beforeend', feedbackModalHTML);
                document.getElementById('submit-feedback').addEventListener('click', () => {
                    document.getElementById('feedback-modal-overlay').remove();
                });
                document.getElementById('close-feedback-modal').addEventListener('click', () => {
                    document.getElementById('feedback-modal-overlay').remove();
                });
                document.getElementById('feedback-modal-overlay').addEventListener('click', (e) => {
                    if (e.target.id === 'feedback-modal-overlay') e.target.remove();
                });
                break;
            case 'toggle-observations':
                state.techflowAria.minorObservationsExpanded = !state.techflowAria.minorObservationsExpanded;
                saveState(state);
                const container = target.closest('#anomaly-discovery-content');
                if(container) {
                    const contentDiv = container.querySelector('.minor-observations-content');
                    const icon = target.querySelector('svg');
                    contentDiv.classList.toggle('expanded', state.techflowAria.minorObservationsExpanded);
                    icon.classList.toggle('rotate-180', state.techflowAria.minorObservationsExpanded);
                }
                break;
            case 'attach-file':
                document.getElementById('file-attachment-input').click();
                break;
            case 'remove-file':
                const filePill = target.closest('.file-pill');
                filePill.remove();
                let currentState = loadState();
                if (currentState.ariaAttachedFiles && currentState.ariaAttachedFiles[filePill.dataset.filename]) {
                    delete currentState.ariaAttachedFiles[filePill.dataset.filename];
                    saveState(currentState);
                }
                break;
        }
    });

    document.addEventListener('change', e => {
        if (Navigation.getCurrentPage() !== 'aria') return;

        const target = e.target.closest('[data-action="update-setting"]');
        if (!target) return;
        let state = loadState();
        const { parent, key } = target.dataset;
        if (parent) {
            if (!state.ariaSettings[parent]) state.ariaSettings[parent] = {};
            state.ariaSettings[parent][key] = target.checked;
        } else {
            state.ariaSettings[key] = target.checked;
        }
        saveState(state);
    });

    document.addEventListener('input', e => {
        if (Navigation.getCurrentPage() !== 'aria') return;

        const target = e.target;
        if (target.id === 'aria-prompt-input') {
            target.style.height = 'auto';
            target.style.height = (target.scrollHeight) + 'px';
        }
    });

    document.addEventListener('change', handleFileAttachment);
}



function handleFileAttachment(e) {
    if (e.target.id !== 'file-attachment-input') return;
    const displayContainer = document.getElementById('file-attachment-display');
    if (!displayContainer) return;
    displayContainer.innerHTML = '';
    for (const file of e.target.files) {
        const filePillHTML = `
            <div class="file-pill" data-filename="${file.name}">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                <span class="file-name">${file.name}</span>
                <button class="remove-file-btn" data-action="remove-file" title="Remove file">×</button>
            </div>
        `;
        displayContainer.innerHTML += filePillHTML;
    }
}