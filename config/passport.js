import passport from 'passport';
import * as db from '../db/queries.js';
import { local } from './localStrategy.js';

passport.use(local);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await db.getUserById(id);
    !user ? done(new Error('User could not be found')) : done(null, user);
});

const addCurrentUserToLocals = (req, res, next) => {
    res.locals.currentUser = req.user;
    next();
}

export { passport, addCurrentUserToLocals };
