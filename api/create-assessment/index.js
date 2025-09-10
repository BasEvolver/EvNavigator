const { Pool } = require('pg');

module.exports = async function (context, req) {
    const pool = new Pool({ /* your database connection config */ });
    const client = await pool.connect();

    const { portfolio_company_id, version_name, version_description } = req.body;

    if (!portfolio_company_id || !version_name) {
        context.res = { status: 400, body: "Missing required fields: portfolio_company_id and version_name." };
        client.release();
        await pool.end();
        return;
    }

    try {
        await client.query('BEGIN');

        const assessmentQuery = `
            INSERT INTO assessments (portfolio_company_id, version_name, version_description) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        const assessmentResult = await client.query(assessmentQuery, [portfolio_company_id, version_name, version_description]);
        const newAssessment = assessmentResult.rows[0];

        // THE FIX: Use all-lowercase table names without quotes here as well.
        const allItemsResult = await client.query(`
            SELECT discipline_id AS item_id FROM disciplines
            UNION ALL
            SELECT capability_id AS item_id FROM capabilities
            UNION ALL
            SELECT lever_id AS item_id FROM levers
        `);
        const allItemIds = allItemsResult.rows;

        if (allItemIds.length > 0) {
            const params = [];
            const values = [];
            let paramIndex = 1;
            for (const item of allItemIds) {
                values.push(`($${paramIndex++}, $${paramIndex++}, $${paramIndex++})`);
                params.push(newAssessment.assessment_id, item.item_id, true);
            }
            
            const scopeQuery = `
                INSERT INTO assessment_scope (assessment_id, item_id, is_in_scope) 
                VALUES ${values.join(', ')};
            `;
            
            await client.query(scopeQuery, params);
        }

        await client.query('COMMIT');

        context.res = {
            status: 201,
            body: newAssessment
        };

    } catch (error) {
        await client.query('ROLLBACK');
        context.log.error('Transaction failed in create-assessment:', error);
        context.res = { status: 500, body: "Database operation failed. Check the function logs for details." };
    } finally {
        client.release();
        await pool.end();
    }
};