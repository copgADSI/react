import fb from "../../utils/Firebase";

const state = fb.auth().onAuthStateChanged();
export default state;
