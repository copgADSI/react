import { useState, useEffect } from "react";
import { Auth } from "../utils/Auth.jsx";

const {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
  Link,
} = require("@material-ui/core");
const { Search, Mail, Notifications, Map } = require("@material-ui/icons");

const userStyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: "#000",
  },
  logoLg: {
    //Size small
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    color: "white",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"), //Pantalla movil ocultamos el icon search izquierdo
    },
  },
  input: {
    color: "White",
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none", //Pantalla movil ocultamos el icon search izquierdo
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"), //Pantalla movil ocultamos el icon search izquierdo
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  home:{
    textDecoration:"none",
    cursor:"Pointer"
  }
}));
const Navbar = ({ login, userData }) => {
  const [open, setOpen] = useState(false);
  const [stateAuth, setStateAuth] = useState([]);

  const classes = userStyles({ open }); //Pasamos cualquier prop para los estilos
  return (
    <AppBar position="fixed" className={classes.colorPrimary}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          <Link to="/" className={classes.home}>
            {" "}
            <Map /> BIKES ON ROAD
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          <Map /> BR
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={(e) => setOpen(true)}
          />
          {login ? (
            <>
              {/* MESSAGES */}
              <Badge
                badgeContent={4}
                color="secondary"
                className={classes.badge}
              >
                <Mail />
              </Badge>
              {/* NOTIFICATIONS */}
              <Badge
                badgeContent={10}
                color="secondary"
                className={classes.badge}
              >
                <Notifications />
              </Badge>
              {/* PROFILE */}
              {[...userData].map((docs) => (
                <>
                  <Avatar alt="Test1" src={docs.avatar} />
                </>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
