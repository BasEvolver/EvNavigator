const { Pool } = require('pg');

module.exports = async function (context, req) {
    const pool = new Pool({ /* your database connection config */ });
    const assessmentId = parseInt(context.bindingData.assessmentId, 10);

    if (isNaN(assessmentId)) {
        context.res = { status: 400, body: "Invalid assessmentId." };
        await pool.end();
        return;
    }

    try {
        // THE FIX: Use all-lowercase table names without quotes.
        const allItemsResult = await pool.query(`
            SELECT discipline_id AS item_id FROM disciplines
            UNION ALL
            SELECT capability_id AS item_id FROM capabilities
            UNION ALL
            SELECT lever_id AS item_id FROM levers
        `);
        
        const specificScopeResult = await pool.query(
            'SELECT item_id, is_in_scope FROM assessment_scope WHERE assessment_id = $1',
            [assessmentId]
        );

        // Combine the results in JavaScript for maximum safety.
        const scopeMap = new Map();
        allItemsResult.rows.forEach(row => {
            scopeMap.set(row.item_id, true); // Default to true
        });

        // Override defaults with any explicit settings from the database.
        specificScopeResult.rows.forEach(row => {
            scopeMap.set(row.item_id, row.is_in_scope);
        });

        const scopeObject = Object.fromEntries(scopeMap);

        context.res = {
            status: 200,
            body: scopeObject
        };

    } catch (error) {
        context.log.error('Database query failed in get-scope:', error);
        context.res = { status: 500, body: "Database query failed. Check the function logs for details." };
    } finally {
        await pool.end();
    }
};