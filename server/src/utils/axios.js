const axios = require('axios');

async function axiosPvt(config) {
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { axiosPvt };
