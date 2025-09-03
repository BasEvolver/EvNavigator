const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as above ... */ };
    const pool = new Pool(poolConfig);
    const assessmentId = context.bindingData.assessmentId;

    if (!assessmentId) {
        context.res = { status: 400, body: "Please provide an assessmentId." };
        return;
    }

    try {
        const query = 'SELECT * FROM Assessment_Scores WHERE assessment_id = $1';
        const { rows } = await pool.query(query, [assessmentId]);
        
        context.res = {
            body: rows
        };
    } catch (err) {
        context.log.error('Database query failed:', err);
        context.res = { status: 500, body: "Error retrieving scores." };
    } finally {
        await pool.end();
    }
}