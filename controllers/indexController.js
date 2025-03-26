import * as db from '../db/queries.js';

const getIndex = async (req, res, next) => {
    try {
        const posts =
            req.user && req.user.is_member
                ? await db.getMemberPosts()
                : await db.getPosts();
        res.locals.posts = posts;
        res.render('index');
    } catch (err) {
        next(err);
    }
};

export { getIndex };
