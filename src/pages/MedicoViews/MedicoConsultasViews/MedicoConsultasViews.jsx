import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MedicoConsultasViews.css";

export const MedicoConsultasViews = () => {
  const [consultas, setConsultas] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedConsultaId, setSelectedConsultaId] = useState(null);
  const crm = localStorage.getItem("crm");

  useEffect(() => {
    if (!crm) return;
    axios
      .get(`http://localhost:8080/api/agendamento/listarTodosPorCrm/${crm}`)
      .then((response) => setConsultas(response.data))
      .catch((error) => console.error("Erro ao carregar consultas:", error));
  }, [crm]);

  const handleDeleteClick = (consultaId) => {
    setSelectedConsultaId(consultaId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/agendamento/${selectedConsultaId}`);
      setConsultas(consultas.filter((consulta) => consulta.id !== selectedConsultaId));
      setIsDeleteModalOpen(false);
      alert("Consulta concluída com sucesso.");
    } catch (error) {
      console.error("Erro ao concluir consulta:", error);
      alert("Falha ao concluir a consulta.");
    }
  };

  return (
    <div className="paciente-container">
      <h1 className="paciente-title">Consultas Agendadas</h1>
      <div className="consulta-table-container">
        <table className="consulta-table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Link</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {consultas.length > 0 ? (
              consultas.map((consulta) => (
                <tr key={consulta.id}>
                  <td>{consulta.paciente.nomeCompleto}</td>
                  <td>{consulta.dataAgendmento?.split("-").reverse().join("/")}</td>
                  <td>{consulta.horarioAgendamento}</td>
                  <td><a href={consulta.medico.linkMeet}>{consulta.medico.linkMeet}</a></td>
                  <td>
                    <button className="btn-concluir" onClick={() => handleDeleteClick(consulta.id)}>Concluir</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhuma consulta agendada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirmar Conclusão</h2>
            <p className="confirm-text">Você tem certeza que quer concluir esta consulta?</p>
            <div className="modal-buttons">
              <button onClick={() => setIsDeleteModalOpen(false)} className="btn-cancel">Cancelar</button>
              <button onClick={handleDeleteConfirm} className="btn-confirm">Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
