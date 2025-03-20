import passport from 'passport';

const getLogin = (req, res) => {
    res.render('loginForm');
};

const postLogin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
});

export { getLogin, postLogin };
