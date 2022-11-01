const express = require('express');
const shareController = require('../../controllers/share.controller.js');

const router = express.Router();

router
  .route('/linkedin')
  .post(shareController.share)

router
  .route('/fb') 
  .post(shareController.shareFacebook)
  
router
  .route('/ig')
  .post(shareController.shareInstagram);


module.exports = router;