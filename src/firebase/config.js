import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKdxQYHL784evMAHwOx9DyKO_1Dt3ECYY",
    authDomain: "photo-gallery-e66b9.firebaseapp.com",
    projectId: "photo-gallery-e66b9",
    storageBucket: "photo-gallery-e66b9.appspot.com",
    messagingSenderId: "915004081716",
    appId: "1:915004081716:web:746feaaf27e2028370ac61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 // Initialize storage
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp};