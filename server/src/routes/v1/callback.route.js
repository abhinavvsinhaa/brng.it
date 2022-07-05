const express = require('express');
const { callback } = require('../../controllers/callback.controller');

const router = express.Router();

router.get('/', callbackLinkedIn);

module.exports = router;