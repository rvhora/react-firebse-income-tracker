import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAr0BhPq6j8tTXWj7-tLSwDK-GJfYioVIs",
    authDomain: "react-income-tracker-eaaeb.firebaseapp.com",
    databaseURL: "https://react-income-tracker-eaaeb.firebaseio.com",
    projectId: "react-income-tracker-eaaeb",
    storageBucket: "react-income-tracker-eaaeb.appspot.com",
    messagingSenderId: "434837748095",
    appId: "1:434837748095:web:53af27e1564d16d3f9024a"
};
// Initialize Firebase


var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();