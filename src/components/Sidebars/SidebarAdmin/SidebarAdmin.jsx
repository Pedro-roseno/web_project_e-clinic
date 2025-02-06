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
          
          <Link to="/adminViews"><FontAwesomeIcon icon={faUserDoctor} /> Médicos</Link>
        </div>

        <div className="sidebar-item">
          
          <Link to="/adminViews/consultas"><FontAwesomeIcon icon={faCalendarAlt} /> Consultas</Link>
        </div>

        <div className="sidebar-item">
          
          <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Encerrar sessão</Link>
        </div>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
