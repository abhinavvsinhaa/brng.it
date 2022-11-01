const generateUploadURL = require("../utils/aws")
const catchAsync = require("../utils/catchAsync")

const generateImageUploadURL = catchAsync(async (req, res) => {
    const url = await generateUploadURL()
    return res.send(url)
})

module.exports = { generateImageUploadURL }