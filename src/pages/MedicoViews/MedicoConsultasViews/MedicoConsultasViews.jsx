import React, { useState, useEffect } from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import "./MedicoConsultasViews.css";

export const MedicoConsultasViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Modal de adicionar consulta
  const [consultas, setConsultas] = useState([]);
  const [consultaSelecionada, setConsultaSelecionada] = useState(null);
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [loadingConsultas, setLoadingConsultas] = useState(true);

  // Buscar consultas agendadas para o médico
  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/agendamento");
        if (!response.ok) throw new Error("Erro ao buscar consultas");
        const data = await response.json();
        setConsultas(data);
      } catch (error) {
        console.error("Erro ao carregar consultas:", error);
      } finally {
        setLoadingConsultas(false);
      }
    };

    fetchConsultas();
  }, []);

  // Abrir o modal para editar a consulta
  const handleEditClick = (consulta) => {
    setConsultaSelecionada(consulta);
    setData(consulta.data);
    setHorario(consulta.horario);
    setIsModalOpen(true);
  };

  // Fechar o modal e resetar os campos
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setConsultaSelecionada(null);
    setData("");
    setHorario("");
  };

  // Atualizar a consulta
  const handleUpdateConsulta = async () => {
    if (!data || !horario) return; // Validar que os campos não estão vazios

    const updatedConsulta = {
      ...consultaSelecionada,
      data,
      horario,
    };

    try {
      const response = await fetch(`http://localhost:8080/api/agendamento/${consultaSelecionada.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedConsulta),
      });

      if (!response.ok) throw new Error("Erro ao atualizar consulta");
      const data = await response.json();
      setConsultas((prevConsultas) =>
        prevConsultas.map((consulta) =>
          consulta.id === updatedConsulta.id ? data : consulta
        )
      );
      handleCloseModal();
      console.log("Consulta atualizada com sucesso", data);
    } catch (error) {
      console.error("Erro ao atualizar consulta:", error);
    }
  };

  // Adicionar nova consulta
  const handleAddConsulta = async () => {
    if (!data || !horario) return; // Validar que os campos não estão vazios

    const newConsulta = {
      data,
      horario,
    };

    try {
      const response = await fetch("http://localhost:8080/api/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConsulta),
      });

      if (!response.ok) throw new Error("Erro ao adicionar consulta");
      const addedConsulta = await response.json();
      setConsultas((prevConsultas) => [...prevConsultas, addedConsulta]);
      handleCloseModal();
      console.log("Consulta adicionada com sucesso", addedConsulta);
    } catch (error) {
      console.error("Erro ao adicionar consulta:", error);
    }
  };

  // Remover consulta
  const handleDeleteConsulta = async (consultaId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/agendamento/${consultaId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao remover consulta");
      setConsultas((prevConsultas) =>
        prevConsultas.filter((consulta) => consulta.id !== consultaId)
      );
      console.log("Consulta removida com sucesso");
    } catch (error) {
      console.error("Erro ao remover consulta:", error);
    }
  };

  return (
    <div className="medico-container">
      <h1 className="medico-title">Consultas Agendadas</h1>

      <div className="action-buttons-container">
        <ActionButtons
          userType="admin"
          onAdd={() => setIsAddModalOpen(true)} // Abrir modal de adicionar
          onEdit={() => console.log("✏ Admin editando consulta")} // Implementar lógica se necessário
          onDelete={() => console.log("❌ Admin removendo consulta")} // Remover lógica
        />
      </div>

      <p>Lista de consultas agendadas</p>

      {loadingConsultas ? (
        <p>Carregando consultas...</p>
      ) : consultas.length === 0 ? (
        <p>Nenhuma consulta agendada.</p>
      ) : (
        <div className="consultas-list">
          {consultas.map((consulta) => (
            <div key={consulta.id} className="consulta-item">
              <p>
                <strong>Paciente:</strong> {consulta.paciente.nome}
              </p>
              <p>
                <strong>Data:</strong> {consulta.data}
              </p>
              <p>
                <strong>Hora:</strong> {consulta.horario}
              </p>
              <button onClick={() => handleEditClick(consulta)}>Editar</button>
              <button onClick={() => handleDeleteConsulta(consulta.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}

      {/* Modal para editar consulta */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Editar Consulta</h2>

            <label>Data da Consulta:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <label>Horário:</label>
            <input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="btn-cancel">
                Cancelar
              </button>
              <button
                onClick={handleUpdateConsulta}
                className="btn-confirm"
                disabled={!data || !horario}>
                Atualizar Consulta
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Adicionar nova consulta */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Adicionar Consulta</h2>

            <label>Data da Consulta:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <label>Horário:</label>
            <input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="btn-cancel">
                Cancelar
              </button>
              <button
                onClick={handleAddConsulta}
                className="btn-confirm"
                disabled={!data || !horario}>
                Adicionar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};





