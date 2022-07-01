const ShortUniqueId = require('short-unique-id');
const ApiError = require('../utils/ApiError');
const UrlCollection = require('../models/url-collection.model');
const Url = require('../models/url.model');
const catchAsync = require('../utils/catchAsync');

const httpStatus = require('http-status');

const combine = catchAsync(async (req, res, _next) => {
  let uid = new ShortUniqueId({ length: 12 });
  let link = uid();
  while (await UrlCollection.findOne({ uid: link })) {
    link = uid();
  }
  const combinedLink = await UrlCollection.create({
    original: req.body.original,
    short: process.env.SHORT_BASE + link,
    uid: link,
  });
  res.status(201).json({
    status: 'success',
    data: combinedLink,
  });
});

const getAllLinks = catchAsync(async (req, res, next) => {
  const url = await UrlCollection.findOne({ uid: req.params.uid });
  if (!url) return next(new ApiError('URL not found on the server!', 503, true));
  res.status(201).json({
    status: 'success',
    data: url,
  });
});

const deleteLink = catchAsync(async (req, res, next) => {
  await UrlCollection.findOneAndDelete({ uid: req.params.uid });
  res.status(httpStatus.OK).json({
    status: 'success',
  });
});

module.exports = { combine, getAllLinks, deleteLink };
