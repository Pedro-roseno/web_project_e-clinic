import React from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import "./AdminConsultasViews.css";

export const AdminConsultasViews = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Consultas Agendadas</h1>

      <div className="action-buttons-container">
        <ActionButtons
          userType="admin"
          onAdd={() => console.log("✅ Admin adicionando consulta")}
          onEdit={() => console.log("✏ Admin editando consulta")}
          onDelete={() => console.log("❌ Admin removendo consulta")}
        />
      </div>

      <p>Lista de consultas cadastradas</p>
    </div>
  );
};

