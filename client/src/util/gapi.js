import { gapi } from 'gapi-script';
const API_KEY = "AIzaSyDF6_1aP7JJAvLz_zCd_xrof7ypxYfy79E";
function start(){
    gapi.client.init({
      apiKey: API_KEY,
      clientId: "222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/gmail.settings.basic email profile"
    })
  };
export function initGapi(){
    gapi.load('client:auth2',start);
}
export function getAliases(){
    const accessToken = gapi.auth.getToken().access_token;
    fetch('https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/chitwan001@gmail.com',{
      method: 'GET',
      headers: new Headers({'Authorization':'Bearer '+accessToken})
    }).then((aliases)=>{
      return aliases.json();
    }).then(function(val){
        console.log(val)
    })
}
export function putAliases(signature){
    const accessToken = gapi.auth.getToken().access_token;
    fetch('https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/chitwan001@gmail.com',{
      method: 'PUT',
      body:{
        "signature": new String(signature)
      },
      headers: new Headers({'Authorization':'Bearer '+accessToken,"Content-Type": "application/json",
      "Accept": "application/json"})
    }).then((aliases)=>{
      return aliases.json();
    }).then(function(val){
        console.log(val)
    })
}