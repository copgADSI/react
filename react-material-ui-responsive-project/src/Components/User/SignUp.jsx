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
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import fb from "../../utils/Firebase";
const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "400px",
  },
  input: {
    width: "100%",
    margin: 12,
  },
}));
//Show alert
const showAlert = async (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const SignUp = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState(null);
  const [rePassword, setRePassword] = useState({
    rePassword: "",
    showRePassword: false,
  });
  const [name, setName] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const [alertData, setAlertData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const classes = userStyles();
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };
  const handleChangeRe = (prop) => (event) => {
    setRePassword({ ...rePassword, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
    setRePassword({
      ...rePassword,
      showRePassword: !rePassword.showRePassword,
    });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const userSignUp = (e) => {
    e.preventDefault();
    const db = fb;

    //Validate confirm password
    if (password.password === rePassword.rePassword) {
      if (password.password.length >= 6) {
        fb.auth()
          .createUserWithEmailAndPassword(email, password.password)
          .then((user) => {
            db.firestore()
              .collection("Users")
              .add({
                uid: user.user.uid,
                avatar: null,
                name: "https://firebasestorage.googleapis.com/v0/b/react-bikes-app.appspot.com/o/avatar%2FP1000477.jpg?alt=media&token=2dfb0f28-8836-4ac2-b603-a8661df436b7",
                friends: [
                  {
                    uid: "a2cIkJAE7ZdYwqi5pypB",
                    avatar: null,
                    role: "customer",
                    name: "Carlos Pérez",
                    dateAdded: Date.now(),
                  },
                  {
                    uid: "a2cIkJAE7ZdYwqi5pypB",
                    avatar: "https://firebasestorage.googleapis.com/v0/b/react-bikes-app.appspot.com/o/avatar%2FP1000477.jpg?alt=media&token=2dfb0f28-8836-4ac2-b603-a8661df436b7",
                    role: "customer",
                    name: "Carlos Pérez",
                    dateAdded: Date.now(),
                  },
                ],
                role: "Customer",
              })
              .then((res) => {
                /* SHOW ALERT */
                const data = [];
                data.push(
                  `New user created successfully. Email: ${email}`,
                  "success"
                );
                setAlertData(data);
                setTimeout(() => {
                  history.push("/Login");
                }, 1000);
              })
              .catch((err) => {
                /* SHOW ALERT */
                setAlertData("");
                const data = [];
                data.push(
                  `Error, to try create new user. Email: ${email}`,
                  "error"
                );
                setAlertData(data);
              });
          })
          .catch((err) => {
            /* SHOW ALERT */
            setAlertData("");
            const data = [];
            data.push(` ${err.message}  Email: ${email}`, "error");
            setAlertData(data);
            return;
          });
      } else {
        /* SHOW ALERT */
        setAlertData("");
        const data = [];
        data.push(
          `Error, password length mush be 6 characters minimum. Email: ${email}`,
          "error"
        );
        setAlertData(data);
        return;
      }
    } else {
      /* SHOW ALERT */
      setAlertData("");
      const data = [];
      data.push(`Error, the passwords not same. Email: ${email}`, "error");
      setAlertData(data);
      return;
    }
  };
  useEffect(() => {
    setAlertData([]);
  }, []);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActions>
          <form className={classes.form} onSubmit={(e) => userSignUp(e)}>
            <Input
              className={classes.input}
              placeholder="Enter Email"
              id="email"
              label="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className={classes.input}
              placeholder="Enter name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className={classes.input}
              placeholder="Enter Password"
              id="password"
              type={password.showPassword ? "text" : "password"}
              value={password.password}
              onChange={handleChange("password")}
            ></Input>
            <Input
              className={classes.input}
              placeholder="Confirm Password"
              id="rePassword"
              type={rePassword.showRePassword ? "text" : "password"}
              value={rePassword.rePassword}
              onChange={handleChangeRe("rePassword")}
            ></Input>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={() => setOpenAlert(true)}
            >
              Sign Up
            </Button>
            <Button margin={6}>
              <InputAdornment position="end">
                <IconButton
                  margin={3}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {password.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            </Button>
          </form>
        </CardActions>
      </Card>

      {/* SHOW ALERT */}

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert onClose={handleClose} severity={alertData[1]}>
          {alertData[0]}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUp;
