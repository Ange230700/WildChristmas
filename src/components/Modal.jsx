const Modal = ({ isModal }) => {
  return (
    <div
      className={`containerModal ${
        isModal === true ? "openModal" : "closeModal"
      }`}
    >
      <div>
        <button className="close">close</button>
      </div>
    </div>
  );
};

export default Modal;
