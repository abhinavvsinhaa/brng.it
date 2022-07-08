const Joi = require('joi');

const combine = {
  body: Joi.object().keys({
    original: Joi.array().required(),
    name: Joi.string(),
    description: Joi.string(),
    image: Joi.string().uri(),
  }),
};

module.exports = { combine };
