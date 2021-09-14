import { useHistory } from "react-router-dom";
import fb from "../../utils/Firebase";

const SignOut = () => {
  const history = useHistory();
  return fb
    .auth()
    .signOut()
    .then(() => {
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export default SignOut;
