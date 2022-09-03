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
  css: {
    type: Object,
    default: {
      bg: '#ffffff',
      pt: '40px',
      profile: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '3px',
        borderColor: '#ffffff',
      },
      title: {
        color: '#000000',
        size: '30px',
      },
      bio: {
        color: '#000000',
        size: '18px',
      },
      link: {
        bg: '#222222',
        size: '16px',
        color: '#ffffff',
        border: '4px',
        borderColor: 'black',
        borderRadius: '20px',
      },
    },
  },
  dp: {
    type: String,
    default: 'https://i.ibb.co/qkkx4HX/avatardefault-92824.png',
  },
  bg: {
    type: String,
    default: '',
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
