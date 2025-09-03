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

    // --- THIS IS THE ONLY LINE THAT CHANGES ---
    const disciplineId = context.bindingData.disciplineId; // Use context.bindingData instead of req.params

    // --- Debugging logs (we can leave them for now) ---
    context.log('--- Executing get-capabilities function ---');
    context.log('Received disciplineId from bindingData:', disciplineId);
    context.log('Type of disciplineId:', typeof disciplineId);
    // ---

    if (!disciplineId) {
        context.res = { status: 400, body: "Please provide a disciplineId." };
        return;
    }

    try {
        context.log(`Querying capabilities for discipline_id = '${disciplineId}'`);
        // Use the robust query we had before
        const query = 'SELECT * FROM Capabilities WHERE UPPER(TRIM(discipline_id)) = UPPER(TRIM($1)) ORDER BY capability_id';
        const { rows } = await pool.query(query, [disciplineId]);
        context.log('Query successful. Found', rows.length, 'rows.');
        
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