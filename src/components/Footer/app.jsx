// Footer.js
import React from "react";
import "./app.css";

const Footer = () => {
  return (
    <div id="footer_area">
      <ul>
        <h1>eClinic+</h1>
        <li className="footer_itens">
          <a href="#sobre a eClinic+">Sobre a eClinic+</a>
        </li>
      </ul>
      <ul>
        <h2>Contato e Suporte</h2>
        <li className="footer_itens">
          <a href="mailto:eclinic1001@gmail.com">eclinic1001@gmail.com</a>
        </li>
        <li className="footer_itens">
          <a href="tel:+5581900000000">(81) 9000-0000</a>
        </li>
      </ul>
      <ul>
        <h2>Links Úteis</h2>
        <li className="footer_itens">
          <a href="#Termos de uso">Termos de uso</a>
        </li>
        <li className="footer_itens">
          <a href="#Politica e privacidade">Política e Privacidade</a>
        </li>
        <li className="footer_itens">
          <a href="#Ajuda">Ajuda</a>
        </li>
      </ul>
      <ul>
        <h2>Siga-nos nas nossas redes sociais</h2>
        <li className="footer_itens">
          <a href="#eClinic">eClinic.c</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
