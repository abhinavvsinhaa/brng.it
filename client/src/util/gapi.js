import { message } from 'antd';
import { gapi } from 'gapi-script';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import useAuth from '../hooks/useAuth';
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
export function getAliases(auth){
    const accessToken = gapi.auth.getToken().access_token;
    fetch(`https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/${auth.user.email}`,{
      method: 'GET',
      headers: new Headers({'Authorization':'Bearer '+accessToken})
    }).then((aliases)=>{
      return aliases.json();
    }).then(function(val){
        console.log(val)
    })
}
export async function putAliases(signature,auth){
    const accessToken = gapi.auth.getToken().access_token;
    const correctString = "";
    fetch(`https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/${auth.user.email}`,{
      method: 'PUT',
      body:JSON.stringify({
        signature: `${signature}`
      }),
      headers: new Headers({'Authorization':'Bearer '+accessToken,"Content-Type": "application/json",
      "Accept": "application/json"})
    }).then((aliases)=>{
      return aliases.json();
    }).then(function(val){
        console.log(val);
        message.success("Great Choice! Sync successful",3);
    }).catch((error)=>{
      message.error("Something went wrong!",5);
    })
}