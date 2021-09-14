import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useSignUpStyles from "./Style";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import fb from "../../Firebase";

function Copyright() {
  const classes = useSignUpStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const db = getFirestore();
  const storage = getStorage(fb);

  const classes = useSignUpStyles();
  const [age, setAge] = React.useState("");
  const [nameKid, setNameKid] = useState("");
  const [pictureKid, setPictureKid] = useState("");
  const [nameGuardian, setNameGuardian] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const kidSignUp = async (e) => {
    e.preventDefault();
    if (
      age !== "" &&
      nameKid !== "" &&
      nameGuardian !== "" &&
      contactPhone !== "" &&
      contactEmail !== ""
    ) {
      console.log(
        pictureKid,
        age,
        nameKid,
        nameGuardian,
        contactEmail,
        contactPhone
      );
      try {
        console.log(pictureKid);
        let metadata = {
          ContentType: pictureKid.type,
        }
        const storageRef = getStorage();
        const kidRef = await ref(storageRef, pictureKid.name);
      

        const docRef = await addDoc(collection(db, "kids"), {
          picture: kidRef.fullPath,
          fullNameKid: nameKid,
          fullnNameGuardian: nameGuardian,
          age: age,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
        });
        e.target.reset();
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Debe completar el formmulario de registro de infante");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registro de infantes
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => kidSignUp(e)}
        >
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => setPictureKid(e.target.files[0])}
          />
          <label htmlFor="contained-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
            Subir foto
          </label>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nombres y Apellidos infante"
                autoFocus
                onChange={(e) => setNameKid(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Edad Infante
                </InputLabel>
                <Select
                  style={{ width: 400 }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="1 año">1 año</MenuItem>
                  <MenuItem value="2 años">2 años</MenuItem>
                  <MenuItem value="3 años">3 años</MenuItem>
                  <MenuItem value="4 años">4 años</MenuItem>
                  <MenuItem value="5 años">5 años</MenuItem>
                </Select>
                <FormHelperText>Seleccione edad del infante</FormHelperText>
              </FormControl>
              <br />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nombres y Apellidos acudiente"
                autoFocus
                onChange={(e) => setNameGuardian(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Teléfono de cóntacto"
                name="phone"
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo eletrónico de cóntacto"
                name="email"
                autoComplete="email"
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#77dd77", color: "#fff" }}
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
