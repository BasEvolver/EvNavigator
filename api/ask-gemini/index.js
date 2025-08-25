// File: /api/ask-gemini/index.js

// You still use dotenv for local development, but in Azure, you'll use Application Settings.
require('dotenv').config(); 
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// All Azure Functions for HTTP triggers are exported async functions.
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        // The prompt comes from the request body
        const { prompt } = req.body;
        if (!prompt) {
            // How to send a response in Azure Functions
            context.res = {
                status: 400,
                body: { error: 'Prompt is required' }
            };
            return;
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use a recent model
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // How to send a successful JSON response
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: { response: text }
        };

    } catch (error) {
        context.log.error("Error calling Gemini API:", error);
        context.res = {
            status: 500,
            body: { error: 'Failed to get response from Gemini' }
        };
    }
};