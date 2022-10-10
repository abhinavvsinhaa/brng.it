const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const suspendedSchema = mongoose.Schema(
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
suspendedSchema.plugin(toJSON);
suspendedSchema.plugin(paginate);

/**
 * @typedef Suspended
 */
const Suspended = mongoose.model('Suspended', suspendedSchema);

module.exports = Suspended;
