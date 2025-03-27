import bcrypt from 'bcryptjs';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
import { matcher } from '../utils/textCensor.js';

const getSignUp = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('signUpForm');
};

const postSignUp = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(401).render('signUpForm', { errors: errors.array() });
            return;
        }
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const password = req.body.password;

        // check firstname, lastname, username for profanity
        const profanityErrors = [];
        if (matcher.hasMatch(firstname)) {
            profanityErrors.push({ msg: 'Firstname cannot contain profanity'});
        }
        if (matcher.hasMatch(lastname)) {
            profanityErrors.push({ msg: 'Lastname cannot contain profanity'});
        }
        if (matcher.hasMatch(username)) {
            profanityErrors.push({ msg: 'Username cannot contain profanity'});
        }
        if (profanityErrors) {
            res.status(401).render('signUpForm', { errors: profanityErrors });
            return;
        }
        // check if user already exists
        const duplicateUser = await db.getUserByUsername(username);
        if (duplicateUser) {
            res.status(401).render('signUpForm', { errors: [{ msg : 'Username is already in use'}] });
            return;
        }
        // insert user
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.insertuser(firstname, lastname, username, hashedPassword);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

export { getSignUp, postSignUp };
