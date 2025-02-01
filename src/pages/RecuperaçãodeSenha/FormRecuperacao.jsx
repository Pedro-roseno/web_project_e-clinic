import { useState } from "react";
import axios from "axios";
import "./Recuperacao.css";
import "../../styles/global.css";
import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer/Footer";

function RecSenha() {
  const [count, setCount] = useState(0);


  const [novasenha, setNovaSenha] = useState();
  const [cormfirmarsenha, setComfirmarSenha] = useState();

  function salvar() {

		let recsenhaRequest = {
      novasenha:  novasenha,
      cormfirmarsenha: cormfirmarsenha
		   
		}
	
		axios.post("http://localhost:8080/api/medicos", recsenhaRequest)
		.then((response) => {
		     console.log('Senha alterada com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao alterar a senha.')
		})
	
  axios.post("http://localhost:8080/api/pacientes", recsenhaRequest)
  .then((response) => {
       console.log('Senha alterada com sucesso.')
  })
  .catch((error) => {
       console.log('Erro ao alterar a senha.')
  })
}

  return (
    <>
      <div id="main">
        <div id="navbar_area">
          <section id="navbar_section">
            <nav id="nav">
              <h1>eClinic+</h1>
            </nav>
          </section>
        </div>
        <div id="content_area">
          <div id="content_section_left">
            <div id="image_section">
              <img src={logo} alt="Logo eClinic+" id="logo" />
            </div>
            <h1>Recuperar Senha</h1>
            <section className="inputs_section">
              <input
                className="input_area"
                required
                type="password"
                placeholder="Digite sua nova senha"
                value={novasenha}
			          onChange={e => setNovaSenha(e.target.value)}

              />

              <input
                className="input_area"
                required
                type="password"
                placeholder="Confirme sua nova senha"
                value={cormfirmarsenha}
			          onChange={e => setComfirmarSenha(e.target.value)}
              />

            </section>
            <div id="button_area">
              <button id="form_button" onClick={() => salvar()}>Alterar senha</button>
            </div>

          </div>
          <div id="content_section_rigth1">
            <div id="password_advice_box1">
              <p id="p_area1">Para sua segurança, crie uma senha com:</p>
              <ul>
                <li>Pelo menos 8 caracteres.</li>
                <li>Uma letra maiúscula e uma minúscula.</li>
                <li>Um número.</li>
                <li>Um caractere especial como @ ou #.</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecSenha;
