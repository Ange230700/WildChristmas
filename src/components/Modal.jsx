import  Proptypes  from "prop-types";

const Modal = ({ isModal, handleModal }) => {
  return (
    <div
      className={`containerModal ${
        isModal === true ? "openModal" : "closeModal"
      }`}
    >
      <div>
        <button className="close" onClick={handleModal}>close</button>
      </div>
    </div>
  );
};
Modal.propTypes = {
    isModal: Proptypes.bool.isRequired,
    handleModal: Proptypes.func.isRequired,
  };

export default Modal;
