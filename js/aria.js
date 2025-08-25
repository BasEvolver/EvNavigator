// js/aria.js - Logic for the main Aria AI Assistant page

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

const companyDataMap = {
    'techflow-solutions': {
        workstreamData: techflow_workstreamData,
        ariaResponses: techflow_ariaResponses
    },
    'cloudvantage': {
        workstreamData: cloudvantage_workstreamData,
        ariaResponses: cloudvantage_ariaResponses
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'aria') {
        document.body.classList.add('page-aria');
        const params = new URLSearchParams(window.location.search);
        const companyId = params.get('company') || 'techflow-solutions';
        let state = loadState();
        state.selectedCompanyId = companyId;
        saveState(state);
        await loadSharedComponents();
        initializeAriaPage();
        initializeAriaEventListeners();
        if (!document.getElementById('file-attachment-input')) {
            document.body.insertAdjacentHTML('beforeend', `<input type="file" id="file-attachment-input" style="display: none;" multiple />`);
        }
    }
});

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
    const companyId = params.get('company') || 'techflow-solutions';
    let state = loadState();
    const { activePersona } = state;

    if (activePersona === 'maya') {
        renderAmActionCenter();
        return;
    }

    Navigation.updateCompanySelector();

    const conversationContainer = document.getElementById('aria-conversation-container');
    const promptWrapper = document.getElementById('aria-prompt-wrapper');

if (prompt) {
    // If a prompt is in the URL, run the sequence.
    // We still check if the container is empty to prevent re-running on a page refresh.
    if (conversationContainer && conversationContainer.innerHTML.trim() === '') {
        if (workstream) {
            state.techflowAria.activeWorkstream = workstream;
            saveState(state);
        }
        runAriaSequence(prompt);
    }
} else {
    // If there is NO prompt in the URL, ALWAYS render the clean slate.
    // This is the main fix that ensures a reset when clicking the sidebar link.
    renderAriaCleanSlate(companyId);
}
}

function renderAriaCleanSlate(companyId) {
    const conversationContainer = document.getElementById('aria-conversation-container');
    const promptWrapper = document.getElementById('aria-prompt-wrapper');
    if (!promptWrapper || !conversationContainer) return;

    let welcomeMessage = "";
    if (companyId === 'techflow-solutions') {
        welcomeMessage = "Hello. I'm ready to assist with the TechFlow diligence. You can start with an overview of the plan or select a specific workstream below to begin your analysis.";
    } else if (companyId === 'all') {
        welcomeMessage = "Hello. I'm ready to assist with your portfolio analysis. Please select a starting point below.";
    } else {
        const companyName = companyDataMap[companyId] ? workspaceHeaders[companyId].title : "the company";
        welcomeMessage = `Hello. I'm ready to assist with ${companyName}. Please select a starting point below.`;
    }

    if (conversationContainer.innerHTML.trim() === '') {
        conversationContainer.innerHTML = `
            <div class="aria-response-wrapper">
                <div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div>
                <div class="aria-response-bubble">
                    <p class="font-semibold">Aria:</p>
                    <p class="response-text">${welcomeMessage}</p>
                </div>
            </div>
        `;
    }

    let suggestedPrompts = [];
    let contextualPills = null;

    if (companyId === 'techflow-solutions') {
        const isGanttVisible = conversationContainer.querySelector('.diligence-hub-container');
        const workstreamPillsList = [
            { label: "Business & Strategy", prompt: "Show me the Business & Strategy workstream.", color: "var(--accent-blue)" },
            { label: "Commercial & Customer", prompt: "Show me the Commercial & Customer workstream.", color: "var(--accent-teal)" },
            { label: "Technology & Operations", prompt: "Show me the Technology & Operations workstream.", color: "var(--purple)" },
            { label: "Financial & Risk", prompt: "Show me the Financial & Risk workstream.", color: "var(--status-warning)" }
        ];

        if (!isGanttVisible) {
            workstreamPillsList.unshift({ label: "Plan", prompt: "Show me the TechFlow diligence plan.", color: "var(--text-secondary)" });
        }
        
        contextualPills = {
            title: "Explore Diligence:",
            pills: workstreamPillsList
        };
        
        // THIS IS THE FIX: Always show some general prompts as a fallback.
        suggestedPrompts = [
            "What are the key risks for TechFlow Solutions?",
            "Summarize the latest board meeting for TechFlow Solutions."
        ];

    } else if (companyId === 'all') {
        suggestedPrompts = [
            "Provide an overview of the TechFlow Due Diligence activities.",
            "How is the NewCo integration going for CloudVantage?"
        ];
    } else {
        const companyName = companyDataMap[companyId] ? workspaceHeaders[companyId].title : "the company";
        suggestedPrompts = [
            `What are the key risks for ${companyName}?`,
            `Summarize the latest board meeting for ${companyName}.`
        ];
    }
    
    promptWrapper.innerHTML = getAdvancedPromptBoxHTML(suggestedPrompts, contextualPills);
}

function renderAmActionCenter() {
    const ariaView = document.getElementById('aria-main-view');
    if (!ariaView) return;
    const initialPrompts = [
        "Please send me the conversation guide for Global. Update it with their latest support ticket status and the number of tickets we've received for them.",
        "I want to introduce our Platinum Support Offer, please generate a deck for Global outlining the specific benefits that would have helped them last term and what additional benefits they can leverage in the new term.",
    ];
    ariaView.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Contract Renewal Action Center</h2>
        <div class="am-action-center-layout">
            <div class="persona-main-column">
                <div class="portco-card">
                    <h3 class="card-title">Account Details</h3>
                    <div class="account-details-grid">
                        <div class="detail-item"><label>Account Name</label><p>Global Enterprises Inc.</p></div>
                        <div class="detail-item"><label>Account Type</label><p>Enterprise</p></div>
                        <div class="detail-item"><label>Opportunity Status</label><p>Renewal</p></div>
                        <div class="detail-item"><label>Region</label><p>Americas (US)</p></div>
                        <div class="detail-item"><label>Current Term</label><p>12 Months</p></div>
                        <div class="detail-item"><label>Contact</label><p>Michael Wilson</p></div>
                        <div class="detail-item"><label>Billing Frequency</label><p>Annual</p></div>
                        <div class="detail-item"><label>Contract Owner</label><p>Connor Hayes</p></div>
                    </div>
                </div>
                <div class="portco-card">
                    <h3 class="card-title">Contract Details</h3>
                    <div class="renewal-options-grid">
                        <div class="option-card">
                            <h5>Current</h5>
                            <p class="price">80,000 USD</p>
                            <ul><li>Standard Package (Tier 2)</li><li>with 100 Users & 5 Domains</li></ul>
                            <p class="support-tier">Platform Access: PREMIUM</p>
                            <button class="secondary-button">View</button>
                        </div>
                        <div class="option-card">
                            <h5>Option 1</h5>
                            <p class="price">120,000 USD</p>
                            <ul><li>Enterprise Package (Tier 3)</li><li>with 250 Users & 10 Domains</li></ul>
                            <p class="support-tier">Platform Access: ENTERPRISE</p>
                            <button class="primary-button">Select</button>
                        </div>
                        <div class="option-card recommended">
                            <h5>Recommended</h5>
                            <p class="price">90,000 USD</p>
                            <ul><li>Standard Package (Tier 2)</li><li>with 150 Users & 8 Domains</li></ul>
                            <p class="support-tier">Platform Access: PREMIUM+</p>
                            <button class="primary-button">Select</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="persona-sidebar-column">
                <div class="portco-card">
                    <h3 class="card-title">Conversation with Pilot</h3>
                    <div id="aria-conversation-container" class="space-y-4">
                        <div class="aria-response-bubble"><p class="response-text">Hi Maya, you've been assigned a renewal action for **Global Enterprises Inc.**</p></div>
                    </div>
                    <div id="aria-prompt-wrapper" class="mt-4">${getAdvancedPromptBoxHTML(initialPrompts)}</div>
                </div>
            </div>
        </div>
    `;
}

function getAdvancedPromptBoxHTML(questions = [], contextualPills = null) {
    const state = loadState();
    const promptsHTML = (Array.isArray(questions) ? questions : []).map(q => `<button class="suggestion-pill" data-action="run-suggested-prompt" data-question="${q}">${q}</button>`).join('');
    
    let contextualPillsHTML = '';
    if (contextualPills) {
        const pillButtons = contextualPills.pills.map(p => 
            `<button class="suggestion-pill" data-action="run-suggested-prompt" data-question="${p.prompt}" style="background-color: ${p.color}20; border-color: ${p.color}; color: ${p.color};">
                ${p.label}
            </button>`
        ).join('');
        contextualPillsHTML = `
            <div class="flex items-center gap-3 mb-2">
                <h4 class="list-header !mb-0">${contextualPills.title}</h4>
                <div class="actions-list !mt-0 !gap-2">${pillButtons}</div>
            </div>`;
    }

    return `
        <div id="aria-prompt-container" class="mt-auto pt-4 flex-shrink-0">
            <div class="prompt-area-large-v4">
                ${contextualPillsHTML}
                <div class="suggestion-pills-container ${contextualPills ? 'pt-4 border-t border-border-color' : ''}">${promptsHTML}</div>
                <textarea id="aria-prompt-input" class="prompt-textarea" rows="1" placeholder="Ask a follow-up..."></textarea>
                <div id="file-attachment-display" class="file-attachment-display"></div>
                <div class="prompt-actions-bottom-bar">
                    <div class="prompt-actions-left">
                        <button data-action="attach-file" class="prompt-action-button" title="Attach File"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                        <div class="relative"><button data-action="toggle-settings-modal" class="prompt-action-button" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></button>${renderSettingsModal(state.ariaSettings)}</div>
                    </div>
                    <div class="prompt-actions-right">
                        <button data-action="restart-conversation" class="prompt-action-button" title="Restart Conversation"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
                        <button class="prompt-send-button" data-action="ask-aria" title="Send"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSettingsModal(settings) {
    const { isModalOpen, expandedCategories = {} } = settings;
    const settingsStructure = {
        context: { label: 'Context', main: settings.context?.main, items: { ddDataRoom: 'DD Data Room', investmentThesis: 'Investment Thesis', financialModel: 'Financial Model', meetingTranscripts: 'Meeting Transcripts' } },
        domainKnowledge: { label: 'Domain Knowledge', main: settings.domainKnowledge?.main, items: { playbooks: 'Playbooks', kpiLibrary: 'KPI Library', maturityModel: 'Maturity Model', industryBenchmarks: 'Industry Benchmarks' } },
        externalData: { label: 'External Data', main: settings.externalData?.main, items: { linkedin: 'LinkedIn', pitchbook: 'PitchBook', glassdoor: 'Glassdoor', web: 'Web Research' } },
        internalData: { label: 'Internal Data', main: settings.internalData?.main, items: { erp: 'ERP Systems', crm: 'CRM Data', hcm: 'HCM Systems', devops: 'DevOps Metrics' } }
    };
    const renderCategory = (categoryKey, category) => {
        const isExpanded = expandedCategories[categoryKey] || false;
        const subItemsHTML = Object.entries(category.items).map(([itemKey, itemLabel]) => `<div class="flex items-center justify-between pl-6 py-1"><label for="setting-${categoryKey}-${itemKey}" class="text-xs text-secondary">${itemLabel}</label><label class="toggle-switch toggle-switch-sm"><input type="checkbox" id="setting-${categoryKey}-${itemKey}" data-action="update-setting" data-parent="${categoryKey}" data-key="${itemKey}" ${settings[categoryKey]?.[itemKey] ? 'checked' : ''}><span class="slider round"></span></label></div>`).join('');
        return `<div class="border-b border-border-color last:border-b-0"><div class="flex items-center justify-between py-2 cursor-pointer" data-action="toggle-category" data-category="${categoryKey}"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="text-sm font-bold text-text-primary">${category.label}</span></div><label class="toggle-switch" onclick="event.stopPropagation();"><input type="checkbox" data-action="update-setting" data-parent="${categoryKey}" data-key="main" ${category.main ? 'checked' : ''}><span class="slider round"></span></label></div><div class="category-content ${isExpanded ? 'expanded' : ''}">${subItemsHTML}</div></div>`;
    };
    return `<div id="settings-modal" class="settings-modal ${isModalOpen ? 'visible' : ''}" style="bottom: 125%; left: 0;"><div class="p-3 space-y-1 text-sm"><div class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 pb-1 border-b border-border-color">Data Sources</div>${Object.entries(settingsStructure).map(([key, category]) => renderCategory(key, category)).join('')}</div></div>`;
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
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 30);
}

async function runAriaBuildingSequence(responseElement) {
    const buildItems = responseElement.querySelectorAll('.build-item');
    for (const item of buildItems) {
        item.classList.add('visible');
        const typingElements = item.querySelectorAll('[data-typing-text]');
        for (const el of typingElements) {
            await new Promise(resolve => typeWords(el, el.dataset.typingText, resolve));
        }
        const listElements = item.querySelectorAll('[data-animate-list]');
        for (const list of listElements) {
            const listItems = Array.from(list.children);
            list.innerHTML = '';
            for (const li of listItems) {
                list.appendChild(li);
                await new Promise(r => setTimeout(r, 150));
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }
}

async function runAriaSequence(promptText) {
    if (!promptText) return;
    let state = loadState();
    const companyId = state.selectedCompanyId;
    
    const allStaticResponses = { 
        ...companyDataMap[companyId]?.ariaResponses, 
        ...commandCenterAriaResponses,
        ...diligenceHubAriaResponses 
    };

    const conversationContainer = document.getElementById('aria-conversation-container');
    const promptWrapper = document.getElementById('aria-prompt-wrapper');
    if (!conversationContainer || !promptWrapper) return;

    promptWrapper.innerHTML = getAdvancedPromptBoxHTML([]); 

    const persona = PERSONAS[state.activePersona];
    const nameParts = persona.name.split(' ');
    const initials = (nameParts[0]?.[0] || '') + (nameParts[1]?.[0] || '');

    const userPromptHTML = `
        <div class="user-prompt-wrapper">
            <div class="user-prompt-bubble">
                <p class="font-semibold">${persona.name}:</p>
                <p>${promptText}</p>
            </div>
            <div class="persona-avatar-bubble" style="background-color: ${persona.avatarColor}; color: ${persona.avatarTextColor};">${initials}</div>
        </div>`;
    conversationContainer.insertAdjacentHTML('beforeend', userPromptHTML);
    scrollToConversationBottom();
    
    // REMOVED the old "Aria is thinking..." message here.

    const componentInfo = generativeComponentMap[promptText];
    let staticResponseData = allStaticResponses[promptText];

    if (componentInfo || staticResponseData) {
        // --- CURATED PROMPT LOGIC (Unchanged) ---
        const reasoningId = `reasoning-${Date.now()}`;
        const reasoningHTML = `<div id="${reasoningId}" class="aria-response-wrapper"><div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div><div class="aria-response-bubble"><p>Aria is thinking...</p></div></div>`;
        conversationContainer.insertAdjacentHTML('beforeend', reasoningHTML);
        scrollToConversationBottom();
        await new Promise(resolve => setTimeout(resolve, 500));
        document.getElementById(reasoningId)?.remove();

        const responseId = `aria-content-target-${Date.now()}`;
        const ariaHeaderHTML = `
            <div class="aria-response-wrapper">
                <div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div>
                <div class="aria-response-bubble">
                    <p class="font-semibold">Aria:</p>
                    <div id="${responseId}"></div>
                </div>
            </div>`;
        conversationContainer.insertAdjacentHTML('beforeend', ariaHeaderHTML);
        const targetElement = document.getElementById(responseId);

        if (componentInfo) {
            // ... (component loading logic) ...
        } else if (staticResponseData) {
            targetElement.innerHTML = staticResponseData.renderFunc(state);
            scrollToConversationBottom();
            setTimeout(async () => {
                await runAriaBuildingSequence(targetElement);
                promptWrapper.innerHTML = getAdvancedPromptBoxHTML(staticResponseData.followUpQuestions);
                scrollToConversationBottom();
            }, 50);
        }
    } else {
        // --- LIVE GEMINI CALL WITH TYPING INDICATOR ---
        const responseId = `aria-content-target-${Date.now()}`;
        const typingIndicatorHTML = `
            <div class="aria-response-wrapper">
                <div class="persona-avatar-bubble" style="background-color: #48AADD; color: white;">A</div>
                <div class="aria-response-bubble">
                    <p class="font-semibold">Aria:</p>
                    <div id="${responseId}" class="response-text">
                        <div class="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>`;
        conversationContainer.insertAdjacentHTML('beforeend', typingIndicatorHTML);
        const targetElement = document.getElementById(responseId);
        scrollToConversationBottom();
        
        try {
            const apiResponse = await fetch('/api/ask-gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: promptText })
            });

            if (!apiResponse.ok) {
                const errData = await apiResponse.json();
                throw new Error(errData.error || `API error: ${apiResponse.statusText}`);
            }

            const data = await apiResponse.json();
            // The typeWords function will automatically replace the typing indicator
            await typeWords(targetElement, data.response);

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            // Replace the indicator with an error message
            targetElement.innerHTML = `<p class="text-error">Sorry, I encountered an error trying to respond. Please ensure the backend server is running and check the console for details.</p>`;
        }
        
        promptWrapper.innerHTML = getAdvancedPromptBoxHTML([
            "Show me the TechFlow diligence plan.",
            "How is the NewCo integration going for CloudVantage?"
        ]);
    }
    
    scrollToConversationBottom();
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
            case 'run-suggested-prompt':
                const question = target.dataset.question;
                if (question) {
                    const modal = document.querySelector('.gantt-modal-overlay');
                    if (modal) modal.remove();
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
                const promptWrapper = document.getElementById('aria-prompt-wrapper');
                if(conversationContainer) conversationContainer.innerHTML = '';
                if(promptWrapper) promptWrapper.innerHTML = '';
                const url = new URL(window.location);
                url.searchParams.delete('prompt');
                window.history.pushState({}, '', url);
                initializeAriaPage();
                break;
            case 'toggle-settings-modal':
                state.ariaSettings.isModalOpen = !state.ariaSettings.isModalOpen;
                saveState(state);
                updatePromptContainer(state);
                break;
            case 'toggle-category':
                const categoryKey = target.dataset.category;
                if (!state.ariaSettings.expandedCategories) state.ariaSettings.expandedCategories = {};
                state.ariaSettings.expandedCategories[categoryKey] = !state.ariaSettings.expandedCategories[categoryKey];
                saveState(state);
                updatePromptContainer(state);
                break;
            case 'flag-response':
                const responseId = target.dataset.responseId;
                if (!responseId) break;
                const allSources = [techflow_anomalies, techflow_minorObservations, ...Object.values(techflow_ariaResponses), ...Object.values(cloudvantage_ariaResponses)];
                const responseData = allSources.flat().find(item => item.id === responseId);
                if (responseData) {
                    const flagButton = target.closest('button');
                    if (state.diligenceWorkspace.keyRisks[responseId]) {
                        delete state.diligenceWorkspace.keyRisks[responseId];
                        flagButton.classList.remove('filled');
                    } else {
                        state.diligenceWorkspace.keyRisks[responseId] = { id: responseId, title: responseData.title || responseData.category, impact: responseData.impact || responseData.text, source: 'Aria Assistant (Exp)' };
                        flagButton.classList.add('filled');
                    }
                    saveState(state);
                }
                break;
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
        updatePromptContainer(state);
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

function updatePromptContainer(state) {
    const promptWrapper = document.getElementById('aria-prompt-wrapper');
    if (!promptWrapper) return;
    
    const lastResponseBubble = [...document.querySelectorAll('.aria-response-bubble')].pop();
    let followUpQuestions = [];
    if (lastResponseBubble) {
        const responseId = lastResponseBubble.id;
        const companyResponses = companyDataMap[state.selectedCompanyId]?.ariaResponses || {};
        const responseKey = Object.keys(companyResponses).find(key => `response-${companyResponses[key].id}` === responseId);
        if (responseKey) {
            followUpQuestions = companyResponses[responseKey].followUpQuestions;
        }
    }
    
    promptWrapper.innerHTML = getAdvancedPromptBoxHTML(followUpQuestions);
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