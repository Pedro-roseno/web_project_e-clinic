import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ActionButtons = ({ userType, onAdd, onEdit, onDelete }) => {
  if (userType === "medico") return null;

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      

      {(userType === "admin" || userType === "paciente") && (
        <button onClick={onAdd} title="Adicionar" aria-label="Adicionar">
          <FontAwesomeIcon icon={faPlus} className="action-icon" />
        </button>
      )}


      {userType === "admin" && (
        <button onClick={onEdit} title="Editar" aria-label="Editar">
          <FontAwesomeIcon icon={faEdit} className="action-icon" />
        </button>
      )}

      {(userType === "admin" || userType === "paciente") && (
        <button onClick={onDelete} title="Remover" aria-label="Remover">
          <FontAwesomeIcon icon={faTrash} className="action-icon" />
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
