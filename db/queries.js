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

const insertuser = databaseHandler(async (firstname, lastname, username, password) => {
    const query = `
        INSERT INTO users (firstname, lastname, username, password)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;
    const { rows } = await pool.query(query, [firstname, lastname, username, password]);
    console.log(`${rows[0].username} inserted into database`);
}, 'Error inserting user');

const getMessages = databaseHandler(async () => {
    const query = `
        SELECT *
        FROM messages
        ORDER BY id DESC
    `;
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
}, 'Error retrieving messages');

export { getUserByUsername, getUserById, insertuser, getMessages };
