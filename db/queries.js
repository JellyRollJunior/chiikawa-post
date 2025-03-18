import { databaseHandler } from './databaseHandler.js';
import { pool } from './pool.js';

const getUserByUsername = databaseHandler(async (username) => {
    const query = `
        SELECT * 
        FROM users 
        WHERE username = ($1)
    `;
    const { rows } = await pool.query(query, [username]);
    console.log(rows);
    return rows[0];
}, 'Error retrieving user');

const getUserById = databaseHandler(async (id) => {
    const query = `
        SELECT *
        FROM users
        WHERE id = ($1)
    `;
    const { rows } = await pool.query(query, [id]);
    console.log(rows);
    return rows[0];
}, 'Error retrieving user');

export { getUserByUsername, getUserById };
