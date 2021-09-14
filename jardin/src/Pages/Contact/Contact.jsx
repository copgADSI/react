import React, { useRef, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Snackbar } from "@material-ui/core";
import ReactMapGL, { Marker } from "react-map-gl";
import useContactStyles from "./Style";
import { Email, Room } from "@material-ui/icons";
import emailjs from "emailjs-com";
import AlertMessage from "./Alert";
import MuiAlert from "@material-ui/lab/Alert";

const Contact = () => {
  const classes = useContactStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 5.711411,
    longitude: -72.934886,
    zoom: 14,
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  function sendEmail(e) {
    e.preventDefault();
    console.log(email, message);
    if (email !== "" && email !== null && message !== "" && message !== null) {
      emailjs
        .sendForm(
          "service_ywz27c4",
          "template_wxna2je",
          e.target,
          "user_dYmyYGM32ftDCTqxYStCT"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmail("");
            setMessage("");
          },
          (error) => {
            <AlertMessage response={false} />;
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
      alert("Debe completar el formulario");
    }
  }

  return (
    <>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Grid container justifyContent="center">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={sendEmail}
        >

           <TextField disabled label="Teléfono: 3226061953"/><br />

       
          <br />
          <TextField
            id="message"
            type="text"
            disabled
            multiline
            rows={4}
            label="Correo: Sandralopez_1981@outlook.com"
          
          />
          <br />
       
        </form>
      </Grid>
      <Grid container justifyContent="center">
        <ReactMapGL
          {...viewport}
          width="50%"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCES_TOKEN}
          onViewportChange={(newViewport) => setViewport(newViewport)}
          mapStyle="mapbox://styles/developer98/cktdtm6xb01ig17o2dsd8p7ho"
        >
          <Marker
            latitude={5.711411}
            longitude={-72.934886}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room style={{ fontSize: viewport.zoom * 4, color: "red" }} />
          </Marker>
        </ReactMapGL>
      </Grid>
    </>
  );
};
export default Contact;
