import passport from 'passport';
import { validationResult } from 'express-validator';

const getLogin = (req, res) => {
    res.render('loginForm');
};

const postLogin = (req, res, next) => {
    // render validator errors on login page 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).render('loginForm', { errors: errors.array() });
    }
    // redirect to / on authentication, else render errors on login page
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(new Error('There was an issue logging in'));
        }
        if (!user) {
            return res.render('loginForm', { errors: [{ msg: info.message }] });
        }
        req.login(user, (err) => {
            if (err) {
                return next(new Error('There was an issue logging in'));
            }
            res.redirect('/');
        });
    })(req, res, next);
};

export { getLogin, postLogin };
