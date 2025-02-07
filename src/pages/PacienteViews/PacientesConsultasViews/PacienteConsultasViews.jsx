import React, { useState, useEffect } from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import "./PacienteConsultasViews.css";

export const PacienteConsultasViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidade, setEspecialidade] = useState("");
  const [idEspecialidade, setIdEspecialidade] = useState(null);
  const [medicos, setMedicos] = useState([]);
  const [medico, setMedico] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [loadingMedicos, setLoadingMedicos] = useState(false);

  // Buscar especialidades ao carregar o componente
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/especialidade");
        if (!response.ok) throw new Error("Erro ao buscar especialidades");
        const data = await response.json();
        setEspecialidades(data);
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    };

    fetchEspecialidades();
  }, []);

  // Buscar médicos quando uma especialidade for selecionada
  useEffect(() => {
    if (!idEspecialidade) return;
    
    const fetchMedicos = async () => {
      setLoadingMedicos(true);
      try {
        const response = await fetch(`http://localhost:8080/api/medicos/especialidade/${idEspecialidade}`);
        if (!response.ok) throw new Error("Erro ao buscar médicos");
        const data = await response.json();
        setMedicos(data);
      } catch (error) {
        console.error("Erro ao carregar médicos:", error);
      } finally {
        setLoadingMedicos(false);
      }
    };

    fetchMedicos();
  }, [idEspecialidade]);

  const handleEspecialidadeChange = (e) => {
    const selectedId = e.target.value;
    setIdEspecialidade(selectedId);
    const selectedEspecialidade = especialidades.find((esp) => esp.id.toString() === selectedId)?.nome || "";
    setEspecialidade(selectedEspecialidade);
    setMedico(""); // Resetar médico ao mudar a especialidade
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEspecialidade("");
    setIdEspecialidade(null);
    setMedico("");
    setData("");
    setHorario("");
    setMedicos([]);
  };

  const handleAgendar = () => {
    console.log("🗓️ Consulta Agendada:", { especialidade, medico, data, horario });
    handleCloseModal();
  };

  return (
    <div className="paciente-container">
      <h1 className="paciente-title">Consultas Agendadas</h1>

      <div className="action-buttons-container">
        <ActionButtons
          userType="paciente"
          onAdd={handleAddClick}
          onDelete={() => console.log("❌ Paciente removendo consulta")}
        />
      </div>

      <p>Lista de consultas cadastradas</p>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agendar Consulta</h2>

            <label>Especialidade:</label>
            <select value={idEspecialidade || ""} onChange={handleEspecialidadeChange}>
              <option value="">Selecione...</option>
              {especialidades.length > 0 ? (
                especialidades.map((esp) => (
                  <option key={esp.id} value={esp.id}>
                    {esp.nome}
                  </option>
                ))
              ) : (
                <option disabled>Carregando...</option>
              )}
            </select>

            <label>Médico:</label>
            <select value={medico} onChange={(e) => setMedico(e.target.value)} disabled={!idEspecialidade || loadingMedicos}>
              <option value="">Selecione...</option>
              {loadingMedicos ? (
                <option disabled>Carregando médicos...</option>
              ) : medicos.length > 0 ? (
                medicos.map((med) => (
                  <option key={med.id} value={med.nomeCompleto}>
                    {med.nomeCompleto}
                  </option>
                ))
              ) : (
                idEspecialidade && <option disabled>Nenhum médico disponível</option>
              )}
            </select>

            <label>Data da Consulta:</label>
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

            <label>Horário:</label>
            <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="btn-cancel">Cancelar</button>
              <button onClick={handleAgendar} className="btn-confirm" disabled={!especialidade || !medico || !data || !horario}>
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};