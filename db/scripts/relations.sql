-- RESET TABLES
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

-- CREATE TABLES
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firstname VARCHAR (32),
    lastname VARCHAR (32),
    username VARCHAR (32),
    password VARCHAR (64),
    is_member boolean DEFAULT false,
    is_admin boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (64),
    message text,
    send_time timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
    author_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);

-- INSERT USERS
INSERT INTO users (firstname, lastname, username, password) VALUES 
    ('chiikawa', 'chiikawa', 'chiikawa', 'chiikawa');

-- INSERT MESSAGES
INSERT INTO messages (title, message, author_id) VALUES 
    ('I love to sing!', 'Yan papa rurura rurura!', 1),
    ('Weeding is difficult work!', 'Nsho! Nsho! Huuuuuu~~~. Waaaaaaaai!', 1);