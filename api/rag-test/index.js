// File: /api/rag-test/index.js

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Client } = require('pg');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: false }
};

module.exports = async function (context, req) {
    context.log('RAG Test function processed a request.');

 const { prompt: userPrompt, appContext, staticContext } = req.body;

    if (!userPrompt || !appContext || !appContext.companyId) {
        return context.res = { status: 400, body: { error: "Missing prompt or companyId in appContext." } };
    }

    let retrievedContext = "No context retrieved.";
    const dbClient = new Client(dbConfig);
    try {
        await dbClient.connect();
        const query = `
            SELECT 
                COALESCE(c.name, l.name) as item_name,
                s.to_be_score,
                s.to_be_rationale
            FROM assessment_scores s
            LEFT JOIN capabilities c ON s.item_id = c.capability_id AND s.item_type = 'capability'
            LEFT JOIN levers l ON s.item_id = l.lever_id AND s.item_type = 'lever'
            WHERE s.assessment_id = (
                SELECT assessment_id 
                FROM assessments
                WHERE portfolio_company_id = $1
                ORDER BY created_at DESC
                LIMIT 1
            )
            AND s.to_be_score > s.as_is_score
            ORDER BY (s.to_be_score - s.as_is_score) DESC
            LIMIT 3;
        `;
        
        const { rows } = await dbClient.query(query, [appContext.companyId]);
        
        if (rows.length > 0) {
            retrievedContext = "Based on the latest maturity model assessment, the company's top 3 value creation priorities are:\n";
            rows.forEach(row => {
                retrievedContext += `- Initiative: "${row.item_name}" (Target Score: ${row.to_be_score}). Rationale: ${row.to_be_rationale || 'Not specified.'}\n`;
            });
        } else {
            retrievedContext = "No specific value creation priorities have been scored in the latest assessment for this company.";
        }
    } catch (dbError) {
        context.log.error("Database query failed:", dbError);
        retrievedContext = `DATABASE ERROR: ${dbError.message}`;
    } finally {
        await dbClient.end();
    }

const masterPrompt = `
You are an expert AI assistant for a private equity firm called Evolver.
Your responses should be professional, data-driven, and tailored to the user's role.

---
CURRENT CONTEXT:
- User Persona: ${appContext.persona || 'adrian'}
- Focused Company: ${appContext.companyId}
---
RETRIEVED DATA FROM POSTGRESQL DATABASE (VCC Priorities):
${retrievedContext}
---
CURATED KNOWLEDGE & EXPERT SUMMARIES (From Application):
${staticContext.curatedKnowledge ? JSON.stringify(staticContext.curatedKnowledge, null, 2) : "No curated knowledge provided."}
---
ADDITIONAL RAW DATA (From Application):
${staticContext.data ? JSON.stringify(staticContext.data, null, 2) : "No additional raw data provided."}
---

Based on ALL the context above (database data, curated summaries, and raw data), please answer the following user's question.

User's Question: "${userPrompt}"
`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(masterPrompt);
        const response = await result.response;
        const text = response.text();

        // Return all the intermediate steps for debugging
        context.res = {
            headers: { 'Content-Type': 'application/json' },
            body: {
                initialPrompt: userPrompt,
                retrievedContext: retrievedContext,
                masterPrompt: masterPrompt,
                geminiResponse: text
            }
        };

    } catch (geminiError) {
        context.log.error("Error calling Gemini API:", geminiError);
        context.res = { status: 500, body: { error: `Failed to get response from Gemini: ${geminiError.message}` } };
    }
};