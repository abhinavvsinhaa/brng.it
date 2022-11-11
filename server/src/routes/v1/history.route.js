const express = require('express');
const historyController = require('../../controllers/history.controller.js');

const router = express.Router();

router
  .route('/')
  .post(historyController.createHistory)

router

router
    .route('/:historyId')
    .get(historyController.getHistory)
    .post(historyController.getAllHistoryFromAccount)
    .delete(historyController.deleteHistory)

module.exports = router;