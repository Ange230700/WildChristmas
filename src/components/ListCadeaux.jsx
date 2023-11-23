import Cadeaux from "./Cadeaux.jsx";
import data from "../data.json";
import PropTypes from "prop-types";

function ListCadeaux({ id, Description, Category, Image }) {
  return (
    <>
      <section className="category-section">
        <h2 className="category-title">Livres et films</h2>
        {data
          .filter((cadeau) => cadeau.Category === "Livres et films")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Cosmétiques</h2>
        {data
          .filter((cadeau) => cadeau.Category === "cosmetique")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Mode et accessoires</h2>
        {data
          .filter((cadeau) => cadeau.Category === "mode_accessoires")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Electronique</h2>
        {data
          .filter((cadeau) => cadeau.Category === "electronique")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Poupée</h2>
        {data
          .filter((cadeau) => cadeau.Category === "poupee")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Jouet</h2>
        {data
          .filter((cadeau) => cadeau.Category === "jouet")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Mode et beauté</h2>
        {data
          .filter((cadeau) => cadeau.Category === "Mode et beauté")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
            );
          })}
      </section>
      <section className="category-section">
        <h2 className="category-title">Divers</h2>
        {data
          .filter((cadeau) => cadeau.Category === "Divers")
          .map((cadeau) => {
            return (
              <div className="cadeau-container">
                <Cadeaux
                  key={cadeau.id}
                  id={cadeau.id}
                  Description={cadeau.Description}
                  Category={cadeau.Category}
                  Image={cadeau.Image}
                  Onclick={handleClick}
                />
              </div>
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
};

export default ListCadeaux;
