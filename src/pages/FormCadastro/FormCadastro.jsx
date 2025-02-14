import React, { useState, useEffect } from "react";
import "./FormCadastro.css";
import pacienteService from "../../services/Paciente.service.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faArrowLeft,
  faHome,
  faIdCard,
  faLocationDot,
  faCity,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { notifyError, notifySuccess } from "../../utils/Util.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const FormCadastro = () => {
  const { state } = useLocation();
  const [idPaciente, setIdPaciente] = useState();
  const history = useNavigate();

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
    if (!dataParam) return "";
    let arrayData = dataParam.split("-");
    return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
  }

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [enderecoCidade, setEnderecoCidade] = useState("");
  const [enderecoUf, setEnderecoUf] = useState("");
  const [senha, setSenha] = useState("");
  const [alertas, setAlertas] = useState({
    cpf: "",
    nomeCompleto: "",
    email: "",
    dataNascimento: "",
    enderecoCidade: "",
    enderecoUf: "",
    senha: "",
  });

  const validarCampos = () => {
    let erros = {};

    if (!cpf) erros.cpf = "Por favor, informe seu CPF.";
    if (!nomeCompleto) erros.nomeCompleto = "Por favor, informe seu nome completo.";
    if (!email) erros.email = "Por favor, informe seu email.";
    if (!dataNascimento) erros.dataNascimento = "Por favor, informe sua data de nascimento.";
    if (!enderecoCidade) erros.enderecoCidade = "Por favor, informe sua cidade.";
    if (!enderecoUf) erros.enderecoUf = "Por favor, informe seu estado.";
    if (!senha) erros.senha = "Por favor, crie uma senha.";

    setAlertas(erros);
    return Object.keys(erros).length === 0;
  };

  const salvar = (event) => {
    event.preventDefault();

    if (!validarCampos()) {
      notifyError("Preencha todos os campos obrigatórios.");
      return;
    }

    let clienteRequest = {
      nomeCompleto,
      cpf,
      email,
      dataNascimento,
      enderecoCidade,
      enderecoUf,
      senha,
    };

    pacienteService
      .create(clienteRequest)
      .then(() => {
        history("/formLogin");
        notifySuccess("Cliente cadastrado com sucesso.");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          error.response.data.errors.forEach((err) => notifyError(err.defaultMessage));
        } else {
          notifyError("Erro ao cadastrar");
        }
      });
  };

  return (
    <div className="cadastro-container">
      <nav className="cadastro-navbar">
        <Link to="/" className="nav-icon">
          Home <FontAwesomeIcon icon={faHome} />
        </Link>
      </nav>

      <div className="cadastro-box">
        <div className="cadastro-form">
          <h2>Cadastro</h2>
          <form className="form-grid">
            <div className="input-group">
              <FontAwesomeIcon icon={faIdCard} />
              <input
                value={cpf}
                type="text"
                placeholder="CPF"
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

		{alertas.cpf && <span className="alerta">{alertas.cpf}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input
                value={nomeCompleto}
                type="text"
                placeholder="Nome Completo"
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
            </div>

              {alertas.nomeCompleto && <span className="alerta">{alertas.nomeCompleto}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

		{alertas.email && <span className="alerta">{alertas.email}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faCakeCandles} />
              <input
                value={dataNascimento}
                type="text"
                placeholder="Data de Nascimento"
                onChange={(e) => setDataNascimento(e.target.value)}
              />
              
            </div>

		{alertas.dataNascimento && <span className="alerta">{alertas.dataNascimento}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faCity} />
              <input
                value={enderecoCidade}
                type="text"
                placeholder="Cidade"
                onChange={(e) => setEnderecoCidade(e.target.value)}
              />
            </div>

              {alertas.enderecoCidade && <span className="alerta">{alertas.enderecoCidade}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faLocationDot} />
              <input
                value={enderecoUf}
                type="text"
                placeholder="Estado"
                onChange={(e) => setEnderecoUf(e.target.value)}
              />
            </div>

		{alertas.enderecoUf && <span className="alerta">{alertas.enderecoUf}</span>}

            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                value={senha}
                type="password"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

		{alertas.senha && <span className="alerta">{alertas.senha}</span>}

            <button onClick={salvar} type="submit">
              Cadastrar
            </button>
          </form>
          <Link to="/formLogin" className="toggle-btn">
            Já tem conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
};
