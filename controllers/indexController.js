import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
    const messages =
        req.user && req.user.is_member
            ? await db.getMemberPosts()
            : await db.getPosts();
    res.locals.messages = messages;
    res.render('index');
};

export { getIndex };
