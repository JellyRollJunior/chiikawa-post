import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
const messages = (req.user && req.user.is_member)
        ? await db.getMemberMessages()
        : await db.getMessages();
    res.locals.messages = messages;
    res.render('index');
};

export { getIndex };
