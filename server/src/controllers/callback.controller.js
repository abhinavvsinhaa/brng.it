const catchAsync = require('../utils/catchAsync');
const request = require('request')

// exchange code for access token
const callbackLinkedIn = catchAsync(async (req, res) => {
    const { code } = req.query;
    var options = {
      'method': 'POST',
      'url': 'https://www.linkedin.com/oauth/v2/accessToken',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:3000/channels/connect',
        'client_id': '77wv1vw4mpixlq',
        'client_secret': 'oeUtKB4fRr6hU7hK'
      }
    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      res.json(response.body);
    });
})

module.exports = {
    callbackLinkedIn
}