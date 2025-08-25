// gemini-test.js

document.addEventListener('DOMContentLoaded', () => {
    const askButton = document.getElementById('ask-button');
    const promptInput = document.getElementById('prompt-input');
    const responseDiv = document.getElementById('response');

    const askGemini = async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            alert('Please enter a prompt.');
            return;
        }

        responseDiv.textContent = 'Thinking...';
        askButton.disabled = true;

        try {
            const apiResponse = await fetch('/api/ask-gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt }),
            });

            if (!apiResponse.ok) {
                const err = await apiResponse.json();
                throw new Error(err.error || `HTTP error! status: ${apiResponse.status}`);
            }

            const data = await apiResponse.json();
            responseDiv.textContent = data.response;

        } catch (error) {
            console.error('Error:', error);
            responseDiv.textContent = `An error occurred: ${error.message}`;
        } finally {
            askButton.disabled = false;
        }
    };

    askButton.addEventListener('click', askGemini);
    promptInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            askGemini();
        }
    });
});