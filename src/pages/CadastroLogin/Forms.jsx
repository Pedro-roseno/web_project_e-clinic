import React, { useState, useEffect } from "react";
import pacienteService from "../../services/Paciente.service.ts";
import AuthPacienteService from "../../services/AuthPaciente.service.ts";
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faUser,
  faEnvelope,
  faLock,
  faArrowLeft,
  faHome,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  const { state } = useLocation();
  const [idPaciente, setIdPaciente] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      pacienteService.getById(state.id).then((response) => {
        setIdPaciente(response.data.id);
        setNomeCompleto(response.data.nomeCompleto);
        setCpf(response.data.cpf);
        setEmail(response.data.email);
        setDataNascimento(formatarData(response.data.dataNascimento));
        setEnderecoCidade(response.data.enderecoCidade);
        setEnderecoUf(response.data.enderecoUf);
        setSenha(response.data.senha);
      });
    }
  }, [state]);

  function formatarData(dataParam) {
    if (dataParam === null || dataParam === "" || dataParam === undefined) {
      return "";
    }

    let arrayData = dataParam.split("-");
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  }

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState();
  const [enderecoCidade, setEnderecoCidade] = useState();
  const [enderecoUf, setEnderecoUf] = useState();
  const [senha, setSenha] = useState();

  const salvar = (event) => {
    event.preventDefault(); // Evita recarregar a página
    let clienteRequest = {
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      email: email,
      dataNascimento: dataNascimento,
      enderecoCidade: enderecoCidade,
      enderecoUf: enderecoUf,
      senha: senha,
    };

    // Cadastro:
    pacienteService
      .create(clienteRequest)
      .then((response) => {
        console.log("Cliente cadastrado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao incluir o cliente.");
      });
  };

  // LOGIN:

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Login = (event) => {
    
      event.preventDefault();

      let authData = {
        username,
        password,
      };

      try {
        const response = AuthPacienteService.login(authData);
        console.log("Usuário autenticado com sucesso!", response);
        // Aqui você pode redirecionar o usuário ou atualizar o estado
      } catch (err) {
        setError("Falha ao autenticar: " + err.message);
      }
    
  };

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="forms-container">
      <nav className="forms-navbar">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
        </Link>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
        </Link>
      </nav>

      <div className="forms-box">
        <div className="forms-form">
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>
          <form  className="form-grid">
          {isLogin && (
            <>
            <div className="input-group">
              <FontAwesomeIcon icon={faIdCard} />
              <input
                value={username}
                type="text"
                placeholder="Usuario"
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
            </>
            )}

            {!isLogin && (
              <>
                <div className="input-group">
                  <FontAwesomeIcon icon={faIdCard} />
                  <input
                    value={cpf}
                    type="text"
                    placeholder="CPF"
                    required
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    value={nomeCompleto}
                    type="text"
                    placeholder="nome"
                    required
                    onChange={(e) => setNomeCompleto(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    value={enderecoUf}
                    type="text"
                    placeholder="Endereco UF"
                    required
                    onChange={(e) => setEnderecoUf(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i class="fa-brands fa-centercode"></i>
                  <input
                    value={enderecoCidade}
                    type="text"
                    placeholder="Cidade"
                    required
                    onChange={(e) => setEnderecoCidade(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <i class="fa-brands fa-centercode"></i>
                  <input
                    value={dataNascimento}
                    type="text"
                    placeholder="Data de Nascimento"
                    required
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    value={senha}
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
              </>
            )}
            

            <button
              onClick={(event) => (isLogin ? Login(event) : salvar(event))}
              type="submit"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
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
