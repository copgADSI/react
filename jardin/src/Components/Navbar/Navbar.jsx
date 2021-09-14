import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ChildCare, Mood } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useNavbarStyles from "./Styles";
import ListIcon from "@material-ui/icons/List";
import Modals from "../Modals/Modals";
import ModalGallery from "../Modals/ModalGallery";
import "./Navbar.css";
const Navbar = ({ authstate }) => {
  const classes = useNavbarStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {authstate ? (
        <MenuItem onClick={handleMenuClose}>
          <Link to="cerrarSesion">Cerrar sesion</Link>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleMenuClose}>
          <Link to="inicioSesion">Inicio Sesión</Link>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link
          to="registro_infantes"
          className={classes.typography}
          style={{ color: "#000" }}
        >
          <ChildCare />
          Administración infantes
        </Link>
      </MenuItem>
      <MenuItem>
      
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#77dd77" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.typography} variant="h6" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Pequeños Ponnys{" "}
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              {" "}
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="registro_infantes" className={classes.typography}>
                  {" "}
                  <ChildCare />
                  Administración infantes
                </Link>
              </Typography>
            </IconButton>
            <IconButton color="inherit">
              {" "}
              <Typography className={classes.title} variant="h6" noWrap>
                <ModalGallery />
              </Typography>
            </IconButton>
            <IconButton color="inherit">
              {" "}
              <Typography className={classes.title} variant="h6" noWrap>
                {" "}
                <Modals />
              </Typography>
            </IconButton>

            <IconButton color="inherit">
              {" "}
              <Typography className={classes.title} variant="h6" noWrap>
                <Link to="contactanos" className={classes.typography}>
                  {" "}
                  <Mood />
                  Contáctanos
                </Link>
              </Typography>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
