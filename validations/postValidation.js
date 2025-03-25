import { check } from "express-validator";

const EMPTY_ERROR = 'must not be empty';
const LENGTH_ERROR = 'must be between 1 and 40 characters';
const MESSAGE_LENGTH_ERROR = `must be between 1 and 300 characters`;
const IMAGE_ERROR = 'Image must be selected';
const postValidation = [
    check('title').trim()
        .notEmpty().withMessage(`Title ${EMPTY_ERROR}`)
        .isLength({ min: 1, max: 40}).withMessage(`Title ${LENGTH_ERROR}`),
    check('message').trim()
        .notEmpty().withMessage(`Message ${EMPTY_ERROR}`)
        .isLength({ min: 1, max: 300}).withMessage(`Message ${MESSAGE_LENGTH_ERROR}`),
    check('imageId').trim()
        .notEmpty().withMessage(`Image ${IMAGE_ERROR}`)
        .isNumeric().withMessage(`Invalid image selected`)
];

export { postValidation };