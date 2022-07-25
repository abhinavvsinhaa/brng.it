const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const shareController = require('../../controllers/share.controller.js');

const router = express.Router();

router
  .route('/')
  .post(shareController.share)

module.exports = router;