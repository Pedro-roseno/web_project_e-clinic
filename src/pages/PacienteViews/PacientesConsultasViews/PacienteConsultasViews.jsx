import React, { useState, useEffect } from "react";
import ActionButtons from "../../../components/ActionButtons/ActionButtons";
import axios from "axios";
import "./PacienteConsultasViews.css";
import { notifyError, notifySuccess } from "../../../utils/Util";

export const PacienteConsultasViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal para confirmação de exclusão
  const [especialidades, setEspecialidades] = useState([]);
  const [idEspecialidade, setIdEspecialidade] = useState(null);
  const [medicos, setMedicos] = useState([]);
  const [idMedico, setIdMedico] = useState(null);
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [loadingMedicos, setLoadingMedicos] = useState(false);
  const [consultas, setConsultas] = useState([]);
  const [selectedConsultaId, setSelectedConsultaId] = useState(null); // ID da consulta selecionada para exclusão

  const cpf = localStorage.getItem("cpf");

  // Buscar especialidades ao carregar o componente
  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/especialidade");
        setEspecialidades(response.data);
      } catch (error) {
        console.error("Erro ao carregar especialidades:", error);
      }
    };
    fetchEspecialidades();
  }, []);

  
  useEffect(() => {
    if (!idEspecialidade) return;

    const fetchMedicos = async () => {
      setLoadingMedicos(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/medicos/especialidade/${idEspecialidade}`);
        setMedicos(response.data);
      } catch (error) {
        console.error("Erro ao carregar médicos:", error);
      } finally {
        setLoadingMedicos(false);
      }
    };

    fetchMedicos();
  }, [idEspecialidade]);

  const fetchConsultas = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/agendamento/listarTodosPorCpf/${cpf}`);
      setConsultas(response.data);
    } catch (error) {
      console.error("Erro ao carregar consultas:", error);
    }
  };

  // Buscar consultas ao carregar o componente
  useEffect(() => {
    if (!cpf) return;

    

    fetchConsultas();
  }, [cpf]);

  const handleEspecialidadeChange = (e) => {
    setIdEspecialidade(e.target.value);
    setIdMedico(null);
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIdEspecialidade(null);
    setIdMedico(null);
    setData("");
    setHorario("");
    setMedicos([]);
  };

  // 🗓️ Função para agendar a consulta
  const handleAgendar = async () => {
    if (!cpf) {
      console.error("CPF não encontrado.");
      return;
    }
  
    try {
      const pacienteResponse = await fetch(`http://localhost:8080/api/pacientes/buscarPorCpf/${cpf}`);
      if (!pacienteResponse.ok) throw new Error("Erro ao buscar paciente");
  
      
      let conflitoDeHorario = false;
  
     
      for (let i = 0; i < consultas.length; i++) {
        const con = consultas[i];
        if (con.dataAgendmento === data) {
        
          const [horaConsulta, minutoConsulta] = con.horarioAgendamento.split(":").map(Number);
          const [horaNova, minutoNova] = horario.split(":").map(Number);
  
          const diffHora = Math.abs(horaNova - horaConsulta);
          const diffMinuto = Math.abs(minutoNova - minutoConsulta);
          const diffTotal = diffHora * 60 + diffMinuto;
  
          
          if (diffTotal < 60) {
            console.log("Conflito de horário detectado");
            notifyError("Você já tem uma consulta agendada com um intervalo menor que uma hora. Agende para outro horário.");
            conflitoDeHorario = true; 
            break; 
          }
        }
      }
  
      if (conflitoDeHorario) {
        return; 
      }
  
      const pacienteData = await pacienteResponse.json();
      const idPaciente = pacienteData.id;
  
      const dataFormatada = data.split("-").reverse().join("/");
  
      const agendamentoData = {
        idMedico: idMedico,
        idEspecialidade,
        idPaciente,
        dataAgendamento: dataFormatada,
        horarioAgendamento: horario,
      };
  
      const agendamentoResponse = await fetch("http://localhost:8080/api/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agendamentoData),
      });
  
      if (!agendamentoResponse.ok) throw new Error("Erro ao agendar consulta");
  
      console.log("🗓️ Consulta Agendada:", agendamentoData);
      // window.location.reload();
      // Atualizar lista de consultas após agendar
      setConsultas((prevConsultas) => [...prevConsultas, { ...agendamentoData, medico: { nomeCompleto: medicos.find(med => med.id == idMedico)?.nomeCompleto }, especialidade: { nome: especialidades.find(esp => esp.id == idEspecialidade)?.nome } }]);
      
      handleCloseModal();
      notifySuccess("Consulta agendada com sucesso!");
      fetchConsultas();
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      notifyError("Falha ao agendar a consulta.");
    }
  };
  
  

  // Função para abrir o modal de confirmação de exclusão
  const handleDeleteClick = (consultaId) => {
    setSelectedConsultaId(consultaId);
    setIsDeleteModalOpen(true);
  };

  
  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/agendamento/${selectedConsultaId}`);
      if (response.status === 200) {
        notifySuccess("Consulta cancelada com sucesso.");
        notifySuccess("Consulta cancelada com sucesso.");
        setConsultas(consultas.filter(consulta => consulta.id !== selectedConsultaId));
        setIsDeleteModalOpen(false);
        fetchConsultas();
      }
    } catch (error) {
      console.error("Erro ao cancelar consulta:", error);
      notifyError("Falha ao cancelar a consulta.");
      notifyError("Falha ao cancelar a consulta.");
    }
  };

  return (
    <div className="paciente-container">
      <h1 className="paciente-title">Consultas Agendadas</h1>

      <div className="action-buttons-container">
        <ActionButtons userType="paciente" onAdd={handleAddClick}/>
      </div>

      {/* Tabela de Consultas */}
      <div className="consulta-table-container">
        <table className="consulta-table">
          <thead>
            <tr>
              <th>Médico</th>
              <th>Especialidade</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Link</th>
              <th>Ações</th> {/* Coluna de ações */}
            </tr>
          </thead>
          <tbody>
  {consultas.length > 0 ? (
    consultas.map((consulta) => (
      <tr key={consulta.id}>
        <td>{consulta.medico.nomeCompleto}</td>
        <td>{consulta.especialidade.nome}</td>
        <td>{consulta.dataAgendmento ? consulta.dataAgendmento.split('-').reverse().join('/') : consulta.dataAgendmento}</td>
        <td>{consulta.horarioAgendamento}</td>
        <td><a href={consulta.medico.linkMeet} target="_blank" rel="noopener noreferrer" >{consulta.medico.linkMeet}</a></td>
        <td>
          <button className="btn-cancelar" onClick={() => handleDeleteClick(consulta.id)}>Cancelar</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">Nenhuma consulta agendada.</td>
    </tr>
  )}
</tbody>
        </table>
      </div>


      {/* Modal de Confirmação de Exclusão */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirmar Cancelamento</h2>
            <p className="confirm-text" >Você tem certeza de que deseja cancelar esta consulta?</p>
            <div className="modal-buttons">
              <button onClick={() => setIsDeleteModalOpen(false)} className="btn-cancel">Cancelar</button>
              <button onClick={handleDeleteConfirm} className="btn-confirm">Confirmar</button>
            </div>
          </div>
        </div>
      )}

      
      {/* Modal de Agendamento */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agendar Consulta</h2>

            <label>Especialidade:</label>
            <select value={idEspecialidade || ""} onChange={handleEspecialidadeChange}>
              <option value="">Selecione...</option>
              {especialidades.map((esp) => (
                <option key={esp.id} value={esp.id}>
                  {esp.nome}
                </option>
              ))}
            </select>

            <label>Médico:</label>
            <select value={idMedico || ""} onChange={(e) => setIdMedico(e.target.value)} disabled={!idEspecialidade || loadingMedicos}>
              <option value="">Selecione...</option>
              {loadingMedicos ? (
                <option disabled>Carregando médicos...</option>
              ) : (
                medicos.map((med) => (
                  <option key={med.id} value={med.id}>
                    {med.nomeCompleto}
                  </option>
                ))
              )}
            </select>

            <label>Data da Consulta:</label>
            <input type="date" min={new Date().toJSON().slice(0,10)} value={data} onChange={(e) => setData(e.target.value)} />

            <label>Horário:</label>
            <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />

            <div className="modal-buttons">
              <button onClick={handleCloseModal} className="btn-cancel">Cancelar</button>
              <button onClick={handleAgendar} className="btn-confirm" disabled={!idEspecialidade || !idMedico || !data || !horario}>Agendar Consulta</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};