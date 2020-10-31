// 'use strict'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader/Loader';
import { userSignIn } from '../../Redux/Auth/AuthAction';
import { getDiscover } from '../../Redux/Discover/DiscoverReducer';
import { setPlayList } from '../../Redux/Play/PlayReducer'
import Login from '../Login/Login'
import { getTokenFromResponse } from '../Login/SpotifyLogin'
import PlayerPage from '../PlayerPage/PlayerPage';
var Spotify = require('spotify-web-api-js');


export default function MainPage() {
    const dispatch = useDispatch()
    const { isAuthenticated, currentUser } = useSelector(state => state.auth) 
    

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
               dispatch(userSignIn(user));
           });
           spotify.getUserPlaylists().then(playlist =>{
               dispatch(setPlayList(playlist))
           })
         
            spotify.getPlaylist("32T36Dd1BMDXSBY4XWcRW2").then(async songs =>{
                try {
                    await  dispatch(getDiscover(songs))
                } catch (error) {
                    console.log(error);
                }
               
            })
           
          //32T36Dd1BMDXSBY4XWcRW2  37i9dQZEVXcJZyENOWUFo7
       }
   },[token, dispatch, spotify])
   const { discovers } = useSelector(state => state.discover)
//    console.log(discovers);
   console.log(currentUser);
    return (
        <div>
           {
               !isAuthenticated? <Login />: <PlayerPage />
            //    <Fragment>
            //   {  !discovers? <Loader /> :<PlayerPage spotify={spotify}/>}
            //    </Fragment>
             
           }
        </div>
    )
}

