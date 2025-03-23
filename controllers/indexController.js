import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
    const posts =
        req.user && req.user.is_member
            ? await db.getMemberPosts()
            : await db.getPosts();
    res.locals.posts = posts;
    res.render('index');
};

export { getIndex };
