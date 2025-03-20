import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import * as db from './db/queries.js';
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
// LocalStrategy
const LocalStrategy = passportLocal.Strategy;
const local = new LocalStrategy(async (username, password, done) => {
    const user = await db.getUserByUsername(username);
    if (!user) {
        return done(null, false, { message: 'Incorrect username' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return done(null, false, { message: 'Incorrect password' });
    }
    return done(null, user);
});
passport.use(local);
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await db.getUserById(id);
    !user ? done(new Error('User could not be found')) : done(null, user);
});
// add to user
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/sign-up', signUpRouter);
app.use('/login', loginRouter);

// init server
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
