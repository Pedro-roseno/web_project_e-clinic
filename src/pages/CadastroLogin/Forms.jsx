import React, { useState } from "react";
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faArrowLeft, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="forms-container">
      <nav className="forms-navbar">
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
      </nav>


      <div className="forms-box">
        <div className="forms-form">
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>
          <form className="form-grid">
            {!isLogin && (
              <>
                <div className="input-group">
                  <FontAwesomeIcon icon={faIdCard} />
                  <input type="text" placeholder="CPF / CRM / CNPJ" required />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="text" placeholder="Nome Completo" required />
                </div>
              </>
            )}
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
            {!isLogin && (
              <div className="input-group">
                <label>Gênero:</label>
                <select required>
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                  <option value="nao-informar">Prefiro não informar</option>
                </select>
              </div>
            )}
            <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
          </form>
          <button className="toggle-btn" onClick={toggleForm}>
            {isLogin ? "Criar conta" : "Já tem conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
