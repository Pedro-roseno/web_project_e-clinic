import "../../styles/global.css";
import React from "react";
import { Container, Menu, Input, Button, Icon } from "semantic-ui-react";
import "./Login.css";


const MenuLayout = () => (

  <div id="principal">
  
  <div id="navbar_area2">
          <section id="navbar_section2">
            <nav id="nav2">
              <h1>eClinic+</h1>
              <ul id="ul-area">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
        </ul> 
            </nav>
          </section>
        </div>
        <div id="content_section_rigth">
        <div id="password_advice_box"> 
        <p id="p_area">Bem-vindo ao eClinic+</p>
        <p id="p_area2">Estamos felizes por você escolher nossa plataforma para cuidar da sua saúde. Para começar, você pode selecionar uma das opções abaixo:</p>
       <ul id="ul-area2">
        <li>1. Cadastrar-se</li>
        <li>2. Fazer login</li>
        <li>3. Login de Administrador</li>
        <li>4. Falar com o Suporte</li>
        <li>5. Recuperar senha</li>
        <p id="p_area2">Assim que você escolher uma opção, podemos dar continuidade à sua jornada conosco. Qual opção você gostaria de seguir?</p>
       <p id="p_area2">Equipe eClinic+</p>
       </ul>
        </div>
      </div>
    </div>
        
 
    
);
export default MenuLayout;
