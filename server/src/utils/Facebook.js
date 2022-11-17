const axios = require('axios');

class Facebook {
  req;
  res;
  url;

  constructor(request, response) {
    this.req = request;
    this.res = response;

    // url upon which we will send our request
    this.url = `https://graph.facebook.com/${request.body.pageId}/`;

    if (request.body.downloadableURLs.length == 1) {
      this.url = `${this.url}photos?url=${request.body.downloadableURLs[0]}`;

      if (request.body.caption) this.url = `${this.url}&message=${request.body.caption}`;
    } else {
      this.url = `${this.url}feed/?`;

      if (request.body.caption) this.url = `${this.url}message=${request.body.caption}`;
    }
  }

  // SCHEDULE FACEBOOK POSTS
  async schedule() {
    try {
      let config = {
        method: 'post',
        url: `${this.url}&access_token=${this.req.body.pageAccessToken}&published=false&scheduled_publish_time=${this.req.body.unixTimeStamp}`,
        headers: {
          Authorization: `Bearer ${this.req.body.userAccessToken}`,
        },
      };

      const response = await axios(config);
      console.log(response.data);

      this.res.send(response.data)
    } catch (error) {
      console.error(error);
      this.res.send(error);
    }
  }

  // PUBLISH FACEBOOK POSTS
  async publish() {
    try {
      this.url = encodeURI(`${this.url}&access_token=${this.req.body.pageAccessToken}`)
      let config = {
        method: 'post',
        url: this.url,
        headers: {
          Authorization: `Bearer ${this.req.body.userAccessToken}`,
        },
      };

      const response = await axios(config);
      console.log(response.data);
      this.res.send(response.data)
    } catch (error) {
      console.error(error);
      this.res.send(error);
    }
  }

  async uploadMultiplePhotos() {
    const { downloadableURLs } = this.req.body;
    // console.log(downloadableURLs)
    let promises = await downloadableURLs.map(async url => {
      const photoId = new Promise(async (resolve, reject) => {
        try {
          var config = {
            method: 'post',
            url: encodeURI(`https://graph.facebook.com/me/photos?published=false&access_token=${this.req.body.pageAccessToken}&url=${url}`),
            headers: { 
              'Authorization': `Bearer ${this.req.body.userAccessToken}`, 
              'Content-Type': 'text/plain'
            },
          };
          
          const response = await axios(config);
          console.log(response.data)
          if (response.data.id) resolve(response.data.id)
  
        } catch (e) {
          console.error(e);
          this.res.send(e)
        }
      })
      return photoId;
    })

    const photosIDArray = await Promise.all(promises);
    // if all the photos are correctly uploaded
    if (downloadableURLs.length == photosIDArray.length) {
      // publish all photos to facebook
      this.publishMultiplePhotos(photosIDArray);
    }

    else {
      console.log(photosIDArray);
      this.res.send('try re-uploading all the photos, as some of photos cant be uploaded');
    }
  }

  async publishMultiplePhotos(photosIDArray) {
    if (photosIDArray.length >= 1) {
      try {
        // FORMAT OF URL
        // https://graph.facebook.com/{{pageid}}/feed?message=testing multiple photos&attached_media[0]={"media_fbid":"121020147365973"}&attached_media[1]={"media_fbid":"121020350699286"}&access_token={{fbpagetoken}}

        let url =  `https://graph.facebook.com/${this.req.body.pageId}/feed?`

        if (this.req.body.caption)
          url += `message=${this.req.body.caption}`
        
        photosIDArray.map((id,i) => {
          url += `&attached_media[${i}]={"media_fbid":"${id}"}`
        })

        url += `&access_token=${this.req.body.pageAccessToken}`

        let config = {
          method: 'post',
          url: encodeURI(url),
          headers: {
            'Authorization': `Bearer ${this.req.body.userAccessToken}`,
            'Content-Type': 'text/plain'
          }
        }

        const response = await axios(config)
        console.log('successfully posted', response.data.id)
        if (response.data.id) {
          this.res.send(response.data.id)
        }

      } catch (e) {
        console.error(e)
        this.res.send(e);
      }
    }
  }
}

module.exports = { Facebook }