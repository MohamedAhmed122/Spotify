import React from 'react'

import { accessUrl } from './SpotifyLogin';
import './StyleLogin.css'


export default function Login() {

    return (
        <div className='login_form' >
            <img 
              src='https://cdn.telanganatoday.com/wp-content/uploads/2020/07/Spotify-launches-video-podcasts-support-491x267.jpg' alt='logo' 
            />
            <h1>Hello I am the Login Page </h1>
            <a href={accessUrl} >Login With Spotify</a>
            
            <div className='after'></div>
        </div>
    )
}
