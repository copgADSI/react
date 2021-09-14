import { useState } from "react";
import { useEffect } from "react";
const { makeStyles, Container, Typography } = require("@material-ui/core");
const {
  Home,
  PeopleAlt,
  Camera,
  VideocamSharp,
  List,
  Apps,
  Collections,
  Store,
  Settings,
  ExitToApp,
  Room,
  Map,
  Favorite,
  CalendarToday,
} = require("@material-ui/icons");
const { Link } = require("react-router-dom");
const userStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ECE7E7",
    },
  },
  item: {
    /* DISPOSITIVO GRANDE */
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),

    //Dispositivo grande
    [theme.breakpoints.up("sm")]: {
      //Dispo moviles
      marginBottom: theme.spacing(3),
      cursor: "Pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    //Dispositivo pequeño
    [theme.breakpoints.down("sm")]: {
      //Dispo moviles
      display: "none",
      alignItems: "center",
    },
  },
  root: {
    color: "#555",
    textDecoration: "none",
  },
}));
const Leftbar = ({ login, userData }) => {
  const classes = userStyles();
  return (
    <Container className={classes.container}  >
      <Link to="/" className={classes.root}>
        <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </div>
      </Link>
      {login ? (
        <Link to="/user/Friends" className={classes.root}>
          <div className={classes.item}>
            <PeopleAlt className={classes.icon} />
            <Typography className={classes.text}>Friends</Typography>
          </div>
        </Link>
      ) : (
        ""
      )}
      <div className={classes.item}>
        <Room className={classes.icon} />
        <Typography className={classes.text}>
          {/*  <Link to="/Routes"> */}Routes{/* </Link> */}{" "}
        </Typography>
      </div>
      <div className={classes.item}>
        <Map className={classes.icon} />
        <Typography className={classes.text}>
          {" "}
          {/*  <Link to="/Search"> */}Search{/* </Link> */}{" "}
        </Typography>
      </div>
      {login ? (
        <>
          <div className={classes.item}>
            <VideocamSharp className={classes.icon} />
            <Typography className={classes.text}>Videos</Typography>
          </div>
          <div className={classes.item}>
            <Favorite className={classes.icon} />
            <Typography className={classes.text}>Favorites</Typography>
          </div>
        </>
      ) : (
        ""
      )}
      <div className={classes.item}>
        <CalendarToday className={classes.icon} />
        <Typography className={classes.text}>Events</Typography>
      </div>

      <div className={classes.item}>
        <Store className={classes.icon} />
        <Typography className={classes.text}>Marketplace</Typography>
      </div>
      {login === true ? (
        <>
          <div className={classes.item}>
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
          </div>
          <Link className={classes.root} to="/user/SignOut">
            <div className={classes.item}>
              <ExitToApp className={classes.icon} />
              <Typography className={classes.text}>Logout</Typography>
            </div>
          </Link>
        </>
      ) : (
        ""
      )}

      <div className={classes.item}>
        {[...userData].map((doc) => (
          <Typography className={classes.text}>{doc.name}</Typography>
        ))}
      </div>
    </Container>
  );
};

export default Leftbar;
