const express = require('express');
const historyController = require('../../controllers/history.controller.js');

const router = express.Router();

router
  .route('/')
  .post(historyController.createHistory)

router
    .route('/:historyId')
    .get(historyController.getHistory)
    .delete(historyController.deleteHistory)

module.exports = router;