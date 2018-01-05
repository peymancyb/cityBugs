import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyASOtmjvpnaF2xfIfnkwuS59oZASF49tN8",
    authDomain: "citybug-b6b52.firebaseapp.com",
    databaseURL: "https://citybug-b6b52.firebaseio.com",
    projectId: "citybug-b6b52",
    storageBucket: "",
    messagingSenderId: "689165223615"
  };
const FB = firebase.initializeApp(config);
export default FB;
