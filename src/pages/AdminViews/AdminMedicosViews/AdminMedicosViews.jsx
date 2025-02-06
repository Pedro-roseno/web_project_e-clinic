import React from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import "./AdminMedicosViews.css";

 export const AdminMedicosViews = () => {
  return (
    <div className="admin-medicos-container">
      <h1 className="admin-medicos-title">Gerenciar Médicos</h1>

      <div className="action-buttons-container">
        <ActionButtons
          userType="admin"
          onAdd={() => console.log("✅ Admin adicionando Médico")}
          onEdit={() => console.log("✏ Admin editando Médico")}
          onDelete={() => console.log("❌ Admin removendo Médico")}
        />
      </div>
    </div>
  );
};
