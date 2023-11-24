const Modal = ({ isModal, handleModal }) => {
  return (
    <div
      className={`containerModal ${
        isModal === true ? "openModal" : "closeModal"
      }`}
    >
      <div>
        <button className="close" onClick={handleModal} >close</button>
      </div>
    </div>
  );
};

export default Modal;