const {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} = require("@material-ui/core");

const userStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
const Posts = () => {
  const classes = userStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/hvHgj8uSGaDazYhL_zLH2HW8ntL-kEfpIF7WQugFQUo/1579231719/public/styles/322x405/public/media/int_files/1013320-elephant-tanzania.jpg?h=e6409126&itok=13ikBq1Q"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {" "}
            My First POST{" "}
          </Typography>
          <Typography variant="body2">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
            quibusdam saepe quam laboriosam aliquam, atque tempora reprehenderit
            fugiat explicabo magni itaque perferendis officiis eius odit
            temporibus. Non, maiores officia!{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;
