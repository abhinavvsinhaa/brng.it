const axios = require('axios')
const History = require('../models/history.model')

class Instagram {
  pageId;
  assetURL;
  caption;
  userAccessToken;
  
  constructor(pageId, assetURL, caption, userAccessToken) {
    this.pageId = pageId;
    this.assetURL = assetURL;
    this.caption = caption;
    this.userAccessToken = userAccessToken;
  }

  async singleMediaPosts() {
    try {
      // create container
      var config = {
        method: 'post',
        url: `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${this.pageId}/media?image_url=${this.assetURL[0]}&caption=${this.caption}`,
        headers: {
          Authorization: `Bearer ${this.userAccessToken}`,
        },
      };

      const createdContainer = await axios(config);

      // publish container
      config.url = `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${this.pageId}/media_publish?creation_id=${createdContainer.data.id}`;
    
      let publishedContainer = await axios(config);
      
      console.log(publishedContainer.data);
      
      if (publishedContainer.data.id) {
        return publishedContainer.data.id;
      }      
    } catch (error) {
      console.error(error);
    }
  }

  async carouselPosts() {
    try {
      
    } catch (error) {
      
    }
  }
}

module.exports = { Instagram }
