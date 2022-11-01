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

  async createSingleContainerCarousel(ids) {
    try {
      console.log("creating single container");
      // create single container for all the ids
      // https://graph.facebook.com/v14.0/{{instagrampageid}}/media?caption=Fruit%20candies&media_type=CAROUSEL&children=17934177593290821,17865623954780380&access_token={{fblonglived}}

      let url = `https://graph.facebook.com/v14.0/${this.pageId}/media?caption=${this.caption}&media_type=CAROUSEL&children=`
      ids.map(id => {
        url = `${url}${id},`;
      })

      // remove last trailing comma
      url = url.slice(0, -1);

      url = `${url}&access_token=${this.userAccessToken}`

      let config = {
        method: 'post',
        url
      }

      const response = await axios(config);
      if (response.data.id) {
        console.log("single container created successfully!");
        this.publishSingleContainerCarousel(response.data.id)
      }
    } catch (error) {
      console.error(error)
    }
  }


  async publishSingleContainerCarousel(singleContainerID) {
    try {
      console.log("Publishing container");
      // https://graph.facebook.com/v14.0/{{instagrampageid}}/media_publish?creation_id=18317915047037473&access_token={{fblonglived}}

      let config = {
        method: 'post',
        url: `https://graph.facebook.com/v14.0/${this.pageId}/media_publish?creation_id=${singleContainerID}&access_token=${this.userAccessToken}`
      }

      const response = await axios(config);
      if (response.data.id) {
        console.log("Published container successfully!!");
        // TODO: add to history
        return response.data.id;
      }

    } catch (error) {
      console.error(error)
    }
  }

  async uploadPhotosCarousel() {
    if (this.assetURL.length > 1 && this.assetURL.length <= 10) {
      let promise = await this.assetURL.map(async url => {
        // create container for each url
        // https://graph.facebook.com/v14.0/{{instagrampageid}}/media?image_url=https://upload.png&is_carousel_item=true&access_token={{fblonglived}}

        const id = new Promise(async (resolve, reject) => {
          try {
            let config = {
              method: 'post',
              url: `https://graph.facebook.com/v14.0/${this.pageId}/media?image_url=${url}&is_carousel_item=true&access_token=${this.userAccessToken}`
            }

            const response = await axios(config);
            console.log(response.data);
            if (response.data.id)
              resolve(response.data.id)

          } catch (error) {
            console.error(error)
            // reject error
          }
        })

        return id;
      })

      const ids = await Promise.all(promise)
      console.log("Printing ids after promise has resolved: ", ids)

      if (ids.length == this.assetURL.length) {
        this.createSingleContainerCarousel(ids);
      } else {
        console.log("Uploaded image length not equal to assetURL");
      }
    }
  }
}

module.exports = { Instagram }
