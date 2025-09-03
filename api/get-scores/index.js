const { Pool } = require('pg');

module.exports = async function (context, req) {
    // This complete poolConfig block is required for Azure connections
    const poolConfig = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: {
            rejectUnauthorized: false
        }
    };

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
        context.log.error('Database query failed in get-scores:', err);
        context.res = { status: 500, body: "Error retrieving scores." };
    } finally {
        await pool.end();
    }
};