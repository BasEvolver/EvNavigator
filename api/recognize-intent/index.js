// /api/recognize-intent/index.js

const { GoogleGenerativeAI } = require("@google/generative-ai");
// We only need the tool manifest for its descriptions, not the functions
const { toolManifest } = require('../agent-tools'); 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function (context, req) {
    const { prompt: userPrompt } = req.body;
    if (!userPrompt) {
        return context.res = { status: 400, body: { error: "Prompt is required." } };
    }

    const toolDescriptions = Object.entries(toolManifest)
        .map(([name, tool]) => `// Tool Name: ${name}\n// Description: ${tool.description}`)
        .join('\n\n');

    const intentPrompt = `Your task is to act as a routing agent. Based on the user's question, you must identify the most relevant tool(s) to call. Respond with ONLY a valid JSON array of the tool names. If no tools are relevant, respond with an empty array [].

User Question: "${userPrompt}"

Available Tools:
\`\`\`
${toolDescriptions}
\`\`\`

JSON Array of tool names:`;

    try {
        const intentModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await intentModel.generateContent(intentPrompt);
        const responseText = result.response.text().trim().replace(/```json|```/g, '');
        const toolsToUse = JSON.parse(responseText);

        context.res = {
            headers: { 'Content-Type': 'application/json' },
            body: { tools: toolsToUse }
        };
    } catch (e) {
        context.log.error("Intent recognition failed:", e);
        // On failure, return an empty array so the frontend can use a default
        context.res = { status: 200, headers: { 'Content-Type': 'application/json' }, body: { tools: [] } };
    }
};