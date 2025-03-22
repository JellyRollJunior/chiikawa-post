import * as db from '../db/queries.js';

const getPostForm = async (req, res) => {
    const images = await db.getImages();
    res.render('postForm', { images });
};

const postPost = async (req, res) => {
    if (req.isAuthenticated()) {
        const title = req.body.title;
        const message = req.body.message;
        const imageId = req.body.imageId;
        await db.insertPost(req.user.id, title, message, imageId);
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
