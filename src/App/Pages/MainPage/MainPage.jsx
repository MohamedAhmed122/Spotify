import React, { useEffect, useState } from 'react'

import Login from '../Login/Login'
import { getTokenFromResponse } from '../Login/SpotifyLogin'



export default function MainPage() {

    const [token, setToken] = useState(null)

   useEffect(()=>{
       const hash = getTokenFromResponse();
       window.location.hash = '';
       const _token = hash.access_token;
       console.log(_token);
       if(_token){
           setToken(_token);
       }
   },[token])


    return (
        <div>
           {
               !token? <Login />: <h1>Login is done </h1>
           }
        </div>
    )
}
