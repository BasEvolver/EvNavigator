// js/rag-test.js

// --- NEW: Initialization logic ---
document.addEventListener('DOMContentLoaded', async () => {
    // Load the header, sidebar, and apply theme
    await loadSharedComponents();
    
    // The original test page logic now runs after the layout is loaded
    initializeRagTestPage();
});

function initializeRagTestPage() {
    const runButton = document.getElementById('run-test-button');
    const promptInput = document.getElementById('prompt-input');
    const companySelect = document.getElementById('company-context');

    const contextDiv = document.getElementById('retrieved-context');
    const masterPromptDiv = document.getElementById('master-prompt');
    const geminiResponseDiv = document.getElementById('gemini-response');

    const runRagTest = async () => {
        const prompt = promptInput.value.trim();
        const companyId = companySelect.value;

        if (!prompt) {
            alert('Please enter a prompt.');
            return;
        }

        runButton.disabled = true;
        runButton.textContent = 'Testing...';
        contextDiv.textContent = 'Assembling context...';
        masterPromptDiv.textContent = 'Building prompt...';
        geminiResponseDiv.innerHTML = 'Waiting for Gemini...';

        try {
            const persona = 'adrian';
            const dynamicContext = getDynamicContext(companyId, persona);

            const apiResponse = await fetch('/api/ask-aria-agent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: prompt,
                    appContext: { companyId: companyId, persona: persona },
                    staticContext: dynamicContext
                }),
            });

            const data = await apiResponse.json();

            if (!apiResponse.ok) {
                throw new Error(data.error || `HTTP error! status: ${apiResponse.status}`);
            }

            contextDiv.textContent = data.retrievedContext;
            masterPromptDiv.textContent = data.masterPrompt;
            geminiResponseDiv.innerHTML = marked.parse(data.geminiResponse);

        } catch (error) {
            console.error('Error:', error);
            geminiResponseDiv.innerHTML = `<p class="text-error">An error occurred: ${error.message}</p>`;
        } finally {
            runButton.disabled = false;
            runButton.textContent = 'Run RAG Test';
        }
    };

    runButton.addEventListener('click', runRagTest);
}