const express = require('express');
const scheduleController = require('../../controllers/scheduleApi.controller');

const router = express.Router();

router
  .route('/')
  .post(scheduleController.createApi)

router
    .route('/:id')
    .get(scheduleController.getApi)
    .patch(scheduleController.updateApi)
    .delete(scheduleController.deleteApi)

module.exports = router;