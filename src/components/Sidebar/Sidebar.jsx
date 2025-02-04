import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faUserDoctor,
  faUserGroup,
  faCalendarAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const personaId = 1;
  //1 ADMIN
  //2 DOC
  //3 PATIENT

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="eClinic+" />
      </div>
      <nav className="sidebar-nav">
        {personaId == 1 ? (
          <>
            <div className="sidebar-item">
              <FontAwesomeIcon icon={faPlusCircle} />
              <Link to="/adminViews/">Especialidades</Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon icon={faUserDoctor} />
              <Link to="/adminViews/medicos">Medicos</Link>
            </div>
            <div className="sidebar-item">
              <FontAwesomeIcon icon={faUserGroup} />
              <Link to="/adminViews/pacientes">Pacientes</Link>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="sidebar-item">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <Link to="/adminViews/consultas">Consultas</Link>
        </div>

        <div className="sidebar-item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Encerrar sessão</span>
        </div>
      </nav>
    </div>
  );
};
