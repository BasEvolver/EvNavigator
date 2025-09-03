const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as before ... */ };
    const pool = new Pool(poolConfig);
    const companyId = context.bindingData.companyId;

    if (!companyId) {
        context.res = { status: 400, body: "Please provide a companyId." };
        return;
    }

    try {
        const query = 'SELECT * FROM Assessments WHERE portfolio_company_id = $1 ORDER BY created_at DESC';
        const { rows } = await pool.query(query, [companyId]);
        
        context.res = {
            body: rows
        };
    } catch (err) {
        context.log.error('Database query failed:', err);
        context.res = { status: 500, body: "Error retrieving assessments." };
    } finally {
        await pool.end();
    }
};