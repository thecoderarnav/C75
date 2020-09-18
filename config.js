import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDramehlLJt_myuOnO4rwOfi2Ugx0eAw5s",
  authDomain: "wireless--library.firebaseapp.com",
  databaseURL: "https://wireless--library.firebaseio.com",
  projectId: "wireless--library",
  storageBucket: "wireless--library.appspot.com",
  messagingSenderId: "675248957418",
  appId: "1:675248957418:web:c00e018cdf87888d52f493"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
