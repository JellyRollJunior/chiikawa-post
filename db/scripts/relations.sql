-- RESET TABLES
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS images CASCADE;

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

-- INSERT USERS
INSERT INTO users (firstname, lastname, username, password) VALUES 
    ('chiikawa', 'chiikawa', 'chiikawa', 'chiikawa');

CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    image_name VARCHAR (64),
    image_src VARCHAR (64)
);

-- INSERT IMAGES
INSERT INTO images (image_name, image_src) VALUES 
    ('Chiikawa', '1-chiikawa.png'),
    ('Hachiware', '2-hachiware.png'),
    ('Usagi', '3-usagi.png'),
    ('Momonga', '4-momonga.png'),
    ('Rakko', '5-rakko.png'),
    ('Kurimanju', '6-kurimanju.png'),
    ('Shisa', '7-shisa.png'),
    ('Kani', '8-kani.png'),
    ('Pouchette no yoroi san', '9-pouchette-no-yoroi-san.png'),
    ('Chiikawa trio', '10-trio.png');

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (64),
    message text,
    image_id INTEGER REFERENCES images (id) DEFAULT 10,
    send_time timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
    author_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);

-- INSERT POSTS
INSERT INTO posts (title, message, author_id) VALUES 
    ('I love to sing!', 'Yan papa rurura rurura!', 1),
    ('Weeding is difficult work!', 'Nsho! Nsho! Huuuuuu~~~. Waaaaaaaai!', 1);
