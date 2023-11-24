import { useState } from "react";
import PropTypes from "prop-types";
import Cadeau from "./Cadeau";
import Modal from "./Modal";

const Wishlist = ({ arrayCadeaux, setArrayCadeaux }) => {
  const [isModal, setIsModal] = useState(false);
  function handleModal() {
    console.log("test");
    if (isModal) {
      setIsModal((current) => !current);
    } else {
      setIsModal((current) => !current);
    }
  }

  function handleClick(cadeau) {
    console.log(cadeau);
    console.log(arrayCadeaux);
    const updatedArray = arrayCadeaux.filter(
      (cadeauInArray) => cadeauInArray.id !== cadeau.id
    );
    setArrayCadeaux(updatedArray);
  }

  return (
    <>
    <div className="neige-wish">
          <img src="/neige2.png" /></div>
      <div className="wishlist-container">
        <h2>MA WISHLIST</h2>
        <div className="cadeaux">
        {arrayCadeaux.map((cadeau) => (
          <button key={cadeau.id} onClick={() => handleClick(cadeau)} className="button-wish">
            <div className="cadeau-container">
              <Cadeau
                id={cadeau.id}
                Description={cadeau.Description}
                Category={cadeau.Category}
                Image={cadeau.Image}
              />
            </div>
          </button>
        ))}
        </div>
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
  setArrayCadeaux: PropTypes.func,
};

export default Wishlist;