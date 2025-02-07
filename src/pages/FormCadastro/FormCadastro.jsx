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
} from "@fortawesome/free-solid-svg-icons";
import { notifyError, notifySuccess } from "../../utils/Util.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const FormCadastro = () => {
  const { state } = useLocation();
  const [idPaciente, setIdPaciente] = useState();
  const history = useNavigate()

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
        notifySuccess("Cliente cadastrado com sucesso.");
      })
      .catch((error) => {
        if(error.response.data.errors !=undefined){
          for(let i = 0; i<error.response.data.errors.length; i++){
            notifyError(error.response.data.errors[i].defaultMessage)
          }
        }else{
          notifyError(error.response.data.message)
        }
      });

      history('/formLogin')
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

            <button onClick={(event) => salvar(event)} type="submit">
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
