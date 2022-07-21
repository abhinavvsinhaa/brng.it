// const Url = require('./url.model');
const ShortUniqueId = require('short-unique-id');
const ApiError = require('../utils/ApiError');
const Url = require('../models/url.model');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const shortenSingleUrl = async (req, res, next) => {
  //Initialize uid
  if (req.body.name) {
    const nameInDb = await Url.findOne({ uid: req.body.name });
    if (nameInDb) return next(new ApiError('Already Taken', 204, true));
    const newUrl = await Url.create({
      original: req.body.original,
      short: process.env.SHORT_BASE + req.body.name,
      uid: req.body.name,
    });
    return newUrl;
  }

  const uid = new ShortUniqueId({ length: req.body.length });

  //Check if already exists!
  const urlInDb = await Url.findOne({ original: req.body.original });
  if (urlInDb) return urlInDb;

  //Check if the uid is already in use!
  let uuid = '';
  let url = process.env.SHORT_BASE + (uuid = uid());
  let count = 0;
  while (await Url.findOne({ short: url })) {
    url = process.env.SHORT_BASE + (uuid = uid());
    if (count++ == 20) {
      return next(new ApiError('Try again later, or with a different length!', 204, true));
    }
  }
  const newUrl = await Url.create({
    original: req.body.original,
    short: url,
    uid: uuid,
  });
  return newUrl;
};

const shortenMultipleUrlAsync = async (req, _res, next) => {
  //Initialize uid
  const uid = new ShortUniqueId({ length: req.body.length });
  const multipleShortUrl = new Array();

  //Check if already exists!
  req.body.original.forEach(async (originalUrl) => {
    const urlInDb = await Url.findOne({ original: originalUrl });
    // If already present in  the database!
    if (urlInDb) {
      multipleShortUrl.push(urlInDb);
    } else {
      let uuid = '';
      let url = process.env.SHORT_BASE + (uuid = uid());
      let count = 0;
      while (await Url.findOne({ short: url })) {
        url = process.env.SHORT_BASE + (uuid = uid());
        if (count++ == 20) {
          return next(new ApiError('Try again later, or with a different length!', 204, true));
        }
      }
      const newUrl = await Url.create({
        original: originalUrl,
        short: url,
        uid: uuid,
      });
      multipleShortUrl.push(newUrl);
    }
  });

  return multipleShortUrl;
};

const shortenUrl = catchAsync(async (req, res, next) => {
  const newUrl = await shortenSingleUrl(req, res, next);
  if (!newUrl)
    return res.status(400).json({
      status: 'failure',
      message: 'something went wrong, most likely url name already in use!',
    });

  res.status(201).json({
    status: 'success',
    data: newUrl,
  });
});

const shortenMultipleUrl = catchAsync(async (req, res, next) => {
  //Initialize uid
  const multipleShortUrl = await shortenMultipleUrlAsync(req, res, next);
  setTimeout(() => {
    res.status(201).json({
      status: 'success',
      data: multipleShortUrl,
    });
  }, 1000);
});

const getShortUrl = catchAsync(async (req, res, next) => {
  const url = await Url.findOne({ uid: req.params.uid });
  if (!url) return next(new ApiError('URL not found on the server!', 503, true));
  url.visits++;
  await url.save();
  res.status(201).json({
    status: 'success',
    data: url,
  });
});

const deleteShortUrl = catchAsync(async (req, res, next) => {
  await Url.findOneAndDelete({ uid: req.params.uid });
  res.status(httpStatus.OK).json({
    status: 'success',
  });
});

module.exports = { shortenUrl, getShortUrl, shortenMultipleUrl, deleteShortUrl };
