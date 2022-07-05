const express = require('express');
const { callbackLinkedIn } = require('../../controllers/callback.controller');

const router = express.Router();

router.get('/', callbackLinkedIn);

module.exports = router;
