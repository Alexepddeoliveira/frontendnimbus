import React from "react";
import LinkPrimeiro from "../components/LinkPrimeira";
import LinkSegunda from "../components/LinkSegunda";
import LinkTerceira from "../components/LinkTerceira";
import logo from "./nimbus-logo1.png";
import Guilherme from "../imagens/Guilherme.jpg"
import Bernardo from "../imagens/Bernardo.jpg"
import Maria from "../imagens/Maria.jpg"
import Alex from "../imagens/Alex.jpg"

const Quarta = () => {
  return (<div>
    
        <header>
            <div id="barra_escolhas">
                <img src={logo}/>   
                <LinkPrimeiro />
                <LinkSegunda />
                <LinkTerceira />
            </div>
        </header>

        <h1 id="nome_pag">Sobre nós</h1>

        <h1 class="main-title">Integrantes da equipe</h1>
        <div class="list-wrapper">
            <ul class="list">
                <li class="list-item">
                    <div class="list-item__image">
                        <img src={Alex}></img>
                    </div>
                    <div class="list-item__content">
                        <p class="list-item__name">Alex Euzébio</p>
                        <p class="list-item__curso">Engenharia da computação</p>
                        <p class="list-item__email">Alexpddeoliveira</p>
                    </div>
                </li>

                <li class="list-item">
                    <div class="list-item__image">
                        <img src={Bernardo}></img>
                    </div>
                    <div class="list-item__content">
                        <p class="list-item__name">Bernardo Mascare</p>
                        <p class="list-item__curso">Engenharia da computação</p>
                        <p class="list-item__email">bernardinho123</p>
                    </div>
                </li>

                <li class="list-item">
                    <div class="list-item__image">
                        <img src={Guilherme}></img>
                    </div>
                    <div class="list-item__content">
                        <p class="list-item__name">Guilherme Duran</p>
                        <p class="list-item__curso">Ciência de dados e IA</p>
                        <p class="list-item__email">GuiDDuran</p>
                    </div>
                </li>

                <li class="list-item">
                    <div class="list-item__image">
                        <img src={Maria}></img>
                    </div>
                    <div class="list-item__content">
                        <p class="list-item__name">Maria Castello</p>
                        <p class="list-item__curso">Ciência de dados e IA</p>
                        <p class="list-item__email">mariacastello</p>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  );
};

export default Quarta;