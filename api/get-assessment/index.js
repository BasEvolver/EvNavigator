const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as above ... */ };
    const pool = new Pool(poolConfig);
    const userId = context.bindingData.userId;

    if (!userId) { /* ... error handling ... */ }

    try {
        const query = 'SELECT lever_id, current_stage, target_stage FROM User_Assessments WHERE user_id = $1';
        const { rows } = await pool.query(query, [userId]);
        
        // Transform the array into an object for easier use on the front-end
        const assessmentObject = {};
        for (const row of rows) {
            assessmentObject[row.lever_id] = {
                current: row.current_stage,
                target: row.target_stage
            };
        }

        context.res = {
            body: assessmentObject
        };
    } catch (err) { /* ... error handling ... */ } 
      finally { await pool.end(); }
};