import React from "react";
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import  validate from "./SignIn/ValidateLogin";

export function Navigation() {

  console.log(validate);
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <h2>Welcome</h2>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/LogIn">Lon In</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
              <li>
                <Link to="/Chats">Chats</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/LogIn">
              <SignIn />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/Chats"></Route>
             <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
