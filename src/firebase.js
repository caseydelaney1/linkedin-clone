import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0IQXV5XwssGdOFSaDTLFDYqseT-WcYgY",
    authDomain: "linkedin-clone-f81a4.firebaseapp.com",
    projectId: "linkedin-clone-f81a4",
    storageBucket: "linkedin-clone-f81a4.appspot.com",
    messagingSenderId: "429955921612",
    appId: "1:429955921612:web:212eddbd50b79a092fb469",
    measurementId: "G-P3D5Z26TJ7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };