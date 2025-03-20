import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import * as db from '../db/queries.js';

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

export { local };
