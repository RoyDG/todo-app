import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaoY3ngIB_2JolglMfleZBGD78_Jy13U4",
  authDomain: "todo-app7.firebaseapp.com",
  projectId: "todo-app7",
  storageBucket: "todo-app7.appspot.com",
  messagingSenderId: "822738371314",
  appId: "1:822738371314:web:4761537540df927f0b466b",
  measurementId: "G-QP344HD742"
});

const db = firebaseApp.firestore();

export default db ;