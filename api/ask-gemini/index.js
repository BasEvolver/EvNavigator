// api/ask-gemini/index.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// IMPORTANT: This will read the API key from your Azure SWA Configuration settings
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function (context, req) {
    const prompt = (req.body && req.body.prompt);

    if (!prompt) {
        context.res = {
            status: 400,
            body: { error: "Please pass a 'prompt' in the request body" }
        };
        return;
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        context.res = {
            headers: { 'Content-Type': 'application/json' },
            body: { response: text }
        };

    } catch (error) {
        context.log.error("Error calling Gemini API:", error);
        context.res = {
            status: 500,
            body: { error: "Failed to get response from Gemini." }
        };
    } 
};