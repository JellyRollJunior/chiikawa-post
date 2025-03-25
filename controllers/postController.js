import * as db from '../db/queries.js';

const getPostForm = async (req, res) => {
    if (req.isAuthenticated()) {
        const images = await db.getImages();
        return res.render('postForm', { images });
    }
    res.redirect('/');
};

const postPost = async (req, res) => {
    if (req.isAuthenticated()) {
        const title = req.body.title;
        const message = req.body.message;
        const imageId = req.body.imageId;
        await db.insertPost(req.user.id, title, message, imageId);
    }
    return res.redirect('/');
};

const deletePost = async (req, res) => {
    const { postId } = req.params;
    if (postId) {
        await db.deletePost(postId);
    }
    res.redirect('/');
};

export { getPostForm, postPost, deletePost };
