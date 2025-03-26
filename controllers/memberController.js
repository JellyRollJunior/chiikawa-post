import dotenv from 'dotenv';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
import { DatabaseError } from '../errors/DatabaseError.js';
dotenv.config();

const getMember = (req, res) => {
    if (req.isAuthenticated() && !req.user.is_member && !req.user.is_admin) {
        return res.render('memberForm');
    }
    // redirect to mainpage if user is not logged in, a member, or admin
    res.redirect('/');
};

const postMember = async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            const errors = validationResult(req);
            if (!errors.isEmpty() || req.body.code != process.env.MEMBERCODE) {
                return res.status(401).render('memberForm', { errors: [{ msg: 'Incorrect membership code' }]});
            }
            await db.updateToMember(req.user.id)
        } 
        // redirect to mainpage if user not logged in
        res.redirect('/member');
        }
    catch (err) {
        next(err);
    }
};

export { getMember, postMember };
