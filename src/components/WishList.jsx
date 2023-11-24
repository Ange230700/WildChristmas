import { useState } from "react";
import PropTypes from "prop-types";
import Cadeau from "./Cadeau";
import Modal from "./Modal";

const Wishlist = ({
  arrayCadeaux,
  setArrayCadeaux,
  limitMessage,
  setLimitMessage,
  sleigh,
}) => {
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
    setLimitMessage("");
  }

  return (
    <>
      <div className={`sleigh ${sleigh ? "leftMove" : "rightMove"}`}>
        <img src="/images/sleigh.webp" />
      </div>
      <div className="neige-wish">
        <img src="/neige2.png" />
      </div>
      <div className="wishlist-container">
        <h2>Ma Wishlist</h2>
        {limitMessage && <p className="message">{limitMessage}</p>}
        <div className="cadeaux">
          {arrayCadeaux.length < 6 &&
            arrayCadeaux.map((cadeau) => (
              <button
                key={cadeau.id}
                onClick={() => handleClick(cadeau)}
                className="button-wish"
              >
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
        <button
          type="button"
          className="validButton"
          onClick={() => handleModal()}
        >
          Validé
        </button>

        <Modal
          handleModal={() => handleModal()}
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
  limitMessage: PropTypes.string.isRequired,
  setLimitMessage: PropTypes.func.isRequired,
  sleigh: PropTypes.bool.isRequired,
};

export default Wishlist;
