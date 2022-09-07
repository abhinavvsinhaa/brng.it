const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const shareController = require('../../controllers/share.controller.js');

const router = express.Router();

router
  .route('/')
  .post(shareController.share)

router
  .route('/fb') 
  .post(shareController.shareFacebook)
  
router
  .route('/ig')
  .post(shareController.shareInstagram);


module.exports = router;