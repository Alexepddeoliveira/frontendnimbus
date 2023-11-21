import React from "react";
import Map from "../components/map"; 
import '../components/map.css';
import LinkPrimeiro from "../components/LinkPrimeira";
import LinkSegunda from "../components/LinkSegunda";
import LinkQuarta from "../components/LinkQuarta";


const Terceira = () => {
  return (<div>

         <header>
            <div id="barra_escolhas">
              <LinkPrimeiro />
              <LinkSegunda />
              <LinkQuarta />
            </div>
         </header>

         <h1 id="nome_pag">Histórico de Dados - Mapa</h1>

         {/* Renderizar o componente de mapa */}
         <Map />
    </div>
  );
};

export default Terceira;
