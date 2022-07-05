const express = require('express');
const { callbackLinkedIn, getUserId } = require('../../controllers/callback.controller');

const router = express.Router();

router.get('/callback', callbackLinkedIn);
router.post('/user', getUserId)

module.exports = router;