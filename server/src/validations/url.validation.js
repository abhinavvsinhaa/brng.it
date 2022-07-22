const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const shortenOne = {
  body: Joi.object().keys({
    original: Joi.string().required(),
    name: Joi.string(),
    length: Joi.number(),
  }),
};
const shortenMany = {
  body: Joi.object().keys({
    original: Joi.array(),
  }),
};

module.exports = { shortenOne, shortenMany };
