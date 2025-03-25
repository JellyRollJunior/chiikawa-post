import dotenv from 'dotenv';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
dotenv.config();

const getAdmin = (req, res) => {
    if (req.isAuthenticated() && req.user.is_member) {
        return res.render('adminForm');
    }
    res.redirect('/');
};

const postAdmin = async (req, res) => {
    if (req.isAuthenticated() && req.user.is_member) {
        const errors = validationResult(req);
        if (!errors.isEmpty() || req.body.code != process.env.ADMINCODE) {
            return res.status(401).render('adminForm', { errors: [{ msg: 'Incorrect admin code' }] });
        }
        await db.updateToAdmin(req.user.id);
    }
    res.redirect('/');
};

export { getAdmin, postAdmin };
