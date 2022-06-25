const Joi = require('joi');

const combine = {
    body: Joi.object().keys({
      original: Joi.array().required()
    }),
};

module.exports = { combine }; 