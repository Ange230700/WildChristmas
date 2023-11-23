import React, { useState, useEffect } from "react";
import ListCadeaux from "./ListCadeaux.jsx";
import temporaryArray from "../services/temporaryArray.js";

const Wishlist = ({ id, Description, Category, Image }) => {
  const [wishlist, setWishlist] = useState([]);

  function handleClick() {
    temporaryArray.remove({ id, Description, Category, Image });
  }

  const handleValidation = () => {
    // Logique de validation..
    console.log("Wishlist validée!", wishlist);
  };

  return (
    <>
      <div className="wishlist-container">
        <h2>Ma Wishlist</h2>
        {temporaryArray.map((cadeau) => {
          return (
            <button
              key={cadeau.id}
              className="cadeau-container"
              onClick={handleClick()}
            >
              <Cadeau
                id={cadeau.id}
                Description={cadeau.Description}
                Category={cadeau.Category}
                Image={cadeau.Image}
                Onclick={handleClick}
              />
            </button>
          );
        })}
        <button className="bouton-valider" onClick={handleValidation}>
          Valider
        </button>
      </div>
    </>
  );
};

export default Wishlist;
