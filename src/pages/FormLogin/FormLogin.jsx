import React from "react";
import "./FormLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 

export const FormLogin = () => {
  return (
    <div className="login-container">
      <nav className="login-navbar">
        <Link to="/" className="nav-icon">Home <FontAwesomeIcon icon={faHome} /></Link>
      </nav>

      <div className="login-box">
        <div className="login-form">
          <h2>Login</h2>
          <form className="form-grid">
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
            <button type="submit">Entrar</button>
          </form>
          <Link to="/formCadastro" className="toggle-btn">Criar conta</Link>
        </div>
      </div>
    </div>
  );
};


