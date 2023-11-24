import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";

export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);
  const { state } = useLocation();
  const [limitMessage, setLimitMessage] = useState("");
  console.log(state);
  return (
    <div className="home">
      <div className="state">
        <p>
          Bienvenue <strong>{state.texte} !</strong>
        </p>
      </div>
      <div className="cadeau-wish">
        <div className="liste__cadeaux">
          <ListCadeaux
            arrayCadeaux={arrayCadeaux}
            setArrayCadeaux={setArrayCadeaux}
            setLimitMessage={setLimitMessage}
            limitMessage={limitMessage}
          />
        </div>
        <div className="wishlist">
          <WishList
            arrayCadeaux={arrayCadeaux}
            setArrayCadeaux={setArrayCadeaux}
            limitMessage={limitMessage}
            setLimitMessage={setLimitMessage}
          />
        </div>
      </div>
    </div>
  );
}
