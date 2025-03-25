import dotenv from 'dotenv';
import * as db from '../db/queries.js';
dotenv.config();

const getAdmin = (req, res) => {
    if (req.isAuthenticated() && req.user.is_member) {
        return res.render('adminForm');
    }
    res.redirect('/');
};

const postAdmin = async (req, res) => {
    if (req.isAuthenticated() && req.user.is_member) {
        if (req.body.adminCode != process.env.ADMINCODE) {
            return res.render('adminForm', {
                errors: [{ msg: 'Incorrect admin code' }],
            });
        }
        await db.updateToAdmin(req.user.id);
    }
    res.redirect('/');
};

export { getAdmin, postAdmin };
