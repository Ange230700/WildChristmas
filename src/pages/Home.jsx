import { useState } from "react";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";

export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);

  return (
    <div className="home">
      <div className="list__cadeaux">
        <ListCadeaux
          arrayCadeaux={arrayCadeaux}
          setArrayCadeaux={setArrayCadeaux}
        />
      </div>
      <div className="wishlist">
        <WishList arrayCadeaux={arrayCadeaux} />
      </div>
    </div>
  );
}
