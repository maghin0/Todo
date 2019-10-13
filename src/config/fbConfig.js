import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDf5TuLFAaN98LZjaatt1OtgYSn8aGalQA",
  authDomain: "ninjas-82f55.firebaseapp.com",
  databaseURL: "https://ninjas-82f55.firebaseio.com",
  projectId: "ninjas-82f55",
  storageBucket: "ninjas-82f55.appspot.com",
  messagingSenderId: "1069759573319"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
