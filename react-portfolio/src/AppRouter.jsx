import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/Portfolio">Portfolio</Route>
          <Route path="/Experience">Experience</Route>
          <Route path="/Contact">Contact</Route>
          <Route exact path="/">
            Welcome
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
