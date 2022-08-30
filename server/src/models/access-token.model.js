const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const accessTokenSchema = mongoose.Schema(
  {
    facebook: {
        type: String, 
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
    instagram: {
        type: String,
        default: ''
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
accessTokenSchema.plugin(toJSON);
accessTokenSchema.plugin(paginate);

/**
 * @typedef accesToken
 */
const AccessToken = mongoose.model('AccessToken', accessTokenSchema););

module.exports = AccessToken;
