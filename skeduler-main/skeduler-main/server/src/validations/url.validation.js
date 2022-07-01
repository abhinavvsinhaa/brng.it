const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const shortenOne = {
    body: Joi.object().keys({
      original: Joi.string().required()
    }),
};
const shortenMany = {
    body: Joi.object().keys({
      original: Joi.array()
    }),
};

module.exports = { shortenOne , shortenMany}; 