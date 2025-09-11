// File: /api/ask-gemini/index.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// IMPORTANT: This reads the API key from your Azure Application Settings
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function (context, req) {
    context.log('Ask-Gemini function processed a request.');

    const prompt = req.body?.prompt;

    if (!prompt) {
        context.res = {
            status: 400,
            body: { error: "Please provide a prompt." }
        };
        return;
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
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