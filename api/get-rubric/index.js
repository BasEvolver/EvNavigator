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
    const itemId = context.bindingData.itemId;

    if (!itemId) {
        context.res = { status: 400, body: "Please provide an itemId." };
        return;
    }

    try {
        const query = 'SELECT * FROM Maturity_Rubric WHERE item_id = $1 ORDER BY stage_number';
        const { rows } = await pool.query(query, [itemId]);
        
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