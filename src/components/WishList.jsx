import { useState } from "react";
import PropTypes from "prop-types";
import Cadeau from "./Cadeau";
import Modal from "./Modal";

const Wishlist = ({ arrayCadeaux }) => {
  const [isModal, setIsModal] = useState(false);
  function handleModal() {
    if (isModal) {
      setIsModal((current) => !current);
    } else {
      setIsModal((current) => !current);
    }
  }

  function handleClick() {
    
  }

  return (
    <>
      <div className="wishlist-container">
        <h2>Ma Wishlist</h2>
        {arrayCadeaux.map((cadeau) => (
          <div key={cadeau.id} className="cadeau-container">
            <Cadeau
              id={cadeau.id}
              Description={cadeau.Description}
              Category={cadeau.Category}
              Image={cadeau.Image}
            />
            <button>Retirer de la Wishlist</button>
          </div>
        ))}
        <div className="containerButton">
          <button type="button" className="validButton" onClick={handleModal}>
            Validé
          </button>
          <Modal handleModal={() => handleModal()} isModal={isModal} />
        </div>
      </div>
    </>
  );
};

Wishlist.propTypes = {
  arrayCadeaux: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Description: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Wishlist;
