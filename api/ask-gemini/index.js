// File: /api/ask-gemini/index.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// IMPORTANT: This reads the API key from your Azure Application Settings or local.settings.json
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function (context, req) {
    context.log('Ask-Gemini function processed a request.');

    const userPrompt = req.body?.prompt;

    if (!userPrompt) {
        context.res = {
            status: 400,
            body: { error: "Please provide a prompt." }
        };
        return;
    }

    // --- UPDATE: Add a formatting instruction to the prompt ---
    const fullPrompt = `Please format your response using Markdown. 
Use headings, bold text, bulleted lists, and tables where appropriate to structure the information clearly.
    
User's question: "${userPrompt}"`;
    // --- END OF UPDATE ---

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        // --- UPDATE: Use the new fullPrompt variable ---
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        context.res = {
            // status: 200, is default
            headers: { 'Content-Type': 'application/json' },
            body: { text: text } // Sending the response with a "text" key
        };

    } catch (error) {
        context.log.error("Error calling Gemini API:", error);
        context.res = {
            status: 500,
            body: { error: "Failed to get response from Gemini" }
        };
    }
};