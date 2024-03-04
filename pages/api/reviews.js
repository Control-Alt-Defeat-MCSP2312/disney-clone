import { query } from '../../db/db.js';

export default async function handler(req, res) {
    const result = await query('SELECT * FROM reviews');
    res.json(result);
}