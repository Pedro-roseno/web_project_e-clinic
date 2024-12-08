import { useState } from "react";
import "./app.css";
import logo from "../../assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main">
        <div id="navbar_area">
          <section id="navbar_section">
            <nav id="nav">
              <img src="" alt="" />
              <h1>eClinic+</h1>
            </nav>
          </section>
        </div>

        <div id="content_area">
          <div id="content_section_left">
            <div id="image_section">
              <img src={logo} alt="" id="logo" />
            </div>
            <h1>Recuperar Senha</h1>
            <section className="inputs_section">
              <input
                className="input_area"
                required
                type="text"
                placeholder="Digite sua nova senha"
              />

              <input
                className="input_area"
                required
                type="text"
                placeholder="Comfirme sua nova senha"
              />
            </section>
            <div id="button_area">
              <button id="form_button">Alterar senha</button>
            </div>
          </div>
          <div id="content_section_rigth">
            <div id="password_advice_box">
              <p id="p_area">
                Para sua segurança, crie uma senha com: Pelo menos 8 caracteres.
              </p>
              <ul>
                <li>Pelo menos 8 caracteres.</li>
                <li>Uma letra maiúscula e uma minúscula</li>
                <li>Um número.</li>
                <li>Um caractere especial como @ ou #.</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer_area">
          <ul>
            <h1>eClinic+</h1>
            <li className="footer_itens">
              {" "}
              <a href="#sobre a eClinic+ ">sobre a eClinic+ </a>
            </li>
          </ul>
          <ul>
            <h2>Contato e Suporte</h2>
            <li className="footer_itens">
              <a href="#eclinic1001@gmail.com">eclinic1001@gmail.com </a>
            </li>
            <li className="footer_itens">
              <a href="#(81) 9000-0000 ">(81) 9000-0000 </a>
            </li>
          </ul>
          <ul>
            <h2>Links Úteis</h2>

            <li className="footer_itens">
              <a href="#Termos de uso">Termos de uso</a>
            </li>
            <li className="footer_itens">
              <a href="#Politica e privacidade">Politica e privacidade</a>
            </li>
            <li className="footer_itens">
              {" "}
              <a href="#Ajuda ">Ajuda </a>
            </li>
          </ul>
          <ul>
            <h2>Siga-nos nas nossas redes sociais</h2>
            <li className="footer_itens">
              <a href="#eClinic">eClinic.c</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
