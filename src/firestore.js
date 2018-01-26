import firebase from 'firebase'
import'firebase/firestore'


var config = {
    apiKey: "AIzaSyDWSziseYqaBCp7hUZPgMoLik-cjZSx-TE",
    authDomain: "book-store-bac38.firebaseapp.com",
    databaseURL: "https://book-store-bac38.firebaseio.com",
    projectId: "book-store-bac38",
    storageBucket: "book-store-bac38.appspot.com",
    messagingSenderId: "1073695152675"
  };
  
firebase.initializeApp(config);
const db = firebase.firestore();
export default db;