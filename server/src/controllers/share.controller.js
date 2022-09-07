const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');

const shareImage = async (access_token, author, digitalMediaAsset, caption) => {
  var config = {
    method: 'post',
    url: 'https://api.linkedin.com/v2/ugcPosts',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      author: `urn:li:person:${author}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: caption,
          },
          shareMediaCategory: 'IMAGE',
          media: [
            {
              status: 'READY',
              description: {
                text: '',
              },
              media: digitalMediaAsset,
              title: {
                text: '',
              },
            },
          ],
        },
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
      },
    }),
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const uploadImageBinary = async (access_token, finalApi, digitalMediaAsset, file, caption, author) => {
  var config = {
    method: 'put',
    url: String(finalApi),
    headers: {
      'media-type-family': 'STILLIMAGE',
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'image/png',
    },
    data: JSON.stringify(file),
  };

  axios(config)
    .then(function (response) {
      console.log('upload response', response.data);
      shareImage(access_token, author, digitalMediaAsset, caption);
    })
    .catch(function (error) {
      console.log('upload error', error);
    });
};

const registerImage = async (author, access_token, file, caption) => {
  var data = JSON.stringify({
    registerUploadRequest: {
      recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
      owner: `urn:li:person:${author}`,
      serviceRelationships: [
        {
          relationshipType: 'OWNER',
          identifier: 'urn:li:userGeneratedContent',
        },
      ],
    },
  });

  var config = {
    method: 'post',
    url: 'https://api.linkedin.com/v2/assets?action=registerUpload',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      const api = JSON.stringify(response.data.value.uploadMechanism).split(':')[3];
      let finalApi = api.split('"')[0];
      finalApi = 'https:' + finalApi;
      console.log(finalApi);
      const digitalMediaAsset = response.data.value.asset;
      uploadImageBinary(access_token, finalApi, digitalMediaAsset, file, caption, author);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const share = catchAsync(async (req, res) => {
  // if (req.query.linkedin == true) {

  if (req.body.file != '') {
    registerImage(req.body.author, req.body.access_token, req.body.file, req.body.caption);
    return res.send('got your file');
  }

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
      res.send(response);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
});

const shareFacebook = catchAsync(async (req, res) => {
  let url = `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${req.body.pageId}/`;

  if (req.body.fileURL) {
    url += `photos?url=${req.body.fileURL}`;
    if (req.body.caption) url += `&message=${req.body.caption}`;
  } else {
    url += `feed/?`;
    if (req.body.caption) url += `message=${req.body.caption}`;
  }

  // todo: add link to feed
  // if (req.body.link)
  //   url += `&link=${req.body.link}`

  console.log(url);

  var config = {
    method: 'post',
    url: `${url}&access_token=${req.body.pageAccessToken}`,
    headers: {
      Authorization: `Bearer ${req.body.userAccessToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

class Instagram {
  constructor() {}

  async singleMediaPosts(req, res) {
    try {
      // create container
      var config = {
        method: 'post',
        url: `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${req.body.igPageId}/media?image_url=${req.body.downloadableURLs[0]}&caption=${req.body.caption}`,
        headers: {
          Authorization: `Bearer ${req.body.userAccessToken}`,
        },
      };

      const createdContainer = await axios(config);
      console.log(createdContainer);

      // publish container
      config.url = `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${req.body.igPageId}/media_publish?creation_id=${createdContainer.data.id}`;
      let publishedContainer = await axios(config);
      console.log(publishedContainer)
      // todo: save details in DB
      res.send(publishedContainer.data);
    } catch (error) {
      console.log(error);
    }
  }
}

const shareInstagram = catchAsync(async (req, res) => {
  const instagram = new Instagram();
  console.log(req.body);
  if (req.body.downloadableURLs.length == 1) {
    console.log("calling");
    instagram.singleMediaPosts(req, res);
    return;
  }

});

module.exports = {
  share,
  shareFacebook,
  shareInstagram,
};
