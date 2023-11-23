import Cadeau from "./Cadeau";
import data from "../data.js";
import PropTypes from "prop-types";
import { set } from "immutable";

function ListCadeaux({ arrayCadeaux, setArrayCadeaux }) {
  function handleClick(e) {
    console.log(typeof setArrayCadeaux);
    setArrayCadeaux([...arrayCadeaux, e]);
  }

  return (
    <>
      <section className="category-section">
        <h2 className="category-title">Livres et films</h2>
        {arrayCadeaux
          .filter((cadeau) => cadeau.Category === "Livres et films")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Cosmétiques</h2>
        {data
          .filter((cadeau) => cadeau.Category === "cosmetique")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Mode et accessoires</h2>
        {data
          .filter((cadeau) => cadeau.Category === "mode_accessoires")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Electronique</h2>
        {data
          .filter((cadeau) => cadeau.Category === "electronique")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Poupée</h2>
        {data
          .filter((cadeau) => cadeau.Category === "poupee")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Jouet</h2>
        {data
          .filter((cadeau) => cadeau.Category === "jouet")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">peluche</h2>
        {data
          .filter((cadeau) => cadeau.Category === "peluche")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Sports</h2>
        {data
          .filter((cadeau) => cadeau.Category === "sports")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">18 +</h2>
        {data
          .filter((cadeau) => cadeau.Category === "18 +")
          .map((cadeau) => {
            return (
              <button
                key={cadeau.id}
                className="cadeau-container"
                onClick={() => handleClick(cadeau)}
              >
                <Cadeau
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                />
              </button>
            );
          })}
      </section>
    </>
  );
}

ListCadeaux.propTypes = {
  id: PropTypes.number,
  Description: PropTypes.string,
  Category: PropTypes.string,
  Image: PropTypes.string,
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

export default ListCadeaux;
