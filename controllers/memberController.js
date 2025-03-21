import dotenv from 'dotenv';
import * as db from '../db/queries.js';
dotenv.config();

const getMember = (req, res) => {
    res.render('memberForm');
};

const postMember = async (req, res) => {
    if (req.isAuthenticated()) {
        if (req.body.code != process.env.MEMBERCODE) {
            return res.render('memberForm', { errors: [{ msg: 'Incorrect membership code' }]});
        }
        await db.updateToMember(req.user.id);
    }
    // redirect to mainpage if user not logged in
    res.redirect('/');
};

export { getMember, postMember };
