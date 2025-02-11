// SidebarPerfil.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "../Sidebar.css"; // Caminho de estilo do Sidebar

export const SidebarPerfil = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); 
    // Se você tem uma função para mostrar uma notificação, você pode chamar aqui, como 'notifySuccess("Deslogado com sucesso!")'
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
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
