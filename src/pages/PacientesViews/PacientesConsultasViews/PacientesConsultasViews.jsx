import './PacientesConsultasViews.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Sidebar } from '../../../components/Sidebar/Sidebar';
import React, { useState } from "react";

export const PacientesViews = () => {
  const personaId = 1;
  //1==admin
  //2==doc
  //3==patient


  return (
    <div className="pacientes-views-container">
      <Navbar />

      <div className="content">
      <div className="left-side">
        
        <Sidebar />
  
        </div>
        <div className="right-side">
        
    <h1>Paciente tela</h1>
        
        </div>
      </div>
    </div>
  );
};

