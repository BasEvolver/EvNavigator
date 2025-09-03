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
    const companyId = context.bindingData.companyId;

    // The 'all' companyId is a special case for the initial demo state.
    // In a real app, you might fetch for a default company or handle this differently.
    // For now, if 'all' is passed, we'll fetch for 'techflow-solutions' as a fallback.
    const targetCompanyId = (companyId === 'all') ? 'techflow-solutions' : companyId;

    if (!targetCompanyId) {
        context.res = { status: 400, body: "Please provide a companyId." };
        return;
    }

    try {
        const query = 'SELECT * FROM Assessments WHERE portfolio_company_id = $1 ORDER BY created_at DESC';
        const { rows } = await pool.query(query, [targetCompanyId]);
        
        context.res = {
            body: rows
        };
    } catch (err) {
        // This log is crucial for debugging in the SWA terminal
        context.log.error('Database query failed in get-assessments:', err);
        context.res = { status: 500, body: "Error retrieving assessments." };
    } finally {
        await pool.end();
    }
};