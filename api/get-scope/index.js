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
        const { rows } = await pool.query('SELECT item_id, is_in_scope FROM assessment_scope WHERE assessment_id = $1', [assessmentId]);

        const scopeObject = rows.reduce((acc, row) => {
            acc[row.item_id] = row.is_in_scope;
            return acc;
        }, {});

        context.res = {
            status: 200,
            body: scopeObject
        };

    } catch (error) {
        context.log.error('Database query failed:', error);
        context.res = { status: 500, body: "Database query failed." };
    } finally {
        await pool.end();
    }
};