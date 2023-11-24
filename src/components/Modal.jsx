import PropTypes from "prop-types";
import Cadeau from "./Cadeau";
const Modal = ({ isModal, handleModal, arrayCadeaux }) => {
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
      <div className="containerCadeaux">
        {arrayCadeaux.map((cadeau) => (
          <div key={cadeau.id} className="cadeau-container">
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
