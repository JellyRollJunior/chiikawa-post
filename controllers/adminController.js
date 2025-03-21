import * as db from '../db/queries.js';

const getAdmin = (req, res) => {
    res.render('adminForm');
};

export { getAdmin };
