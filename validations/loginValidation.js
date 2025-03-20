import { check } from 'express-validator';

const EMPTY_ERROR = `must not consist only of whitespace`;
const loginValidation = [
    check('username').trim()
        .notEmpty().withMessage(`Username ${EMPTY_ERROR}`),
    check('password').trim()
        .notEmpty().withMessage(`Password ${EMPTY_ERROR}`),
]

export { loginValidation }