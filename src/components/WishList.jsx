import { useState } from "react";
import PropTypes from "prop-types";
import Cadeau from "./Cadeau";
import Modal from "./Modal";

const Wishlist = ({ arrayCadeaux, setArrayCadeaux, sleigh }) => {
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
    <div className={`sleigh ${sleigh ? "leftMove" : "rightMove"}`}>
      <img src="/images/sleigh.webp" />
    </div>
      <div className="neige-wish">
        <img src="/neige.png" />
      </div>
      <div className="wishlist-container">
        <h2>Ma Wishlist</h2>
        {arrayCadeaux.length < 6 &&
          arrayCadeaux.map((cadeau) => (
            <button key={cadeau.id} onClick={() => handleClick(cadeau)}>
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
        {arrayCadeaux.length > 0 &&
          arrayCadeaux.length >= 6 &&
          arrayCadeaux.pop() && <p>Non non non, 5 cadeaux max !</p>}
        <div className="containerButton">
          <button
            type="button"
            className="validButton"
            onClick={() => handleModal()}
          >
            Validé
          </button>
          <Modal
            handleModal={handleModal}
            isModal={isModal}
            arrayCadeaux={arrayCadeaux}
          />
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
  isModal: PropTypes.bool.isRequired,
  setIsModal: PropTypes.func.isRequired,
};

export default Wishlist;
