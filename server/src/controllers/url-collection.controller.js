const ShortUniqueId = require('short-unique-id');
const ApiError = require('../utils/ApiError');
const UrlCollection = require('../models/url-collection.model');
const catchAsync = require('../utils/catchAsync');

const httpStatus = require('http-status');
const User = require('../models/user.model');

const combine = catchAsync(async (req, res, _next) => {
  let uid = new ShortUniqueId({ length: 12 });
  let link = uid();
  while (await UrlCollection.findOne({ uid: link })) {
    link = uid();
  }

  let originalLinks = req.body.original.map((link) => {
    link.visits = 0;
    return link;
  });

  const combinedLink = await UrlCollection.create({
    name: req.body?.name,
    description: req.body?.description,
    image: req.body?.image,
    original: originalLinks,
    short: process.env.SHORT_BASE + link,
    uid: link,
  });
  await User.updateOne({ _id: req.user._id }, { $addToSet: { urlGroup: combinedLink._id } });
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

const updateLinkInCollection = catchAsync(async (req, res, next) => {
  const links = await UrlCollection.findOne({ uid: req.params.uid });

  links.original[req.params.index].visits++;
  links.markModified('original');
  await links.save();

  res.status(httpStatus.OK).json({
    status: 'success',
    data: links,
  });
});

module.exports = { combine, getAllLinks, deleteLink, updateLinkInCollection };
