import dotenv from 'dotenv';
import * as db from '../db/queries.js';
import { validationResult } from 'express-validator';
dotenv.config();

const getAdmin = (req, res) => {
    return res.render('adminForm');
};

const postAdmin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty() || req.body.code != process.env.ADMINCODE) {
        return res.status(401).render('adminForm', { errors: [{ msg: 'Incorrect admin code' }] });
    }
    await db.updateToAdmin(req.user.id);
    res.redirect('/');
};

export { getAdmin, postAdmin };
