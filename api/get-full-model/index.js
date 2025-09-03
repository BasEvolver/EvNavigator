// api/get-full-model/index.js

const { Pool } = require('pg');

module.exports = async function (context, req) {
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

    try {
        // Run all three queries in parallel for maximum efficiency
        const [disciplinesResult, capabilitiesResult, leversResult] = await Promise.all([
            pool.query('SELECT * FROM Disciplines ORDER BY discipline_id'),
            pool.query('SELECT * FROM Capabilities ORDER BY capability_id'),
            pool.query('SELECT * FROM Levers ORDER BY lever_id')
        ]);

        // Assemble the final payload
        const fullModel = {
            disciplines: disciplinesResult.rows,
            capabilities: capabilitiesResult.rows,
            levers: leversResult.rows
        };

        context.res = {
            body: fullModel
        };

    } catch (err) {
        context.log.error('Database query failed in get-full-model:', err);
        context.res = { status: 500, body: "Error retrieving full maturity model." };
    } finally {
        await pool.end();
    }
};