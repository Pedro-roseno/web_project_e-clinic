import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faCalendarAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import ".././Sidebar.css";

const SidebarAdmin = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="eClinic+" />
      </div>
      <nav className="sidebar-nav">
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faUserDoctor} />
          <Link to="/adminViews/medicos">Médicos</Link>
        </div>

        <div className="sidebar-item">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <Link to="/adminViews/consultas">Consultas</Link>
        </div>

        <div className="sidebar-item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <Link to="/">Encerrar sessão</Link>
        </div>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
