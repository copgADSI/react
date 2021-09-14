const { makeStyles, Container } = require("@material-ui/core");
const { default: Posts } = require("./Posts");

const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const Feed = () => {
  const classes = userStyles();
  return (
    <Container className={classes.container}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      
    </Container>
  );
};

export default Feed;
