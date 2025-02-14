import { useState } from "react";
import axios from "axios";
import "./FormRecuperacao.css";
import "../../styles/global.css";
import logo from "../../assets/logo.png";
import { Footer } from "../../components/Footer/Footer";

function RecSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("medico"); // Pode ser "medico" ou "paciente"

  // Função de validação de senha
  function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return regex.test(senha);
  }

  async function salvar() {
    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!validarSenha(novaSenha)) {
      alert(
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial (@, #, etc.)."
      );
      return;
    }

    const request = { senha: novaSenha };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/${tipoUsuario}s/recuperar-senha`,
        request
      );
      alert("Senha alterada com sucesso!");
    } catch (error) {
      console.error("Erro ao alterar a senha:", error);
      alert("Erro ao alterar a senha. Tente novamente.");
    }
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
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />

              <input
                className="input_area"
                required
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />

              <select
                className="input_area"
                value={tipoUsuario}
                onChange={(e) => setTipoUsuario(e.target.value)}
              >
                <option value="medico">Médico</option>
                <option value="paciente">Paciente</option>
              </select>
            </section>

            <div id="button_area">
              <button id="form_button" onClick={salvar}>
                Alterar senha
              </button>
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
