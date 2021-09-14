import { fire } from "../../Firebase";

const validate = fire.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        console.log('Logged')
            // ...
    } else {
        // User is signed out
        // ...
        console.log("no");
    }
});
export default validate;