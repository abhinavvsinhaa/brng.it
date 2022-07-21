const Joi = require('joi');

const combine = {
  body: Joi.object().keys({
    original: Joi.array().items({
      link: Joi.string().required(),
      title: Joi.string().required(),
    }),
    name: Joi.string(),
    description: Joi.string(),
    image: Joi.string().uri(),
  }),
};

module.exports = { combine };
