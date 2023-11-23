import React, { useState, useEffect } from "react";
import Cadeau from "./Cadeau.jsx";
import temporaryArray from "../services/temporaryArray.js";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleClick = (cadeau) => {
    const updatedArray = temporaryArray.filter((item) => item.id !== cadeau.id);

    setWishlist(updatedArray);
  };

  const handleValidation = () => {
    // Logique de validation..
    console.log("Wishlist validée!", wishlist);
  };

  return (
    <>
      <div className="wishlist-container">
        <h2>Ma Wishlist</h2>
        {temporaryArray.map((cadeau) => (
          <div key={cadeau.id} className="cadeau-container">
            <Cadeau
              id={cadeau.id}
              Description={cadeau.Description}
              Category={cadeau.Category}
              Image={cadeau.Image}
            />
            <button onClick={() => handleClick(cadeau)}>
              Retirer de la Wishlist
            </button>
          </div>
        ))}
        <button className="bouton-valider" onClick={handleValidation}>
          Valider
        </button>
      </div>
    </>
  );
};

export default Wishlist;
