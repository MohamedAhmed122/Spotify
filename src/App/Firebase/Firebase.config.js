import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBAF3rOdtZJv43h5ItYIWEpBam0ZLll5z8",
    authDomain: "spotify1-clone.firebaseapp.com",
    databaseURL: "https://spotify1-clone.firebaseio.com",
    projectId: "spotify1-clone",
    storageBucket: "spotify1-clone.appspot.com",
    messagingSenderId: "388716349540",
    appId: "1:388716349540:web:d61ba8eb9d89c2ec65b771",
    measurementId: "G-JG1BLNEVS1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.firestore()

  export default firebase;