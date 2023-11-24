import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";


export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);
  const { state } = useLocation();
  const [sleigh, setSleigh] = useState(true);
  console.log(state);
  return (

    <div className="home">
      <div className="state">
        <p>
          Bienvenue <strong>{state.texte} !</strong>
        </p>
      </div>
      <div className="cadeau-wish">
        <div className="list__cadeaux">
          <ListCadeaux
            arrayCadeaux={arrayCadeaux}
            setArrayCadeaux={setArrayCadeaux}
            setSleigh={setSleigh}
          />
        </div>
        <div className="wishlist">
          <WishList
            arrayCadeaux={arrayCadeaux}
            setArrayCadeaux={setArrayCadeaux}
            sleigh={sleigh}
          />
        </div>
      </div>
    </div>
  );
}
