const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as above ... */ };
    const pool = new Pool(poolConfig);
    const userId = context.bindingData.userId;
    const { leverId, currentStage, targetStage } = req.body;

    if (!userId || !leverId || currentStage === undefined || targetStage === undefined) {
        context.res = { status: 400, body: "Please provide userId, leverId, currentStage, and targetStage in the request body." };
        return;
    }

    try {
        // This is an "UPSERT" query. It will UPDATE the row if it exists, or INSERT it if it doesn't.
        const query = `
            INSERT INTO User_Assessments (user_id, lever_id, current_stage, target_stage)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (user_id, lever_id)
            DO UPDATE SET
                current_stage = EXCLUDED.current_stage,
                target_stage = EXCLUDED.target_stage,
                updated_at = CURRENT_TIMESTAMP;
        `;
        
        await pool.query(query, [userId, leverId, currentStage, targetStage]);
        
        context.res = {
            status: 200,
            body: { message: "Assessment saved successfully." }
        };
    } catch (err) { /* ... error handling ... */ } 
      finally { await pool.end(); }
};