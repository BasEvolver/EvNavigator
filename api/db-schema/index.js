// api/get-db-schema/index.js
const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: { rejectUnauthorized: false }
    };
    const pool = new Pool(poolConfig);

    try {
        const query = `
            SELECT table_name, column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            ORDER BY table_name, ordinal_position;
        `;
        
        const { rows } = await pool.query(query);

        // Restructure the flat list into a nested object
        const schema = {};
        for (const row of rows) {
            if (!schema[row.table_name]) {
                schema[row.table_name] = [];
            }
            schema[row.table_name].push({
                name: row.column_name,
                type: row.data_type
            });
        }

        context.res = {
            body: schema
        };

    } catch (err) {
        context.log.error('Database query failed in get-db-schema:', err);
        context.res = { status: 500, body: "Error retrieving database schema." };
    } finally {
        await pool.end();
    }
};