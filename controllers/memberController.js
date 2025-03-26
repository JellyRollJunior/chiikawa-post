import dotenv from 'dotenv';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
dotenv.config();

const getMember = (req, res) => {
    if (!req.user.is_member && !req.user.is_admin) {
        return res.render('memberForm');
    }
    // redirect to mainpage if user is a member, or admin
    res.redirect('/');
};

const postMember = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty() || req.body.code != process.env.MEMBERCODE) {
            return res.status(401).render('memberForm', { errors: [{ msg: 'Incorrect membership code' }] });
        }
        await db.updateToMember(req.user.id);
    } catch (err) {
        next(err);
    }
};

export { getMember, postMember };
