import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/user.png";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate
import axios from "axios"; // Importando o axios
import { notifyError, notifySuccess } from "../../utils/Util";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nomePaciente, setNomePaciente] = useState("Carregando...");

  const cpf = localStorage.getItem("cpf"); // Pegando o CPF armazenado
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    if (cpf) {
      axios
        .get(`http://localhost:8080/api/pacientes/buscarPorCpf/${cpf}`)
        .then((response) => {
          setNomePaciente(response.data.nomeCompleto); // Atualiza o nome do paciente
        })
        .catch((error) => {
          console.error("Erro ao buscar paciente:", error);
          setNomePaciente("Usuário");
        });
    } else {
      setNomePaciente("Usuário");
    }
  }, [cpf]); // Executa a requisição quando o CPF estiver disponível

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear(); // Limpa todo o localStorage
    navigate("/"); // Redireciona para a página de login ou qualquer outra página desejada
    notifySuccess("Deslogado com sucesso!")
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">eClinic+</h1>
      <div className="navbar-profile" onClick={toggleDropdown}>
        <img src={profilePic} alt="Perfil" className="navbar-profile-pic" />
        <span className="navbar-username">{nomePaciente}</span>
        {dropdownOpen && (
          <div className="navbar-dropdown">
            <div className="navbar-dropdown-item" onClick={() => navigate("/Perfil")}>
              <FontAwesomeIcon icon={faUser} />
              <span>Perfil</span>
            </div>
            <div className="navbar-dropdown-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Encerrar sessão</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
