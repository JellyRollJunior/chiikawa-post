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

const getPosts = databaseHandler(async () => {
    const query = `
        SELECT title, message
        FROM posts
        ORDER BY send_time DESC
    `;
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
}, 'Error retrieving posts');

const getMemberPosts = databaseHandler(async () => {
    const query = `
        SELECT title, message, send_time, firstname, lastname, posts.id
        FROM posts
        JOIN users ON posts.author_id = users.id
        ORDER BY send_time DESC
    `;
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
}, 'Error retrieving posts');

const insertPost = databaseHandler(async (id, title, message) => {
    const query = `
        INSERT INTO posts (author_id, title, message)
        VALUES ($1, $2, $3)
    `;
    const { rows } = await pool.query(query, [id, title, message]);
    console.log(rows);
}, 'Error inserting post');

const deletePost = databaseHandler(async (id) => {
    const query = `
        DELETE FROM posts
        WHERE id = $1
    `;
    const { rowCount } = await pool.query(query, [id]);
    console.log(`${rowCount} row(s) deleted`);
}, 'Error deleting post');

export {
    getUserByUsername,
    getUserById,
    insertuser,
    updateToMember,
    updateToAdmin,
    getPosts,
    getMemberPosts,
    insertPost,
    deletePost,
};
