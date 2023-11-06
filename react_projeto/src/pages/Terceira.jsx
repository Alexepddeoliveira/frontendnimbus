import React from "react";
import Map from "../components/map.js"; 
import '../components/map.css';
import LinkPrimeiro from "../components/LinkPrimeira";
import LinkSegunda from "../components/LinkSegunda";

const Terceira = () => {
  return (
    <div>
      <h1>Mapa</h1>
      {/* Renderizar o componente de mapa */}
      <Map />
      <LinkPrimeiro /> <br />
      <LinkSegunda />
    </div>
  );
};

export default Terceira;
