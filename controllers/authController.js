import * as db from '../db/queries.js';
import { body, validationResult } from 'express-validator';

const LENGTH_ERROR = 'must be between 1 and 32 characters';
const ALPHA_CHINESE_ERROR = 'must use alphabetic or chinese characters';
const ALPHA_NUMERIC_CHINESE_BOPOMOFO_ERROR = 'must use alphabetic, number, chinese, or bopomofo characters';
const isAlphaChinese = (value) => {
    const isAlphaChinese = /^[ A-Za-z\u3000-\u303F\u3400-\u4DBF\u4E00-\u9FFF]+$/;
    if (!isAlphaChinese.test(value)) {
        throw new Error(ALPHA_CHINESE_ERROR);
    }
    return true;
}
const isAlphaNumericBopomofo = (value) => {
    const isAlphaNumericChineseBopomofo = /[ A-Za-z\u3000-\u303F\u3400-\u4DBF\u4E00-\u9FFF\u3105-\u312fˋˇˊ˙]+/;
    if (!isAlphaNumericChineseBopomofo.test(value)) {
        throw new Error(ALPHA_NUMERIC_CHINESE_BOPOMOFO_ERROR);
    }
    return true;
}
const validateUser = [
    body('firstname').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`firstname ${LENGTH_ERROR}`)
        .custom(isAlphaChinese).withMessage(`firstname ${ALPHA_CHINESE_ERROR}`),
    body('lastname').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`lastname ${LENGTH_ERROR}`)
        .custom(isAlphaChinese).withMessage(`lastname ${ALPHA_CHINESE_ERROR}`),
    body('username').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`username ${LENGTH_ERROR}`)
        .custom(isAlphaNumericBopomofo).withMessage(`username ${ALPHA_NUMERIC_CHINESE_BOPOMOFO_ERROR}`),
];

const getSignUp = (req, res) => {
    res.render('auth/signUpForm');
};

const postSignUp = [
    validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            res.redirect('/auth/sign-up');
            return;
        }
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const password = req.body.password;
        await db.insertuser(firstname, lastname, username, password);
        res.redirect('/');
    },
];

export { getSignUp, postSignUp };
