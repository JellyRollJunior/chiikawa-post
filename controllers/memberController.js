import * as db from '../db/queries.js';

const getMember = (req, res) => {
    res.render('memberForm');
};

export { getMember }