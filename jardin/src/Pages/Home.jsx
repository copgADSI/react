import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className="cComponent" >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi velit facilis, praesentium magni, saepe fugit quod modi non quis incidunt nobis? Omnis id natus et debitis magnam dolorum voluptatum labore.
    </div>
  );
}
