import React from 'react'
import { useDispatch } from 'react-redux';
import firebase from  '../../Firebase/Firebase.config'
import { userSignIn } from '../../Redux/Auth/AuthAction'
import { accessUrl } from './SpotifyLogin';
import './StyleLogin.css'


export default function Login() {
    const dispatch = useDispatch();


    const signIn = (selectedProvider) => {
        socialLogin(selectedProvider);
    };


    const socialLogin = async (selectedProvider) => {
        let provider;
        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result.user);
            dispatch(userSignIn(result.user));
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <div className='login_form' >
            <img src='https://cdn.telanganatoday.com/wp-content/uploads/2020/07/Spotify-launches-video-podcasts-support-491x267.jpg' alt='logo' />
            <h1>Hello I am the Login Page </h1>
            <a href={accessUrl} >Login With Spotify</a>
            
            <div className='after'></div>
        </div>
    )
}
