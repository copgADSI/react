import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

const FriendCard = ({ name, avatar, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Este component contiene la información de cada amigo
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div onClick={handleClick}>
        <ListItem button>
          <Avatar alt="Profile Picture" src={avatar} />
          <ListItemText primary={name} />
        </ListItem>
      </div>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Link to={`Uid?${id}?Name=${name}`}>View Profile</Link>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>Open Chat</MenuItem>
      </Menu>
    </>
  );
};
export default FriendCard;
