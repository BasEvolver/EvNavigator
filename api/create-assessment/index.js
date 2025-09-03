const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as before ... */ };
    const pool = new Pool(poolConfig);
    
    const { portfolio_company_id, version_name, version_description } = req.body;

    if (!portfolio_company_id || !version_name) {
        context.res = { status: 400, body: "Please provide portfolio_company_id and version_name." };
        return;
    }

    try {
        const query = `
            INSERT INTO Assessments (portfolio_company_id, version_name, version_description) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        
        const { rows } = await pool.query(query, [portfolio_company_id, version_name, version_description]);
        
        context.res = {
            status: 201, // 201 Created is the correct status code here
            body: rows[0]
        };
    } catch (err) {
        context.log.error('Database query failed:', err);
        context.res = { status: 500, body: "Error creating new assessment." };
    } finally {
        await pool.end();
    }
};