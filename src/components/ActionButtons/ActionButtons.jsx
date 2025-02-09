import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ActionButtons.css"
const ActionButtons = ({ userType, onAdd, onEdit }) => {
  if (userType === "medico") return null;

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {(userType === "admin" || userType === "paciente") && (
        <button onClick={onAdd} title="Adicionar" aria-label="Adicionar" className="add-button">
         
          Iniciar Agendamento
        </button>
      )}

      {userType === "admin" && (
        <button onClick={onEdit} title="Editar" aria-label="Editar">
          <FontAwesomeIcon icon={faEdit} className="action-icon" />
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
