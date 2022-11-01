const express = require("express")
const { generateImageUploadURL } = require("../../controllers/getUploadUrl.controller")

const router = express.Router();

router
    .route('/')
    .get(generateImageUploadURL)

module.exports = router;