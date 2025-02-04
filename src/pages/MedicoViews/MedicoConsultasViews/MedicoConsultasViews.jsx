import './MedicoConsultasViews.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Sidebar } from '../../../components/Sidebar/Sidebar';
import React, { useState } from "react";

export const MedicosViews = () => {
  return (
    <div className="medicos-views-container">
      <Navbar />

      <div className="content">
      <div className="left-side">
        
        <Sidebar />
  
        </div>
        <div className="right-side">
        
        <h1>Medico Tela</h1>
        </div>
      </div>
    </div>
  );
};

