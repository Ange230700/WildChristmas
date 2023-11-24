import { useLocation } from "react-router-dom";
import Cadeau from "./Cadeau";





const Modal = ({ isModal, handleModal, arrayCadeaux }) => {
  const { state } = useLocation();
  return (
    <div
      className={`containerModal ${
        isModal === true ? "openModal" : "closeModal"
      }`}
    >
      <div>
        <button className="close" onClick={handleModal} >close</button>
      </div>
      <div className="texteName">
      <p>Voici vos choix <strong>{state.texte} !</strong></p>
      </div>
      </div>

  );
};

export default Modal;