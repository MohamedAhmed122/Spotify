import React, { useEffect, useState } from 'react'

import Login from '../Login/Login'
import { getTokenFromResponse } from '../Login/SpotifyLogin'
import PlayerPage from '../PlayerPage/PlayerPage';
var Spotify = require('spotify-web-api-js');


export default function MainPage() {

    const [token, setToken] = useState(null)

    var spotify = new Spotify();

   useEffect(()=>{
       const hash = getTokenFromResponse();
       window.location.hash = '';
       const _token = hash.access_token;
     
       if(_token){
           setToken(_token);

           spotify.setAccessToken(_token);
           
           spotify.getMe().then(user =>{
               console.log('user' , user);
           });
       }
   },[token, spotify])


    return (
        <div>
           {
               !token? <Login />: <PlayerPage />
           }
        </div>
    )
}
