import Modal from "./Modal";
import { useModal } from "../../Hooks/useModal";
import { Link } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import useNavbarStyles from "../Navbar/Styles";

import "../Navbar/Navbar.css";
import Services from "./Services";

const Modals = () => {
  const classes = useNavbarStyles();
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <div style={{width:"100%"}}>
      <Link to="servicios" onClick={openModal1}  className={classes.typography}>  <AssignmentIcon />  Servicios</Link>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h4>Servicios</h4>
          <Services/>
      </Modal>
    </div>
  );
};

export default Modals;
