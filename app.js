import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { pool } from './db/pool.js';
import { passport, addCurrentUserToLocals } from './config/passport.js';
import { indexRouter } from './routes/indexRouter.js';
import { signUpRouter } from './routes/signUpRouter.js';
import { loginRouter } from './routes/loginRouter.js';
import { memberRouter } from './routes/memberRouter.js';
import { postRouter } from './routes/postRouter.js';
import { adminRouter } from './routes/adminRouter.js';
import { logoutRouter } from './routes/logoutRouter.js';
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
// session store in DB
const pgSession = connectPgSimple(session);
app.use(session({ 
    store: new pgSession({
        pool: pool,
        createTableIfMissing: true,
    }),
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 } // 60 minutes
}));
// passport setup
app.use(passport.session());
app.use(addCurrentUserToLocals);

// routes
app.use('/', indexRouter);
app.use('/sign-up', signUpRouter);
app.use('/log-in', loginRouter);
app.use('/member', memberRouter);
app.use('/post', postRouter);
app.use('/admin', adminRouter);
app.use('/log-out', logoutRouter);

// 404 redirect
app.all('*', (req, res) => {
    const ERROR_404 = '404 page not found';
    res.status(404).render('404', { errorMessage: ERROR_404 });
})

// default error handler
app.use((err, req, res, next) => {
    const errorMessage = err.message || 'Something went wrong. Please try again.';
    res.status(500).render('404', { errorMessage });
});

// init server
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}!`));
