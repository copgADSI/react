import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./StylesJS/Styles";
import fb from "../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Redirect, useHistory } from "react-router";
import auth from "../Utils/AuthState";
import { Home, Image } from "@material-ui/icons";
import image from "../Images/logo3.png";

export default function SignInSide({ authstate }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const history = useHistory();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (remember) {
          //Is checked
          localStorage.setItem("user", JSON.stringify(user));
        }
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={image} >
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Bienvenid@
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => handleUserLogin(e)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresa Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Ingresa Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              onClick={() => setRemember(!remember)}
              control={
                <Checkbox value="remember" checked={remember} color="primary" />
              }
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"#2196f3",color:"#fff"}}
              className={classes.submit}
            >
              Inicia Sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  style={{color:"#000"}}>
                  Olvidaste la Contraseña?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
     
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
