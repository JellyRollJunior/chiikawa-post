import * as db from '../db/queries.js';

const getIndex = async (req, res) => {
    const messages = await db.getMessages();
    res.locals.messages = messages;
    res.render('index');
}

export { getIndex }