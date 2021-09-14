import { Home } from "@material-ui/icons";
import { Redirect, Route } from "react-router";
import SignInSide from "../Pages/SignInSide";

const PrivateRoute = ({ authstate }) => {
  let authTemTest = false;
  switch (authstate) {
    case true:
      return <Redirect to="/" />;
    case false:
      return (
        <Route>
          <SignInSide />
        </Route>
      );
    default:
  }
};

export default PrivateRoute;
