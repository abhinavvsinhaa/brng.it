const catchAsync = require('../utils/catchAsync');
const {google} = require('googleapis');
const setAuthToken = async (refToken) => {
  const CLIENT_ID = "222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "urn:ietf:wg:oauth:2.0:oob";
  const REFRESH_TOKEN = refToken;
  const SCOPES = 'https://www.googleapis.com/auth/gmail.settings.basic email profile';
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
  oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN,scope:SCOPES});
  return oAuth2Client;
}
const setSignature = catchAsync(async (req,res) => {
  // navigator.clipboard.writeText
  //             (document.getElementById('main-editor').innerHTML);
  //             message.success({content:"Great Choice! Copied content to clipboard",style:{bottom:'10px'}})
  setAuthToken(req.body.refToken).then ( async (oAuth2Client) => {
      const authToken = await oAuth2Client.getAccessToken();
      console.log(authToken);
      const mailRes = google.gmail({version: 'v1',auth: oAuth2Client}).users.settings.sendAs.list({userId: 'aurasic.app@gmail.com'});
      console.log(mailRes.data);
  })
  // console.log(req.body);
})

module.exports = {setSignature};
