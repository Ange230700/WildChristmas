import Cadeau from "./Cadeau";
import data from "../data.js";
import temporaryArray from "../services/temporaryArray.js";
import PropTypes from "prop-types";

function ListCadeaux({ id, Description, Category, Image }) {
  function handleClick() {
    temporaryArray.push({ id, Description, Category, Image });
  }

  return (
    <>
      <section className="category-section">
        <h2 className="category-title">Livres et films</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "Livres et films")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Cosmétiques</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "cosmetique")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Mode et accessoires</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "mode_accessoires")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Electronique</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "electronique")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Poupée</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "poupee")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Jouet</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "jouet")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">peluche</h2>
        <button className="cadeau-container">
          {data
            .filter((cadeau) => cadeau.Category === "peluche")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">Sports</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "sports")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              );
            })}
        </button>
      </section>
      <section className="category-section">
        <h2 className="category-title">18 +</h2>
        <button className="cadeau-container" onClick={handleClick()}>
          {data
            .filter((cadeau) => cadeau.Category === "18 +")
            .map((cadeau) => {
              return (
                <Cadeau
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              );
            })}
        </button>
      </section>
    </>
  );
}

ListCadeaux.propTypes = {
  id: PropTypes.number,
  Description: PropTypes.string,
  Category: PropTypes.string,
  Image: PropTypes.string,
};

export default ListCadeaux;
