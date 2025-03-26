-- RESET TABLES
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS images CASCADE;

-- CREATE USERS
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
    ('Chiikawa', '', 'chiikawa', 'a-really-hard-password'),
    ('Hachiware', '', 'Hachiware', 'a-really-hard-password'),
    ('Usagi', '', 'Usagi', 'a-really-hard-password'),
    ('Shisa', '', 'Shisa', 'a-really-hard-password'),
    ('Kurimanju', '', 'Kurimanju', 'a-really-hard-password'),
    ('Kani', '', 'Kani', 'a-really-hard-password');

-- CREATE IMAGES
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
    ('Yoroi-san', '9-pouchette-no-yoroi-san.png'),
    ('Chiikawa trio', '10-trio.png');

-- CREATE POSTS
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (64),
    message text,
    image_id INTEGER REFERENCES images (id) DEFAULT 10,
    send_time VARCHAR (64) DEFAULT 'May 24th, 1997 5:30pm',
    creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);

-- INSERT POSTS
INSERT INTO posts (title, message, author_id, image_id) VALUES 
    ('Weeding is difficult work!', 'Nsho! Nsho! Huuuuuu~~~. Waaaaaaaai!', 1, 1),
    ('*Eats gourmet food*', '*Sips alcohol* AHHHHHHH~~~~', 5, 6),
    ('Hmmmmmm Yaha!', 'iiiiyaaaaaaaa urururuururururururur', 3, 3),
    ('Rou Ramen is the best!', 'Satapanbin~~~', 4, 7),
    ('Kani bookstore', 'Please come visit my bookstore!', 6, 8),
    ('Saikou!', 'I bought a nice camera with the money I earned!', 2, 2);
