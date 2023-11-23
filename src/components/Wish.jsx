import { useState } from "react";
import Modal from "../components/Modal";

export default function Wish() {
  const [isModal, setIsModal] = useState(false);
  function handleModal() {
    if (isModal) {
      setIsModal((current) => !current);
    } else {
      setIsModal((current) => !current);
    }
  }
  return (
    <div>
      <div className="containerButton">
        <button type="button" className="validButton" onClick={handleModal}>
          Validé
        </button>
        <Modal handleModal={() => handleModal()} isModal={isModal} />
      </div>
    </div>
  );
}
