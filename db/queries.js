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

const insertuser = databaseHandler(
    async (firstname, lastname, username, password) => {
        const query = `
            INSERT INTO users (firstname, lastname, username, password)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const { rows } = await pool.query(query, [
            firstname,
            lastname,
            username,
            password,
        ]);
        console.log(`${rows[0].username} inserted into database`);
    },
    'Error inserting user'
);

const updateToMember = databaseHandler(async (id) => {
    const query = `
        UPDATE users
        SET is_member = true
        WHERE id = ($1)
    `;
    const { rowCount } = await pool.query(query, [id]);
    console.log(`${rowCount} row(s) updated`);
});

const updateToAdmin = databaseHandler(async (id) => {
    const query = `
        UPDATE users
        SET is_admin = true
        WHERE id = ($1)
    `;
    const { rowCount } = await pool.query(query, [id]);
    console.log(`${rowCount} row(s) updated`);
}, 'Error updating to admin');

const getMessages = databaseHandler(async () => {
    const query = `
        SELECT title, message
        FROM messages
        ORDER BY send_time DESC
    `;
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
}, 'Error retrieving messages');

const getMemberMessages = databaseHandler(async () => {
    const query = `
        SELECT title, message, send_time, firstname, lastname
        FROM messages
        JOIN users ON messages.author_id = users.id
        ORDER BY send_time DESC
    `;
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
}, 'Error retrieving messages');

const insertMessage = databaseHandler(async (id, title, message) => {
    const query = `
        INSERT INTO messages (author_id, title, message)
        VALUES ($1, $2, $3)
    `;
    const { rows } = await pool.query(query, [id, title, message]);
    console.log(rows);
}, 'Error inserting message');

const deleteMessage = databaseHandler(async (id) => {
    const query = `
        DELETE FROM messages
        WHERE id = $1
    `;
    const { rowCount } = pool.query(query, [id]);
    console.log(`${rowCount} row(s) deleted`);
}, 'Error deleting message');

export {
    getUserByUsername,
    getUserById,
    insertuser,
    updateToMember,
    updateToAdmin,
    getMessages,
    getMemberMessages,
    insertMessage,
    deleteMessage,
};
