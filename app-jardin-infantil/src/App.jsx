import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import image from "./Images/img4.jpg";
import SignInSide from "./Pages/SignInSide";
const divStyle = {
  width: "100%",
  height: "90vh",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
};

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
        
          <Route exact path="/inicioSesion">
            <SignInSide />
          </Route>
          <div className="cComponent" style={divStyle}>
          
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
