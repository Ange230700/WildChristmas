import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";
import Typewriter from "typewriter-effect";


export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);
  const { state } = useLocation();
  const [sleigh, setSleigh] = useState(true);
  console.log(state);
  return (
<div className="home">
      <div className="state">
        <p>
          Bienvenue </p>
          {/* <strong>{state.texte}</strong> ! */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(100)
              .typeString(
                ` <strong>${state.texte}</strong><span style="color: #F1F1F1"> !</span>`
              )
                .start();
            }}
          />
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
