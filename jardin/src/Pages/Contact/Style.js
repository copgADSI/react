import { makeStyles } from "@material-ui/core/styles";

const useContactStyles = makeStyles((theme) => ({
    root: {
        "& > *": {

            margin: theme.spacing(3),
            width: "25ch",
        },
    },
    map_container: {
        height: "400px",
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default useContactStyles;