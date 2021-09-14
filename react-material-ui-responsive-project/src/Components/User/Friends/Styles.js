import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    container: {
        paddingTop: theme.spacing(20),
    },
}));

export default useStyles; //Estilos globales para los componentes de Friends