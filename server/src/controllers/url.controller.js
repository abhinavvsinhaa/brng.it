// const Url = require('./url.model');
const ShortUniqueId = require('short-unique-id');
const ApiError = require('../utils/ApiError');
const Url = require('../models/url.model');
const httpStatus = require('http-status');

const shortenSingleUrl = async (req,res,next)=>{
  //Initialize uid
  const uid = new ShortUniqueId({ length: req.body.length });

  //Check if already exists!
  const urlInDb = await Url.findOne({original: req.body.original});
  if(urlInDb) return urlInDb;
  
  //Check if the uid is already in use!
  let uuid = '';
  let url = process.env.SHORT_BASE +(uuid = uid());
  let count = 0;
  while((await Url.findOne({ short: url }))){
    url = process.env.SHORT_BASE + (uuid = uid());
    if(count++ == 20){
      return next(new ApiError('Try again later, or with a different length!', 204, true));
    }
  }
  const newUrl = await Url.create({
      original: req.body.original,
      short: url,
      uid: uuid
  });
  return newUrl;
}

const shortenUrl = async (req, res, next) => { 
 const newUrl = await shortenSingleUrl(req,res,next);

  res.status(201).json({
    status: 'success',
    data: newUrl
  });
};

const shortenMultipleUrl = async (req, res, next) => {
    //Initialize uid
    const uid = new ShortUniqueId({ length: req.body.length });

    let multipleShortUrl = [];
    //Check if already exists!
    req.body.original.forEach(async originalUrl => {
        const urlInDb = await Url.findOne({original: originalUrl});
        // If already present in  the database!
        if(urlInDb) {
            multipleShortUrl.push(urlInDb);
        }
        else {
            let uuid = '';
            let url = process.env.SHORT_BASE +(uuid = uid());
            let count = 0;
            while((await Url.findOne({ short: url }))){
                url = process.env.SHORT_BASE + (uuid = uid());
                if(count++ == 20){
                    return next(new ApiError('Try again later, or with a different length!', 204, true));
                }
            }
            const newUrl = await Url.create({
                original: originalUrl,
                short: url,
                uid: uuid
            });
            multipleShortUrl.push(newUrl);
        }
        console.log(multipleShortUrl);
    });
    res.status(201).json({
        status: 'success',
        data: multipleShortUrl
    });
}
  

const getShortUrl = async (req, res, next) => {
  try{
    const url = await Url.findOne({uid: req.params.uid});
    if(!url) return next(new ApiError('URL not found on the server!', 503, true))
    res.status(201).json({
      status: 'success',
      data: url
    });
  }
  catch(e){
    next(e);
  }
}

const deleteShortUrl = async (req, res, next) => {
  try{
    const url = await Url.findOneAndDelete({uid: req.params.uid});
    res.status(httpStatus.OK).json({
      status: 'success'
    });
  }
  catch(e){
    next(e);
  }
}

module.exports = { shortenUrl, getShortUrl, shortenMultipleUrl, deleteShortUrl }
