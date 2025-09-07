// api/get-db-stats/index.js
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
        const tableNames = [
            'assessments', 'assessment_scores', 'committed_scores',
            'disciplines', 'capabilities', 'levers',
            'maturity_rubric', 'transformation_roadmap'
        ];

        // Create an array of promises, one for each COUNT(*) query
        const countPromises = tableNames.map(tableName => 
            pool.query(`SELECT COUNT(*) AS count FROM ${tableName};`)
        );

        // Execute all count queries in parallel for maximum efficiency
        const results = await Promise.all(countPromises);

        // Assemble the final JSON response
        const stats = {};
        tableNames.forEach((tableName, index) => {
            stats[tableName] = parseInt(results[index].rows[0].count, 10);
        });

        context.res = {
            body: stats
        };

    } catch (err) {
        context.log.error('Database query failed in get-db-stats:', err);
        context.res = { status: 500, body: "Error retrieving database statistics." };
    } finally {
        await pool.end();
    }
};