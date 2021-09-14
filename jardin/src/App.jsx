import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import image from "./Images/ponny3.jpg";
import SignInSide from "./Pages/SignInSide";
import auth from "./Utils/AuthState";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import PrivateRoute from "./Utils/PrivateRoute";
import UserSignOut from "./Utils/UserSignOut";
import Mision from "./Components/Information/Mision";
import Vision from "./Components/Information/Vision";
import Information from "./Components/Information/Information";
import Contact from "./Pages/Contact/Contact";
import SignUp from "./Pages/SignUp/SignUp";
import ChildList from "./Pages/SignUp/ChildsList";
import Modals from "./Components/Modals/Modals";
import ManageChilds from "./Pages/SignUp/ManageChilds";
const divStyle = {
  width: "100%",
  height: "90vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
};

function App() {
  const [authstate, setAuthstate] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthstate(true);
    }
  });
  return (
    <>
      <Router>
        <Navbar authstate={authstate} />
        <Switch>
          <Route exact path="/inicioSesion">
            <PrivateRoute authstate={authstate} />
          </Route>
          <Route exact path="/cerrarSesion">
            <UserSignOut authstate={authstate} />
          </Route>
          <Route exact path="/contactanos">
            <Contact />
          </Route>
          <Route exact path="/registro_infantes">
              <ManageChilds/>
          </Route>
          <Route exact path="/listado_infantes">
           <ChildList/>
          </Route>
          <Route path="/">
            <div className="cCompone  nt" style={divStyle}>
              <Mision />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
