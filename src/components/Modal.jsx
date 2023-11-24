import { useLocation } from "react-router-dom";
import Cadeau from "./Cadeau";
import PropTypes from "prop-types";






const Modal = ({ isModal, handleModal, arrayCadeaux }) => {
  const { state } = useLocation();

  return (
    <div
      className={`containerModal ${
        isModal === true ? "openModal" : "closeModal"
      }`}
    >
      <div>
        <button className="close" onClick={handleModal}>
          close
        </button>
      </div>
      <div className="texteName">
      <p>Voici vos choix <strong>{state.texte} !</strong></p>
      </div>
      <div className="containerCadeaux">
        {arrayCadeaux.map((cadeau) => (
          <div key={cadeau.id} className="cadeauContainerModal">
            <Cadeau
              id={cadeau.id}
              Description={cadeau.Description}
              Category={cadeau.Category}
              Image={cadeau.Image}
            />
          </div>
        ))}
      </div>
      
      </div>

  );
};

Modal.propTypes = {
  isModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  arrayCadeaux: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Description: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setArrayCadeaux: PropTypes.func,
};

export default Modal;
