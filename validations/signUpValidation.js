import { check } from 'express-validator';

const LENGTH_ERROR = 'must be between 1 and 32 characters';
const ALPHA_CHINESE_ERROR = 'must use alphabetic or chinese characters';
const ALPHA_NUMERIC_CHINESE_BOPOMOFO_ERROR = 'must use alphabetic, number, chinese, or bopomofo characters';
const PASSWORD_LENGTH_ERROR = 'must be between 6 and 32 characters';
const PASSWORD_MISMATCH_ERROR = 'Passwords do not match';

const ALPHA_CHINESE_REGEX = /^[ A-Za-z\u3000-\u303F\u3400-\u4DBF\u4E00-\u9FFF]+$/;
const ALPHA_NUMERIC_CHINESE_BOPOMOFO_REGEX = /[ A-Za-z\u3000-\u303F\u3400-\u4DBF\u4E00-\u9FFF\u3105-\u312fˋˇˊ˙]+/;
const userValidation = [
    check('firstname').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`firstname ${LENGTH_ERROR}`)
        .matches(ALPHA_CHINESE_REGEX).withMessage(`firstname ${ALPHA_CHINESE_ERROR}`),
    check('lastname').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`lastname ${LENGTH_ERROR}`)
        .matches(ALPHA_CHINESE_REGEX).withMessage(`lastname ${ALPHA_CHINESE_ERROR}`),
    check('username').trim()
        .isLength({ min: 1, max: 32 }).withMessage(`username ${LENGTH_ERROR}`)
        .matches(ALPHA_NUMERIC_CHINESE_BOPOMOFO_REGEX).withMessage(`username ${ALPHA_NUMERIC_CHINESE_BOPOMOFO_ERROR}`),
    check('password').trim()
        .isLength({ min: 6, max: 32}).withMessage(`password ${PASSWORD_LENGTH_ERROR}`),
    check('confirmPassword').trim()
        .custom((confirmation, { req }) => {
            if (confirmation != req.body.password) {
                throw new Error(PASSWORD_MISMATCH_ERROR);
            }
            return true;
        }).withMessage(PASSWORD_MISMATCH_ERROR),
];

export { userValidation };
