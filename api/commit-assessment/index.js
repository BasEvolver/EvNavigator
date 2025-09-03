const { Pool } = require('pg');

module.exports = async function (context, req) {
    const poolConfig = { /* ... same as above ... */ };
    const pool = new Pool(poolConfig);
    const client = await pool.connect(); // Get a client from the pool for transaction

    const assessmentId = context.bindingData.assessmentId;
    const committedScores = req.body; // Expects an array of score objects

    if (!assessmentId || !Array.isArray(committedScores) || committedScores.length === 0) {
        context.res = { status: 400, body: "Please provide an assessmentId and an array of committed scores." };
        return;
    }

    try {
        await client.query('BEGIN'); // Start transaction

        // Upsert all the committed scores
        for (const score of committedScores) {
            const upsertQuery = `
                INSERT INTO Committed_Scores (assessment_id, lever_id, committed_as_is_score, committed_to_be_score, final_rationale)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (assessment_id, lever_id)
                DO UPDATE SET
                    committed_as_is_score = EXCLUDED.committed_as_is_score,
                    committed_to_be_score = EXCLUDED.committed_to_be_score,
                    final_rationale = EXCLUDED.final_rationale,
                    committed_at = CURRENT_TIMESTAMP;
            `;
            await client.query(upsertQuery, [assessmentId, score.lever_id, score.committed_as_is_score, score.committed_to_be_score, score.final_rationale]);
        }

        // Mark the parent assessment as committed
        const updateAssessmentQuery = 'UPDATE Assessments SET is_committed = TRUE WHERE assessment_id = $1';
        await client.query(updateAssessmentQuery, [assessmentId]);

        await client.query('COMMIT'); // Commit transaction
        
        context.res = {
            status: 200,
            body: { message: "Assessment committed successfully." }
        };
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        context.log.error('Database transaction failed:', err);
        context.res = { status: 500, body: "Error committing assessment." };
    } finally {
        client.release(); // Release the client back to the pool
        await pool.end();
    }
};