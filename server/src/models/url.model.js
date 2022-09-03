const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const validator = require('validator');

const UrlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: [true, 'Please provide original url'],
    validate: [validator.isURL, 'Not a valid url'],
  },
  short: {
    type: String,
    unique: true,
  },
  uid: {
    type: String,
    unique: true,
  },
  analytics: {
    type: Array,
    default: {},
  },
});

UrlSchema.plugin(toJSON);

module.exports = mongoose.model('Url', UrlSchema);
