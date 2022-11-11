const axios = require('axios');
const saveFileIntoLocalFromUrl = require('./saveFileIntoLocalFromUrl')
const fs = require("fs")

class Linkedin {
  accessToken;
  author;
  caption;
  file; // url of the file
  fileName; // name retrieved from url

  constructor(accessToken, author, caption, file) {
    this.accessToken = accessToken;
    this.author = author;
    this.caption = caption;
    this.file = file;    
    console.log(file);
    this.fileName = file && file.split('.com/')[1]

    if (file != null) 
      saveFileIntoLocalFromUrl(file)
  }

  async postWithoutPhoto() {
    try {
      let config = {
        method: 'post',
        url: 'https://api.linkedin.com/v2/ugcPosts',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          author: `urn:li:person:${this.author}`,
          lifecycleState: 'PUBLISHED',
          specificContent: {
            'com.linkedin.ugc.ShareContent': {
              shareCommentary: {
                text: `${this.caption}`,
              },
              shareMediaCategory: 'NONE',
            },
          },
          visibility: {
            'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
          },
        }),
      };

      let response = await axios(config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async registerImage() {
    var data = JSON.stringify({
      registerUploadRequest: {
        recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
        owner: `urn:li:person:${this.author}`,
        serviceRelationships: [
          {
            relationshipType: 'OWNER',
            identifier: 'urn:li:userGeneratedContent',
          },
        ],
      },
    });

    let config = {
      method: 'post',
      url: 'https://api.linkedin.com/v2/assets?action=registerUpload',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data);
    const api = JSON.stringify(response.data.value.uploadMechanism).split(':')[3];
    let finalApi = api.split('"')[0];
    finalApi = 'https:' + finalApi;
    console.log("finalApi: ", finalApi);
    const digitalMediaAsset = response.data.value.asset;
    console.log('registered image -> upload image binary');

    const resp = await this.uploadImageBinary(finalApi, digitalMediaAsset)
    return resp;
  }

  async uploadImageBinary(api, digitalMediaAsset) {
      var filename = __dirname + '/files/' + this.fileName + '.png';
      let config = {
        method: 'put',
        url: api,
        headers: {
          'media-type-family': 'STILLIMAGE',
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'image/jpg',
          'X-Restli-Protocol-Version': '2.0.0'
        },
        data: fs.createReadStream(filename),
      };
  
      await axios(config);
      console.log('uploaded image binary -> sharing image');
      const response =  await this.shareImage(digitalMediaAsset);
      return response;
  }

  async shareImage(digitalMediaAsset) {
    let config = {
      method: 'post',
      url: 'https://api.linkedin.com/v2/ugcPosts',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      },
      data: JSON.stringify({
        author: `urn:li:person:${this.author}`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: this.caption,
            },
            shareMediaCategory: 'IMAGE',
            media: [
              {
                status: 'READY',
                description: {
                  text: '',
                },
                media: `${digitalMediaAsset}`,
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

    const response = await axios(config)
    console.log(response.data);
    
    // delete file from folder
    fs.unlink(`${__dirname}/files/${this.fileName}.png`, (err) => {
      if (err) return console.error(err)
      return console.log(`File deleted successfully ${this.fileName}.png`);
    })
    
    // if successful response.data = { id: "" }
    return response.data
  }
}

module.exports = { Linkedin };

// curl -X GET 'https://api.linkedin.com/rest/posts/{urn:li:share:6995957638798692352}?viewContext=AUTHOR' \
// -H 'X-Restli-Protocol-Version: 2.0.0' \
// -H 'LinkedIn-Version: {version number in the format YYYYMM}' \
// -H 'Authorization: Bearer {INSERT_TOKEN}