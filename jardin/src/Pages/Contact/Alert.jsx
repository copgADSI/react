import Alert from "@material-ui/lab/Alert";

const AlertMessage = ({...props }) => {
    console.log(props);
  if (props.response) {
    return (
      <Alert severity="success">This is an error alert — check it out!</Alert>
    );
  } else {
    return (
      <Alert severity="error">This is an error alert — check it out!</Alert>
    );
  }
};
export default AlertMessage;