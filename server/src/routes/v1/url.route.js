const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const urlValidation = require('../../validations/url.validation');
const urlController = require('../../controllers/url.controller');

const router = express.Router();

/*
*  auth('manageUrl') => manage access
*  validate(authValidation.shorten) => manage incoming request validation
*/


router.post('/shorten', validate(urlValidation.shortenOne), urlController.shortenUrl);
router.post('/shortenmultiple', validate(urlValidation.shortenMany), urlController.shortenMultipleUrl);

router.get('/:uid', urlController.getShortUrl);
router.delete('/:uid', urlController.deleteShortUrl);

module.exports = router;


module.exports = router;
