import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyD0371SjdOVm_o41P28mFVCBmiG8kmJLBY",
    authDomain: "peque-1eca6.firebaseapp.com",
    projectId: "peque-1eca6",
    storageBucket: "peque-1eca6.appspot.com",
    messagingSenderId: "1031831761310",
    appId: "1:1031831761310:web:50b1bcf6655385515ba68f"
};


const fb = initializeApp(firebaseConfig);
export default fb;