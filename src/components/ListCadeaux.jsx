import Cadeau from "./Cadeau";
import data from "../data.js";
import PropTypes from "prop-types";

function ListCadeaux({ arrayCadeaux, setArrayCadeaux, setSleigh }) {
  function handleClick(e) {
    console.log(typeof setArrayCadeaux);
    setArrayCadeaux([...arrayCadeaux, e]);
    setSleigh((current) => !current);
  }

  return (
    <div className="liste_cadeaux">
      <section className="category-section">
        <h2 className="category-title">Livres et films</h2>
        <div className="bloc_cadeaux">
          {data
            .filter((cadeau) => cadeau.Category === "livres")
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">Cosmétiques</h2>
        <div className="bloc_cadeaux">
          {data
            .filter((cadeau) => cadeau.Category === "cosmetiques")
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">Mode et accessoires</h2>
        <div className="bloc_cadeaux">
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">Electronique</h2>
        <div className="bloc_cadeaux">
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">Poupée, jouet et peluche</h2>
        <div className="bloc_cadeaux">
          {data
            .filter((cadeau) => cadeau.Category === "poupée_jouet_peluche")
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">Sports</h2>
        <div className="bloc_cadeaux">
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
        </div>
      </section>
      <section className="category-section">
        <h2 className="category-title">18 +</h2>
        <div className="bloc_cadeaux">
          {data
            .filter((cadeau) => cadeau.Category === "18ans")
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
        </div>
      </section>
    </div>
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
