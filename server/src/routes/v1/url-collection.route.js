const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const urlCollectionValidation = require('../../validations/url-collection.validation');
const urlCollectionController = require('../../controllers/url-collection.controller.js');

const router = express.Router();

/*
 *  auth('manageUrl') => manage access
 *  validate(authValidation.shorten) => manage incoming request validation
 */

router.post('/combine', validate(urlCollectionValidation.combine), auth(), urlCollectionController.combine);
router.get('/:uid', urlCollectionController.getAllLinks);
router.patch('/:uid/:index', urlCollectionController.updateLinkInCollection);
router.delete('/:uid', auth(), urlCollectionController.deleteLink);

module.exports = router;

module.exports = router;
