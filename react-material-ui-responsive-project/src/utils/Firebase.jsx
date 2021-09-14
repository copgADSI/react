import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnAiadBowKmj2nPeWq4_iCePeDTyZkaeE",
  authDomain: "react-bikes-app.firebaseapp.com",
  projectId: "react-bikes-app",
  storageBucket: "react-bikes-app.appspot.com",
  messagingSenderId: "299717760148",
  appId: "1:299717760148:web:29162a801912d329281081",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
