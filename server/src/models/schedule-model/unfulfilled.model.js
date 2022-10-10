const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const unFulfilledSchema = mongoose.Schema(
  {
    apiId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ScheduleApi'
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
unFulfilledSchema.plugin(toJSON);
unFulfilledSchema.plugin(paginate);

/**
 * @typedef UnFulfilled
 */
const UnFulfilled = mongoose.model('UnFulfilled', unFulfilledSchema);

module.exports = UnFulfilled;
