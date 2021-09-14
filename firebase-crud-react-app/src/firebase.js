import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCAGOnh2PzftBJFZ_tjhykCD1ZKUb9BpY",
    authDomain: "fb-crud-react-app.firebaseapp.com",
    projectId: "fb-crud-react-app",
    storageBucket: "fb-crud-react-app.appspot.com",
    messagingSenderId: "311596306456",
    appId: "1:311596306456:web:d37e6dbbc2d7f21add736d"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();