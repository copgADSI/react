import { useEffect, useState } from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import Login from "./User/Login";
import Friend from "./User/Profile/Profile";
import Profile from "./User/Profile/Profile";
import Chat from "./User/Friends/Chat/Chat";
const PrivateRouteFriends = ({ userData, login, ...props }) => {
  const { Name, Uid } = useParams();
};

export default PrivateRouteFriends;
