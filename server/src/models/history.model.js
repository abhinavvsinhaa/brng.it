const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const historySchema = mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      default: 'normal', // other option 'scheduled'
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    platform: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    images: [String],
    videos: [String],
    links: [String]
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
historySchema.plugin(toJSON);
historySchema.plugin(paginate);

/**
 * @typedef api
 */
const History = mongoose.model('History', historySchema);

module.exports = History;
