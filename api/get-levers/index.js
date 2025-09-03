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
    const capabilityId = context.bindingData.capabilityId;

    if (!capabilityId) {
        context.res = { status: 400, body: "Please provide a capabilityId." };
        return;
    }

    try {
        const query = 'SELECT * FROM Levers WHERE capability_id = $1 ORDER BY lever_id';
        const { rows } = await pool.query(query, [capabilityId]);
        
        context.res = {
            body: rows
        };
    } catch (err) {
        context.log.error('Database query failed:', err);
        context.res = {
            status: 500,
            body: "Error connecting to or querying the database."
        };
    } finally {
        await pool.end();
    }
};