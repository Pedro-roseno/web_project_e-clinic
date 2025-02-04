import React from "react";
import "./FormCadastro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faArrowLeft, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 

export const FormCadastro = () => {
  return (
    <div className="cadastro-container">
      <nav className="cadastro-navbar">
        <Link to="/" className="nav-icon">Home <FontAwesomeIcon icon={faHome} /></Link>
      </nav>

      <div className="cadastro-box">
        <div className="cadastro-form">
          <h2>Cadastro</h2>
          <form className="form-grid">
            <div className="input-group">
              <FontAwesomeIcon icon={faIdCard} />
              <input type="text" placeholder="CPF / CRM / CNPJ" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Nome Completo" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
            <div className="input-group">
              <label>Gênero:</label>
              <select required>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
          <Link to="/formLogin" className="toggle-btn">Já tem conta? Faça login</Link>
        </div>
      </div>
    </div>
  );
};