const Joi = require('joi');

const combine = {
  body: Joi.object().keys({
    original: Joi.array().items({
      link: Joi.string().required(),
      title: Joi.string().required(),
    }),
    name: Joi.string(),
    description: Joi.string(),
    dp: Joi.string().uri(),
    css: Joi.object(),
    bg: Joi.string().uri().allow(''),
  }),
};

module.exports = { combine };
