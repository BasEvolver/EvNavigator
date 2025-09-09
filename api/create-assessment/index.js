const { Pool } = require('pg');

module.exports = async function (context, req) {
    const pool = new Pool({ /* your database connection config */ });
    const client = await pool.connect(); // Get a single client for the transaction

    const { portfolio_company_id, version_name, version_description } = req.body;

    if (!portfolio_company_id || !version_name) {
        context.res = { status: 400, body: "Missing required fields: portfolio_company_id and version_name." };
        client.release();
        await pool.end();
        return;
    }

    try {
        // Start the transaction
        await client.query('BEGIN');

        // Step 1: Create the new assessment and get its ID
        const assessmentQuery = `
            INSERT INTO assessments (portfolio_company_id, version_name, version_description) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        const assessmentResult = await client.query(assessmentQuery, [portfolio_company_id, version_name, version_description]);
        const newAssessment = assessmentResult.rows[0];

        // Step 2: Get all item IDs from the entire model
        const allItemsResult = await client.query(`
            SELECT discipline_id AS item_id FROM disciplines
            UNION ALL
            SELECT capability_id AS item_id FROM capabilities
            UNION ALL
            SELECT lever_id AS item_id FROM levers
        `);
        const allItemIds = allItemsResult.rows;

        // Step 3: Pre-populate the assessment_scope table
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

        // If everything succeeded, commit the transaction
        await client.query('COMMIT');

        context.res = {
            status: 201, // Created
            body: newAssessment
        };

    } catch (error) {
        // If any step failed, roll back the entire transaction
        await client.query('ROLLBACK');
        context.log.error('Transaction failed:', error);
        context.res = { status: 500, body: "Database operation failed." };
    } finally {
        // Release the client back to the pool
        client.release();
        await pool.end();
    }
};