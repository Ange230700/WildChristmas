

// import ListCadeaux from "../components/ListCadeaux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";
import Modal from "../components/Modal";


export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);
  const { state } = useLocation();
  console.log(state);
  return (

    <div className="home">
      <p>{state.texte}</p>
      <div className="list__cadeaux">
        <ListCadeaux
          arrayCadeaux={arrayCadeaux}
          setArrayCadeaux={setArrayCadeaux}
        />
      </div>
      <div className="wishlist">
        <WishList arrayCadeaux={arrayCadeaux} />
      </div>
      <Modal />
    </div>
  );
}
