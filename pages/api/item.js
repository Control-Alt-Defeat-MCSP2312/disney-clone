import { query } from '../../db/db.js';

export async function handler(req, res) {
    const result = await query('SELECT * FROM item');
    res.json(result);
}
export async function singleHandler(req, res) {
    const id = req.query.id;
    const result = await query('SELECT * FROM item WHERE id = $1', [id]);
    res.json(result.rows);
}