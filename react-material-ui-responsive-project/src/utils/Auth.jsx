import { useEffect } from "react";
import { useState } from "react";
import App from "../App";
import Friends from "../Components/User/Friends/Friends";
import fb from "./Firebase";

//Este componente se encarga de obtener todos los datos del usuario logueado
export const Auth = () => {
  const [userData, setUserData] = useState([]);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true); //Usuario logueado
        fb.firestore()
          .collection("users")
          .where("uid", "==", user.uid)
          .onSnapshot((query) => {
            const data = [];
            query.forEach((docs) => {
              data.push(docs.data());
              setUserData(userData); //Datos del usuario
            });
          });
        <Friends saludo="holaC" />;
      } else {
        setLogin(false);
      }
    });
  }, [userData, login]);
  return userData, login;
};
