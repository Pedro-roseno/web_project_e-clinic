import React from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import "./PacienteConsultasViews.css";

export const PacienteConsultasViews = () => {
  return (
    <div className="paciente-container">
      <h1 className="paciente-title">Consultas Agendadas</h1>

      <div className="action-buttons-container">
        <ActionButtons
          userType="paciente"
          onAdd={() => console.log("✅ Paciente adicionando consulta")}
          onDelete={() => console.log("❌ Paciente removendo consulta")}
        />
      </div>

      <p>Lista de consultas cadastradas</p>
    </div>
  );
};

