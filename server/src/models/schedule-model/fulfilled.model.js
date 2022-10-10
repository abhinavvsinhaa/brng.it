const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const fulfilledSchema = mongoose.Schema(
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
fulfilledSchema.plugin(toJSON);
fulfilledSchema.plugin(paginate);

/**
 * @typedef Fulfilled
 */
const Fulfilled = mongoose.model('Fulfilled', fulfilledSchema);

module.exports = Fulfilled;
