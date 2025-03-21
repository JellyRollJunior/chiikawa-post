import * as db from '../db/queries.js';

const getPostForm = (req, res) => {
    res.render('postForm');
};

const postPost = async (req, res) => {
    if (req.isAuthenticated()) {
        const title = req.body.title;
        const message = req.body.message;
        await db.insertPost(req.user.id, title, message);
    }
    return res.redirect('/');
}

const deletePost = async (req, res) => {
    const { postId } = req.params;
    if (postId) {
        await db.deletePost(postId);
    }
    res.redirect('/');
}

export { getPostForm, postPost, deletePost };
