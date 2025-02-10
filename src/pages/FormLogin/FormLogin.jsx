import React, { useState, useEffect } from "react";
import "./FormLogin.css";
import pacienteService from "../../services/Paciente.service.ts";
import AuthPacienteService from "../../services/AuthPaciente.service.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faIdCard, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../utils/Util.js";

export const FormLogin = () => {
  const { state } = useLocation();
  const [idPaciente, setIdPaciente] = useState();
  const history = useNavigate()

  useEffect(() => {
    if (state != null && state.id != null) {
      pacienteService.getById(state.id).then((response) => {
        setIdPaciente(response.data.id);
        setCpf(response.data.cpf);
        setSenha(response.data.senha);
      });
    }
  }, [state]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const  Login = async (event) => {
    event.preventDefault();

    let authData = {
      username,
      password,
    };

    try {
      const response = await AuthPacienteService.login(authData);
      notifySuccess("Usuário autenticado com sucesso!", response);
      localStorage.setItem("cpf", response.username)
      history('/pacienteViews')
      // Aqui você pode redirecionar o usuário ou atualizar o estado
    } catch (err) {
      setError("Falha ao autenticar: " + err.message);
      notifyError("Falha ao autenticar: " + err.message);
    }
    
  };

  return (
    <div className="login-container">
      <nav className="login-navbar">
        <Link to="/" className="nav-icon">
          Home <FontAwesomeIcon icon={faHome} />
        </Link>
      </nav>

      <div className="login-box">
        <div className="login-form">
          <h2>Login</h2>
          <form className="form-grid">
            <div className="input-group">
              <FontAwesomeIcon icon={faIdCard} />
              <input
                value={username}
                type="text"
                placeholder="CPF"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                value={password}
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={(event) => Login(event)} type="submit">
              Entrar
            </button>
          </form>
          <Link to="/formCadastro" className="toggle-btn">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
};
