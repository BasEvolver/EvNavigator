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
    
    // NEW: Accept generic item_id and item_type
    const {
        assessment_id,
        item_id,
        item_type,
        source_id,
        as_is_score,
        as_is_rationale,
        as_is_confidence_score,
        as_is_confidence_rationale,
        to_be_score,
        to_be_rationale
    } = req.body;

    if (!assessment_id || !item_id || !item_type || !source_id) {
        context.res = { status: 400, body: "Please provide assessment_id, item_id, item_type, and source_id." };
        return;
    }

    try {
        // UPDATED: The query now uses the generic columns and a new conflict target
        const query = `
            INSERT INTO assessment_scores 
                (assessment_id, item_id, item_type, source_id, as_is_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale, to_be_score, to_be_rationale)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            ON CONFLICT (assessment_id, item_id, source_id)
            DO UPDATE SET
                as_is_score = EXCLUDED.as_is_score,
                as_is_rationale = EXCLUDED.as_is_rationale,
                as_is_confidence_score = EXCLUDED.as_is_confidence_score,
                as_is_confidence_rationale = EXCLUDED.as_is_confidence_rationale,
                to_be_score = EXCLUDED.to_be_score,
                to_be_rationale = EXCLUDED.to_be_rationale,
                updated_at = CURRENT_TIMESTAMP
            RETURNING *;
        `;
        
        const { rows } = await pool.query(query, [assessment_id, item_id, item_type, source_id, as_is_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale, to_be_score, to_be_rationale]);
        
        context.res = {
            status: 200,
            body: rows[0]
        };
    } catch (err) {
        context.log.error('Database query failed in save-score:', err);
        context.res = { status: 500, body: "Error saving score." };
    } finally {
        await pool.end();
    }
};