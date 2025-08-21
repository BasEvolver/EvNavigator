// server.js

require('dotenv').config(); // Loads the .env file
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');

const app = express();
app.use(express.json());

// This line tells the server to make all files in your project accessible
// This allows gemini-test.html to load your existing css/styles.css
app.use(express.static(path.join(__dirname, '')));

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// The API endpoint that will receive prompts from the test page
app.post('/api/ask-gemini', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.json({ response: text });

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: 'Failed to get response from Gemini' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Test server running. Open http://localhost:${PORT}/gemini-test.html in your browser.`);
});