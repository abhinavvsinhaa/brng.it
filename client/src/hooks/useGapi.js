import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
function useGapi() {
    const API_KEY = "AIzaSyDF6_1aP7JJAvLz_zCd_xrof7ypxYfy79E";
    const { auth, setAuth } = useAuth();
    useEffect(()=>{
        gapi.load('client:auth2', start);
    },[])
    function start(){
        gapi.client.init({
            apiKey: API_KEY,
            clientId: "222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/gmail.settings.basic email profile"
        })
    }
    function getAliases() {
        const accessToken = gapi.auth.getToken().access_token;
        fetch(`https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/${auth.user.email}`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
        }).then((aliases) => {
            return aliases.json();
        }).then(function (val) {
            console.log(val)
        })
    }
    function putAliases(signature) {
        const accessToken = gapi.auth.getToken().access_token;
        fetch(`https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs/${auth.user.email}`, {
            method: 'PUT',
            body: {
                "signature": new String(signature)
            },
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken, "Content-Type": "application/json",
                "Accept": "application/json"
            })
        }).then((aliases) => {
            return aliases.json();
        }).then(function (val) {
            console.log(val)
        })
    }
    return {getAliases,putAliases}
};

export default useGapi;