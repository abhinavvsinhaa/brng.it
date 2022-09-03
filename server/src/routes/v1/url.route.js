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

router.post('/shorten', validate(urlValidation.shortenOne), auth(), urlController.shortenUrl);
router.post('/shortenmultiple', validate(urlValidation.shortenMany), auth(), urlController.shortenMultipleUrl);

router.patch('/:uid', urlController.updateShortUrl);
router.get('/:uid', urlController.getShortUrl);
router.delete('/:uid', urlController.deleteShortUrl);

module.exports = router;

module.exports = router;

/**
 * @swagger
 * /url/shorten:
 *   post:
 *     summary: Create a short url
 *     description: Users can access this route!.
 *     tags: [Url]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - original
 *             properties:
 *               original:
 *                 type: string
 *             example:
 *               original: www.goooglextys.com
 *
 */
