import React from "react";
import Map from "../components/map"; 
import '../components/map.css';
import LinkPrimeiro from "../components/LinkPrimeira";
import LinkSegunda from "../components/LinkSegunda";

const Terceira = () => {
  return (<div>
         <header>Mapa</header>
         <br/>
         <div style={{display:"flex"}}>
          <LinkPrimeiro /> <br />
          <LinkSegunda />
         </div>
         {/* Renderizar o componente de mapa */}
         <Map />
    </div>
  );
};

export default Terceira;
