import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faUser, faEnvelope, faLock, faArrowLeft, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {

  const { state } = useLocation();
  const [idPaciente, setIdPaciente] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
        axios.get("http://localhost:8080/api/cliente/" + state.id)
        .then((response) => {
                    setIdPaciente(response.data.id)
                    setNomeCompleto(response.data.nomeCompleto)
                    setCpf(response.data.cpf)
                    setEmail(response.data.email)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoUf(response.data.enderecoUf)
                    setSenha(response.data.senha)
        })
    }
}, [state])

const [nomeCompleto, setNomeCompleto] = useState();
const [cpf, setCpf] = useState();
const [email, setEmail] = useState();
const [dataNascimento, setDataNascimento] = useState();
const [enderecoCidade, setEnderecoCidade] = useState();
const [enderecoUf, setEnderecoUf] = useState();
const [senha, setSenha] = useState();


function salvar() {

    let clienteRequest = {
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        email: email,
        dataNascimento: dataNascimento,
        enderecoCidade: enderecoCidade,
        enderecoUf: enderecoUf,
        senha: senha,

    }
    
    //Cadastro:
    axios.post("http://localhost:8080/api/pacientes", clienteRequest)
    .then((response) => { console.log('Cliente cadastrado com sucesso.') })
    .catch((error) => { console.log('Erro ao incluir o cliente.') })
}


  const [isLogin, setIsLogin] = useState(true); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="forms-container">
      <nav className="forms-navbar">
        <Link to={'/'}><FontAwesomeIcon icon={faHome} className="nav-icon" /></Link>
        <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} className="nav-icon" /></Link>
      </nav>


      <div className="forms-box">
        <div className="forms-form">
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>
          <form className="form-grid">
            
            {!isLogin && (
              <>
                <div className="input-group">
                  <FontAwesomeIcon icon={faIdCard} />
                  <input
                  value={cpf}
                  type="text"
                  placeholder="CPF"
                  required
                  onChange={e => setCpf(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                  value={nomeCompleto}
                  type="text"
                  placeholder="Nome Completo"
                  required
                  onChange={e => setNomeCompletoe(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                value={nomeCompleto}
                type="text"
                placeholder="nome"
                required
                onChange={e => setNomeCompleto(e.target.value)}
                />
            </div>
            <div className="input-group">
                  <FontAwesomeIcon icon={faIdCard} />
                  <input
                  value={cpf}
                  type="text"
                  placeholder="CPF"
                  required
                  onChange={e => setCpf(e.target.value)}
                  />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                value={email}
                type="email"
                placeholder="Email"
                required
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
              <input
                value={enderecoUf}
                type="text"
                placeholder="Endereco UF"
                required
                onChange={e => setEnderecoUf(e.target.value)}
                />
            </div>
            <div className="input-group">
            <i class="fa-brands fa-centercode"></i>
              <input
              value={enderecoCidade}
              type="text"
              placeholder="Cidade"
              required
              onChange={e => setEnderecoCidade(e.target.value)}
              />
            </div>
            <div className="input-group">
            <i class="fa-brands fa-centercode"></i>
              <input
              value={dataNascimento}
              type="text"
              placeholder="Data de Nascimento"
              required
              onChange={e => setDataNascimento(e.target.value)}
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input
                value={senha}
                type="password"
                placeholder="Senha"
                required 
                onChange={e => setSenha(e.target.value)}
              />
            </div>

            <button
            onClick={() => salvar()}
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
