const {
  makeStyles,
  Container,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
} = require("@material-ui/core");
const { AvatarGroup } = require("@material-ui/lab");

const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
}));
const Rigthbar = ({ login, props }) => {
  const classes = userStyles();
  if (login) {
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup style={{ marginBottom: 20 }}>
          {" "}
          max={4}
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
          Histories
        </Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={4}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/star.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Container>
    );
  }
  return(
    <div>
      Hello!
    </div>
  );
};

export default Rigthbar;
