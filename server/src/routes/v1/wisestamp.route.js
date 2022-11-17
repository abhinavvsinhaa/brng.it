const express = require("express")
const { setSignature } = require("../../controllers/wisestamp.signature")

const router = express.Router();

router
    .route('/')
    .post(setSignature)

module.exports = router;
