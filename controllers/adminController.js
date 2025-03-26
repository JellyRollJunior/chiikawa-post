import dotenv from 'dotenv';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
dotenv.config();

const getAdmin = (req, res) => {
    return res.render('adminForm');
};

const postAdmin = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty() || req.body.code != process.env.ADMINCODE) {
            return res.status(401).render('adminForm', { errors: [{ msg: 'Incorrect admin code' }] });
        }
        await db.updateToAdmin(req.user.id);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

export { getAdmin, postAdmin };
