import { Paper, useMediaQuery } from "@material-ui/core";

import useStyles from "./Styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)"); //Tamaño para dispositivos móviles
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      
    </div>
  );
};

export default Map;
