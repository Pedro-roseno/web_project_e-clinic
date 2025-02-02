import React, { useState } from "react";
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser, faEnvelope, faLock, faArrowLeft, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {

//   const { state } = useLocation();
//   const [idCliente, setIdPaciente] = useState();

//   useEffect(() => {
//     if (state != null && state.id != null) {
//         axios.get("http://localhost:8080/api/cliente/" + state.id)
//         .then((response) => {
//                     setIdPaciente(response.data.id)
//                     setNomeCompleto(response.data.nomeCompleto)
//                     setCpf(response.data.cpf)
//                     setDataNascimento(formatarData(response.data.dataNascimento))
//                     setEnderecoCidade(response.data.enderecoCidade)
//                     setEnderecoUf(response.data.enderecoUf)
//                     setSenha(response.data.senha)
//         })
//     }
// }, [state])

// const [nome, setNomeCompleto] = useState();
// const [cpf, setCpf] = useState();
// const [dataNascimento, setDataNascimento] = useState();
// const [enderecoCidade, setEnderecoCidade] = useState();
// const [enderecoUf, setEnderecoUf] = useState();
// const [senha, setSenha] = useState();


// function salvar() {

//     let clienteRequest = {
//         nome: nome,
//         cpf: cpf,
//         dataNascimento: dataNascimento,
//         enderecoCidade: enderecoCidade,
//         enderecoUf: enderecoUf,
//         senha: senha,

//     }

//     if (idCliente != null) { //Alteração:
//         axios.put("http://localhost:8080/api/pacientes" + idCliente, clienteRequest)
//         .then((response) => { console.log('Cliente alterado com sucesso.') })
//         .catch((error) => { console.log('Erro ao alter um cliente.') })
//     } else { //Cadastro:
//         axios.post("http://localhost:8080/api/pacientes", clienteRequest)
//         .then((response) => { console.log('Cliente cadastrado com sucesso.') })
//         .catch((error) => { console.log('Erro ao incluir o cliente.') })
//     }
// }


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
                  <input type="text" placeholder="CPF" required />
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
              <input type="text" placeholder="Endereco UF" required />
            </div>
            <div className="input-group">
            <i class="fa-brands fa-centercode"></i>
              <input type="text" placeholder="Cidade" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
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
