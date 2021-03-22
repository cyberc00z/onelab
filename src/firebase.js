import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANlkrM8sHlrxdcSzMiAl6T4trMwGQhBUw",
    authDomain: "one-lab0.firebaseapp.com",
    projectId: "one-lab0",
    storageBucket: "one-lab0.appspot.com",
    messagingSenderId: "1069847306570",
    appId: "1:1069847306570:web:3bf59f863c3e1df1a6e1b3",
    measurementId: "G-GHZP98CLLN"
  }; 
  


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();


export default db;
