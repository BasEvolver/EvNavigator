const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as before ... */ };
    const pool = new Pool(poolConfig);
    
    const {
        assessment_id,
        lever_id,
        source_id,
        as_is_score,
        as_is_rationale,
        as_is_confidence_score,
        as_is_confidence_rationale,
        to_be_score,
        to_be_rationale
    } = req.body;

    if (!assessment_id || !lever_id || !source_id) {
        context.res = { status: 400, body: "Please provide assessment_id, lever_id, and source_id." };
        return;
    }

    try {
        const query = `
            INSERT INTO Assessment_Scores 
                (assessment_id, lever_id, source_id, as_is_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale, to_be_score, to_be_rationale)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            ON CONFLICT (assessment_id, lever_id, source_id)
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
        
        const { rows } = await pool.query(query, [assessment_id, lever_id, source_id, as_is_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale, to_be_score, to_be_rationale]);
        
        context.res = {
            status: 200,
            body: rows[0]
        };
    } catch (err) {
        context.log.error('Database query failed:', err);
        context.res = { status: 500, body: "Error saving score." };
    } finally {
        await pool.end();
    }
};