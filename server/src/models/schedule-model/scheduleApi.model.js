const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const scheduleApiSchema = mongoose.Schema(
  {
    accessToken: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    },
    assetURL: [String],
    // fulfilled or suspended or unfulfilled
    status: {
        type: String,
        default: 'unfulfilled'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: String,
    },
    date: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    link: [String],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
scheduleApiSchema.plugin(toJSON);
scheduleApiSchema.plugin(paginate);

/**
 * @typedef client
 */
const ScheduleApi = mongoose.model('ScheduleApi', scheduleApiSchema);

module.exports = ScheduleApi;
