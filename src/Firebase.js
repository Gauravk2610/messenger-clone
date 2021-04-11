import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB9LaqcIki9xP6HoBJPE6RdTk7ldLZ2pjw",
    authDomain: "messenger-clone-b002e.firebaseapp.com",
    projectId: "messenger-clone-b002e",
    storageBucket: "messenger-clone-b002e.appspot.com",
    messagingSenderId: "199561005387",
    appId: "1:199561005387:web:d1aac6bb2c0f9d688000ce",
    measurementId: "G-6HRT5VZ7SH"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider };