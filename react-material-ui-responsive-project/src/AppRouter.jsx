import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Feed from "./Components/Feed";
import Leftbar from "./Components/Leftbar";
import Search from "./Components/Map/Search";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Rigthbar from "./Components/Rightbar";
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Routes"></Route>
          <Route path="/Search">
            <Redirect to="/Search" />
          </Route>
          <Route path="/"></Route>
          <Route path="/*">
            <Redirect to={NotFound} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
