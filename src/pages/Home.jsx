import Wish from "../components/Wish";
import Modal from "../components/Modal";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
    const {state} = useLocation();
console.log(state);

  
  return (
    <div className="container">
      <p>{state.texte}</p>


    <div>
      <Wish />
      <Modal />
    </div>
  );
}
