const { validationResult, body } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

const extValidator = [
  body('extension')
    .exists()
    .withMessage('There is no extension key')
    .bail()
    .notEmpty()
    .withMessage('Extension cannot be empty')
    .bail()
    .trim()
    .custom(value => {
      if (value.length > 20) {
        return Promise.reject(`Extension's length should be shorter than 20`);
      }
      return value;
    })
    .bail()
    .custom(value => {
      const regexExt = /^[a-z0-9]+$/;
      const isNotValidExt = !regexExt.test(value);
      if (isNotValidExt) {
        return Promise.reject(
          'Extension should be consist of lowercase and number'
        );
      }
      return value;
    }),
  validate,
];

const customExtVlidator = [
  ...extValidator,
  body('tag')
    .exists()
    .withMessage('There is no tag key')
    .bail()
    .notEmpty()
    .withMessage('Tag cannot be empty')
    .bail()
    .trim()
    .custom(value => {
      const invalidTag = value !== 'custom';
      if (invalidTag) {
        return Promise.reject("Tag's value should be 'custom'");
      }
      return value;
    }),
  validate,
];

module.exports = { extValidator, customExtVlidator };
