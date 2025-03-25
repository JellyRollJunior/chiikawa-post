import { check } from 'express-validator';

const codeValidation = [
    check('code').trim()
        .notEmpty().withMessage('Incorrect membership code'),
];

export { codeValidation };
