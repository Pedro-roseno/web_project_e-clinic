import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import ".././Sidebar.css";
import { notifyError, notifySuccess } from "../../../utils/Util";

export const SidebarPaciente = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleLogout = () => {
    localStorage.clear(); // Limpa todo o localStorage
    navigate("/"); // Redireciona para a página de login ou qualquer outra página desejada
    notifySuccess("Deslogado com sucesso!")
  };
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="eClinic+" />
      </div>
      <nav className="sidebar-nav">
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <Link to="/pacienteViews">Consultas</Link>
        </div>

        <div className="sidebar-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Encerrar sessão</span>
        </div>
      </nav>
    </div>
  );
};


