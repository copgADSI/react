import React from "react";
import Grid from "@material-ui/core/Grid";
import messages from "./Messages";
import { Container, Typography } from "@material-ui/core";
import FriendCard from "./FriendCard";
import useStyles from "./Styles";
import { data, friends_list } from "./GetFriends";

import { useEffect } from "react";

const Friends = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  useEffect(() => {
    console.log(friends_list);
  }, []);
  return (
    <Container className={classes.container}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {data.map(({ ...doc }) =>
              [...doc["friends"]].map(
                ({ dateAdded, uid: id, avatar, name }) => (
                  <Grid key={id} item>
                    <FriendCard id={id} name={name} avatar={avatar} />
                  </Grid>
                )
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Friends;

/* 
{data.map(({ ...doc }) => console.log(...doc["friends"]))} */
