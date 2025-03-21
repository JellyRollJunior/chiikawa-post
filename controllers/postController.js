import * as db from '../db/queries.js';

const getPostForm = (req, res) => {
    res.render('postForm');
};

const postPost = async (req, res) => {
    if (req.isAuthenticated()) {
        const title = req.body.title;
        const message = req.body.message;
        await db.insertMessage(req.user.id, title, message);
    }
    return res.redirect('/');
}

export { getPostForm, postPost };
