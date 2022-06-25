const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const validator = require('validator');

const UrlCollectionSchema = new mongoose.Schema({
  original: {
    type: Array,
    required: [true, 'Please provide original url'],
  },
  short: {
    type: String,
    unique: true,
  },
  uid: {
    type: String,
    unique: true,
  },
  visits: {
    type: Number,
  },
});

UrlCollectionSchema.plugin(toJSON);

module.exports = mongoose.model('UrlCollection', UrlCollectionSchema);
