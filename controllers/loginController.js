import passport from 'passport';

const getLogin = (req, res) => {
    res.render('loginForm');
};

const postLogin = (req, res, next) => {
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
            res.redirect('/')
        });
    })(req, res, next);
};

export { getLogin, postLogin };
