const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const apiSchema = mongoose.Schema(
  {
    verb: {
        type: String,
        default: 'POST',
    },
    route: {
        type: String,
        required: true
    },
    headers: {
        type: Object,
        required: true
    },
    body: {
        type: Object,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
apiSchema.plugin(toJSON);
apiSchema.plugin(paginate);

/**
 * @typedef api
 */
const Api = mongoose.model('Api', apiSchema);

module.exports = Api;
