import { useEffect, useState } from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import Friends from "./User/Friends/Friends";
import Login from "./User/Login";
import SignOut from "./User/SignOut";
import SignUp from "./User/SignUp";
import Profile from "./User/Profile/Profile";
import Friend from "./User/Friends/Friend";
import Chat from "./User/Friends/Chat/Chat";
const PrivateRoute = ({ userData, login, ...props }) => {
  const [listFriends, setListFriends] = useState(null);
  const { view } = useParams();
  useEffect(() => {
    const data = [];
    [...userData]?.map((list) => {
      if (list) {
        data.push(list.uid);
      } else {
        data.push("DON'T YOU HAVE ANY FRIENDS");
      }
    });
    setListFriends(data);
  }, []);

  switch (view) {
    case "Friends":
      return (
        <Route {...props}>
          {login ? <Friends  /> : <Login />};
        </Route>
      );
    case "Login": //En caso que se quiera iniciar sesión validamos que no haya una sesión actual
      return (
        <Route {...props}>
          {login === false ? <Login /> : <Redirect to="/" />}
        </Route>
      );
    case "SignUp": //En caso que se quiera registrar, validamos que no haya una sesión actual
      return (
        <Route {...props}>
          {login === false ? <SignUp /> : <Redirect to="/" />}
        </Route>
      );
    case "SignOut":
      return (
        <Route {...props}>{login ? <SignOut /> : <Redirect to="/" />}</Route>
      );
    case "Uid":
      return (
        <Route {...props}>{login ? <Friend /> : <Redirect to="/" />}</Route>
      );
    default:
      console.log("NO");
      break;
  }
};

export default PrivateRoute;
