import React from 'react'
import './StyleLogin.css'


export default function Login() {

    // const signIn = (selectedProvider) => {
    //     socialLogin(selectedProvider);
    // };

    // const dispatch = useDispatch();
    // const socialLogin = async (selectedProvider) => {
    //     let provider;
    //     const auth = firebase.auth();
    //     if (selectedProvider === "facebook") {
    //     provider = new firebase.auth.FacebookAuthProvider();
    //     }
    //     if (selectedProvider === "google") {
    //     provider = new firebase.auth.GoogleAuthProvider();
    //     }
    //     try {
    //     const result = await auth.signInWithPopup(provider);
    //     console.log(result.user);
    //     dispatch(userSignIn(result.user));
    //     } catch (error) {
    //     console.log(error);
    //     }
    // };

    return (
        <div>
            <h1>Hello I am the Login Page </h1>
        </div>
    )
}
