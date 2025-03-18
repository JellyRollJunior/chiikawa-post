import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';

// setup
dotenv.config();
const app = express();
const __dirname = path.resolve();
// looks for views in views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// enable form params
app.use(express.urlencoded({ extended: true }));
// serve assets from public folder
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// routes
app.get('/', (req, res) => {
    res.send('hello!');
});

// init server
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
