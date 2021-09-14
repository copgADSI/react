import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAD9ClU0oL3Ld4YwH7sUQLOCLZWrkWsdKo",
    authDomain: "react-fb-1408e.firebaseapp.com",
    projectId: "react-fb-1408e",
    storageBucket: "react-fb-1408e.appspot.com",
    messagingSenderId: "104529989788",
    appId: "1:104529989788:web:235ce10df2478c544ddd59"
};
const fire = firebase.initializeApp(firebaseConfig)
export { fire }