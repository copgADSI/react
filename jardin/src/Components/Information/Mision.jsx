import { makeStyles, Typography } from "@material-ui/core";
import imgMision from "../../Images/girl.png";
import imgVision from "../../Images/img5.jpg";
import "./Style.css";
const useNavbarStyles = makeStyles((theme) => ({
  grow: {
      flexGrow: 1,
  },
  menuButton: {
      marginRight: theme.spacing(2),
  },
  title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
          display: "block",
      },
      fontSize: 16
  },

  searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
  },
  inputRoot: {
      color: "inherit",
  },
  inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
          width: "20ch",
      },
  },
  sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
          display: "flex",
      },
  },
  sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
          display: "none",
      },
  },
  typography: {
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      textDecoration: "none",
      display: "flex",
      color: "#999",
      justifyContent: "center",
      fontSize: 19,
      padding: "8px 0px 8px 16px",
      heigh: 60,
      cursor: "pointer"
  },
}));
const Mision = () => {
  const classes = useNavbarStyles;

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <img src={imgMision} alt="" width={200} height={300} />
          <h3>Misión</h3>
          <p  >
            Ser reconocida por la integridad de nuestra propuesta educativa,
            enfocada en el desarrollo de competencias acorde con el proyecto de
            vida de nuestros niño(s) y familias. Cabiar el mundo de las nuevas
            generaciones y sus familias, siendo referente en estándares de
            calidad y contribuyendo a la construcción de una sociendad en paz,
            próspera y equitativa
          </p>
        </div>
       { <div className="card" style={{height:20}}>
         
          <Typography className={classes.typography}>Bienvenidos a Jardín Infantil Pequeños Ponnys!</Typography>
        </div>}

        <div className="card2">
          <img src={imgVision} alt="" />
          <h3>Visión</h3>
          <p>
            Proporcionar a los niños desde el primer año hasta los 5 años,
            gratas y enriquecedoras experiencias que lo lleven a disfrutar de
            una infancia feliz y recordar su paso por este hogar como una etapa
            inolvidable de sus vidas. A su vez comentar las bases de su
            crecimiento personal e intelectual; imprimiendo un sello
            característico y una huella indeleble basada en los principios,
            garantizando un ingreso exitoso al sistema escolar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mision;
