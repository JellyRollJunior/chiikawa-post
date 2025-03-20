import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import session from 'express-session';
import { passport, addCurrentUserToLocals } from './config/passport.js';
import { signUpRouter } from './routes/signUpRouter.js';
import { loginRouter } from './routes/loginRouter.js';
dotenv.config();

const app = express();
// looks for views in views folder
const __dirname = path.resolve();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// enable form params
app.use(express.urlencoded({ extended: true }));
// serve assets from public folder
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// passport
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(addCurrentUserToLocals);

// routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/sign-up', signUpRouter);
app.use('/login', loginRouter);

// init server
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
