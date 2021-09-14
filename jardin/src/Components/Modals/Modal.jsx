import { Close } from "@material-ui/icons";
import "./Modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"} `}>
      <div className="modal-container">
        
        <button className="modal-close"  style={{position:"relative", marginLeft:450, backgroundColor:"#ffff"}} onClick={closeModal}><Close/> </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
