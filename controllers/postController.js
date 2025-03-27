import { validationResult } from 'express-validator';
import { textCensor, matcher } from '../utils/textCensor.js';
import * as db from '../db/queries.js';

const getPostForm = async (req, res, next) => {
    try {
        const images = await db.getImages();
        return res.render('postForm', { images });
    } catch (err) {
        next(err);
    }
};

const postPost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const images = await db.getImages();
            return res
                .status(401)
                .render('postForm', { errors: errors.array(), images });
        }
        const title = req.body.title;
        const message = req.body.message;
        const imageId = req.body.imageId;
        // censor profanity!
        const censoredTitle = textCensor.applyTo(title, matcher.getAllMatches(title));
        const censoredMessage = textCensor.applyTo(message, matcher.getAllMatches(message));
        await db.insertPost(req.user.id, censoredTitle, censoredMessage, imageId);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const { postId } = req.params;
        if (postId) {
            await db.deletePost(postId);
        }
        res.redirect('/');
    } catch (err) {
        next(err);
    }
};

export { getPostForm, postPost, deletePost };
