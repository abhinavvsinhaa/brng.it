const axios = require('axios');

class Facebook {
  req;
  res;
  url;

  constructor(request, response) {
    this.req = request;
    this.res = response;
    this.url = `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${request.body.pageId}/`;

    if (request.body.fileURL) {
      this.url += `${this.url}photos?url=${request.body.fileURL}`;

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
      let config = {
        method: 'post',
        url: `${this.url}&access_token=${this.req.body.pageAccessToken}`,
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
}

module.exports = { Facebook }