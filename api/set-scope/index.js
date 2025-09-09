const { Pool } = require('pg');

module.exports = async function (context, req) {
    const pool = new Pool({ /* your database connection config */ });
    const assessmentId = parseInt(context.bindingData.assessmentId, 10);
    const { item_id, is_in_scope } = req.body;

    if (isNaN(assessmentId) || !item_id || typeof is_in_scope !== 'boolean') {
        context.res = { status: 400, body: "Invalid or missing parameters." };
        await pool.end();
        return;
    }

    try {
        let query;
        const params = [assessmentId, item_id];

        if (is_in_scope === false) {
            // CASCADING DOWN: Find the item and all its descendants and turn them OFF
            query = `
                WITH RECURSIVE hierarchy AS (
                    SELECT $2::varchar AS item_id
                    UNION
                    SELECT c.capability_id FROM capabilities c JOIN hierarchy h ON h.item_id = c.discipline_id
                    UNION
                    SELECT l.lever_id FROM levers l JOIN hierarchy h ON h.item_id = l.capability_id
                )
                UPDATE assessment_scope
                SET is_in_scope = false
                WHERE assessment_id = $1 AND item_id IN (SELECT item_id FROM hierarchy);
            `;
        } else {
            // CASCADING UP: Find the item and all its ancestors and turn them ON
            query = `
                WITH RECURSIVE hierarchy AS (
                    SELECT capability_id AS parent_id FROM levers WHERE lever_id = $2
                    UNION
                    SELECT discipline_id AS parent_id FROM capabilities WHERE capability_id = $2
                    UNION
                    SELECT c.discipline_id FROM capabilities c JOIN hierarchy h ON h.parent_id = c.capability_id
                )
                UPDATE assessment_scope
                SET is_in_scope = true
                WHERE assessment_id = $1 AND item_id IN (
                    SELECT parent_id FROM hierarchy WHERE parent_id IS NOT NULL
                    UNION SELECT $2
                );
            `;
        }

        const result = await pool.query(query, params);

        context.res = {
            status: 200,
            body: { message: `Scope updated successfully for ${result.rowCount} items.` }
        };

    } catch (error) {
        context.log.error('Database operation failed:', error);
        context.res = { status: 500, body: "Database operation failed." };
    } finally {
        await pool.end();
    }
};