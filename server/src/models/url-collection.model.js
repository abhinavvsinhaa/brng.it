const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const UrlCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: 'https://i.ibb.co/qkkx4HX/avatardefault-92824.png',
  },
  original: {
    type: Array,
    required: [true, 'Please provide original urls'],
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
