import { config } from 'dotenv';
import { Pool } from 'pg';
config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
});

export async function query(sql, params = []) {
    const client = await pool.connect();

    try {
        console.log('Connected to postgres database');
        const res = await client.query(sql, params);
        return res.rows;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        // finally block is important to release the client from the pool so that it does not exhaust the resources of postgres. 
        client.release();
    }
}