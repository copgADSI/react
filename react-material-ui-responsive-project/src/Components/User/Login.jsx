import {
  Button,
  Card,
  CardActions,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import App from "../../App";
import fb from "../../utils/Firebase";
import Navbar from "../Navbar";
import User from "./User";
const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    width: 400,
    height: "200px",
  },
  input: {
    width: "100%",
    margin: 12,
  },
}));
const Login = ({ authozired }) => {
  if (authozired) {
    <Redirect to="/" />;
  }
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const classes = userStyles();
  const history = useHistory();
  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const loginUser = (e) => {
    e.preventDefault();
    fb.auth()
      .signInWithEmailAndPassword(email, password.password)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/user-not-found":
            setErrorMessage(err.message);
            break;
          case "auth/argument-error":
            setErrorMessage(err.message);
            break;

          default:
            break;
        }
      });
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActions>
          <form className={classes.form} onSubmit={(e) => loginUser(e)}>
            <Input
              className={classes.input}
              placeholder="Enter Email"
              id="email"
              label="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className={classes.input}
              placeholder="Enter Password"
              id="password"
              type={password.showPassword ? "text" : "password"}
              value={password.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {password.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            ></Input>
            <Button type="submit" variant="outlined" color="primary">
              Log In
            </Button>
          </form>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
