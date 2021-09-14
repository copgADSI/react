import { signOut } from "@firebase/auth";
import { Redirect, useHistory } from "react-router";
import auth from "./AuthState";

const UserSignOut = ({ authstate }) => {
  const history = useHistory();
  if (authstate) {
    signOut(auth)
      .then(() => {
        window.location.reload(false);
        localStorage.removeItem("user");
        
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return <Redirect to="/" />;

};

export default UserSignOut;
