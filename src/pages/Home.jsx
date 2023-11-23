import { useState } from "react";
import ListCadeaux from "../components/ListCadeaux";
import WishList from "../components/WishList";

export default function Home() {
  const [arrayCadeaux, setArrayCadeaux] = useState([]);

  
  return (
    <>
      <ListCadeaux
        arrayCadeaux={arrayCadeaux}
        setArrayCadeaux={setArrayCadeaux}
      />
      <WishList arrayCadeaux={arrayCadeaux} />
    </>
  );
}
