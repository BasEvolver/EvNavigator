// /api/ask-aria-agent/index.js - FINAL VERSION

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Client } = require('pg');
const { toolManifest } = require('../agent-tools');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const dbConfig = { /* ... database config ... */ };

module.exports = async function (context, req) {
    const { prompt: userPrompt, appContext, staticContext } = req.body;
    if (!userPrompt || !appContext || !staticContext) { /* ... error handling ... */ }

    // --- Step 1: Intent Recognition ---
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

    let toolsToUse = [];
    let intentDebug = `Intent Prompt:\n${intentPrompt}\n\n`;
    try {
        const intentModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await intentModel.generateContent(intentPrompt);
        const responseText = result.response.text().trim().replace(/```json|```/g, '');
        intentDebug += `Gemini Intent Response:\n${responseText}`;
        toolsToUse = JSON.parse(responseText);
    } catch (e) {
        context.log.error("Intent recognition failed:", e);
        toolsToUse = [];
    }

    // --- General Knowledge Fallback ---
    if (toolsToUse.length === 0) {
        // ... (Fallback logic remains the same)
    }

    // --- Step 2: Dynamic Tool Execution ---
    let retrievedContext = "";
    const contextPieces = [];
    // We can also add the DB query here as a "default" tool if needed
    // For now, we'll rely on the explicit tools.

    for (const toolName of toolsToUse) {
        const tool = toolManifest[toolName];
        if (tool) {
            const toolResult = tool.execute(appContext, staticContext);
            if (toolResult) { // Only add context if the tool returned something
                contextPieces.push(`--- Context from ${toolName} ---\n${JSON.stringify(toolResult, null, 2)}`);
            }
        }
    }
    retrievedContext = contextPieces.join('\n\n');

    // --- Step 3: Final Answer Generation ---
    const finalPrompt = `You are an expert AI assistant. Based ONLY on the following retrieved context, please answer the user's question.

User Question: "${userPrompt}"

--- RETRIEVED CONTEXT ---
${retrievedContext}
--- END OF CONTEXT ---
`;

    try {
        const finalModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const finalResult = await finalModel.generateContent(finalPrompt);
        const finalResponseText = finalResult.response.text();

        context.res = {
            body: {
                initialPrompt: userPrompt,
                intentRecognition: intentDebug,
                toolsUsed: toolsToUse,
                retrievedContext: retrievedContext,
                masterPrompt: finalPrompt,
                geminiResponse: finalResponseText
            }
        };
    } catch (e) {
        context.log.error("Final Gemini call failed:", e);
        context.res = { status: 500, body: { error: "The final call to Gemini failed." } };
    }
};