import * as db from '../db/queries.js';

const getSignUp = (req, res) => {
    res.render('auth/signUpForm');
}

const postSignUp = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    await db.insertuser(firstname, lastname, username, password);
    res.redirect('/');
}

export { getSignUp, postSignUp }