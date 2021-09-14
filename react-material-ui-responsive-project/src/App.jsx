import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import MapRoutes from "./Components/Map/MapRoutes";
import PrivateRouteFriends from "./Components/PrivateRouteFriends";
import Login, { onStateChanged } from "./Components/User/Login";
import SignUp from "./Components/User/SignUp";
import User from "./Components/User/User";
import fb from "./utils/Firebase";
const { makeStyles, Grid } = require("@material-ui/core");
const { default: Feed } = require("./Components/Feed");
const { default: Leftbar } = require("./Components/Leftbar");
const { default: Navbar } = require("./Components/Navbar");
const { default: Rigthbar } = require("./Components/Rightbar");
const { default: Search } = require("./Components/Map/Search");
const { default: AddPost } = require("./Components/AddPost");
const { default: Friends } = require("./Components/User/Friends/Friends");
const { default: PrivateRoute } = require("./Components/PrivateRoute");
const userStyles = makeStyles((theme) => ({
  right: {
    //Ocultamos el rightbar para dispositivos móviles o pequeños
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const App = ({ ...props }) => {
  console.log(props);
  console.log();
  const [message, setMessage] = useState("");
  const classes = userStyles();
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        fb.firestore()
          .collection("Users")
          .where("uid", "==", user.uid)
          .onSnapshot((query) => {
            query.forEach((doc) => {
              const data = [];
              data.push(doc.data());
              setUserData(data);
            });
          });
        setLogin(true);
      } else {
        setLogin(false);

        console.log("no");
      }
    });
  }, []);

  userData.map((data) => console.log(data.role));
  return (
    <>
      <Router>
        <Navbar login={login} userData={userData} />
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar login={login} userData={userData} />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Switch>
              <Route exact path={`/user/:view/`}>
                <PrivateRoute exact userData={userData} login={login} />
              </Route>
              <Route exact path="/Search">
                <Search />
              </Route>
              <Route exact path="/Routes">
                <MapRoutes />
              </Route>
              {/*    <PrivateRoute exact path="/Friends" component={Friends} login /> */}
              <Route exact path="/">
                <Feed />
                {login ? <AddPost /> : ""}
              </Route>
              <Route exact path="*">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptate, quod, voluptatibus provident harum magni maxime
                ratione, saepe commodi earum voluptatum qui natus in deserunt.
                Vel aperiam provident maxime quia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsa, dolorem obcaecati commodi
                aperiam natus libero explicabo distinctio magni quae dolorum
                dolores asperiores consectetur eligendi tempora quidem minima
                aspernatur itaque! Consequatur. ERROR 404 NOT FOUND
              </Route>
            </Switch>
          </Grid>
          <Grid item sm={3} className={classes.right}>
            <Rigthbar login={login} userData={userData} />
          </Grid>
        </Grid>
      </Router>
    </>
  );
};

export default App;
