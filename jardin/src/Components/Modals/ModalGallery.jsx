import Modal from "./Modal";
import { useModal } from "../../Hooks/useModal";
import { Link } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "../Navbar/Navbar.css";
import useNavbarStyles from "../Navbar/Styles";
import GallerryP from "./Gallery";



const ModalsGallery = () => {
  
  const classes = useNavbarStyles();
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <div style={{width:"100%"}}>
      <Link to="servicios" onClick={openModal1}  className={classes.typography}>   <PhotoCameraIcon />  Galería</Link>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h4>Galería de fotos</h4>
          <GallerryP/>
      </Modal>
    </div>
  );
};

export default ModalsGallery;
