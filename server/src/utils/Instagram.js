class Instagram {
  req;
  res;
  constructor(request, response) {
    this.req = request;
    this.res = response;
  }

  async singleMediaPosts() {
    try {
      // create container
      var config = {
        method: 'post',
        url: `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${this.req.body.igPageId}/media?image_url=${this.req.body.downloadableURLs[0]}&caption=${req.body.caption}`,
        headers: {
          Authorization: `Bearer ${this.req.body.userAccessToken}`,
        },
      };

      const createdContainer = await axios(config);
      console.log(createdContainer);

      // publish container
      config.url = `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${this.req.body.igPageId}/media_publish?creation_id=${createdContainer.data.id}`;
      let publishedContainer = await axios(config);
      console.log(publishedContainer);

      // todo: save details in DB
      res.send(publishedContainer.data);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { Instagram }
