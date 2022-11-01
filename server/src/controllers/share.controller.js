const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');
const { Instagram } = require('../utils/Instagram');
const { Facebook } = require('../utils/Facebook');
const { Linkedin } = require('../utils/Linkedin')

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

  // if (req.body.file != '') {
  //   registerImage(req.body.author, req.body.access_token, req.body.file, req.body.caption);
  //   return res.send('got your file');
  // }

  const linkedin = new Linkedin(req.body.access_token, req.body.author, req.body.caption, req.body.file)

  const response = await linkedin.postWithoutPhoto();
  console.log(response);
  return res.send(response);
});

const shareFacebook = catchAsync(async (req, res) => {
  if (!req.body.pageId) {
    // bad request
    res.status(400).send('page id must be present!');
    return;
  }

  const facebook = new Facebook(req, res);
  console.log(req.body)
  if (req.body.downloadableURLs.length > 1) {
    console.log('calling upload multiple photos');
    facebook.uploadMultiplePhotos();
    return;
  }

  // single photo post and share now
  else if (req.body.downloadableURLs.length <= 1 && !req.body.unixTimeStamp) {
    console.log('calling single photo post share now');
    facebook.publish();
  }

  // single photo post publish
  else if (req.body.downloadableURLs.length <= 1 && req.body.unixTimeStamp) {
    facebook.schedule();
  } 
});

const shareInstagram = catchAsync(async (req, res) => {
  const  { igPageId, downloadableURLs, userAccessToken, caption } = req.body;

  const instagram = new Instagram(igPageId, downloadableURLs, caption, userAccessToken);

  console.log(req.body);

  if (req.body.downloadableURLs.length == 1) {
    const id = instagram.singleMediaPosts();
    
    if (id != null)
      res.send(id);
    
      return;
  }

  else if (req.body.downloadableURLs.length > 1 && req.body.downloadableURLs.length <= 10) {
    const id = instagram.uploadPhotosCarousel();
    res.send(id);
  }
});

module.exports = {
  share,
  shareFacebook,
  shareInstagram,
};
