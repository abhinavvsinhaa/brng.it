const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');

const share = catchAsync(async (req, res) => {
  // if (req.query.linkedin == true) {

  let config = {
    method: 'post',
    url: 'https://api.linkedin.com/v2/ugcPosts',
    headers: {
      Authorization: `Bearer ${req.body.access_token}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      author: `urn:li:person:${req.body.author}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: `${req.body.caption}`,
          },
          shareMediaCategory: 'NONE',
        },
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
      },
    }),
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      res.send('ok');
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  share,
};
