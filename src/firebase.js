// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC4J08mT08p57YXE1se9v2CxcNFqMslt6Y",
  authDomain: "clone-446f0.firebaseapp.com",
  projectId: "clone-446f0",
  storageBucket: "clone-446f0.appspot.com",
  messagingSenderId: "923745916619",
  appId: "1:923745916619:web:aeef1f1ac328da52bc2d4e",
  measurementId: "G-TEQ3PGFMQ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }