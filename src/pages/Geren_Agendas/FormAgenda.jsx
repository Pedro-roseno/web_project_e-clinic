
import React, { useState } from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import logo from "../../assets/logo.png";
import especialidades from "../../assets/especialidades.png";
import medicos from "../../assets/medicos.png";
import pacientes from "../../assets/pacientes.png";
import consultas from "../../assets/consultas.png";
import sair from "../../assets/sair.png";
import info from "../../assets/info.png";

import "./Geren-Agenda.css";


const Geren_Agendas = () => {


  const [id, setId] = useState("");
  const [dataoHra, setDataHora] = useState("");
  const [nomemedico, setNomeMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [isIdEnabled, setIsIdEnabled] = useState(false); 
  


  const toggleIdInput = () => {
    setIsIdEnabled(!isIdEnabled);
    if (!isIdEnabled) {
      setId(""); 
    }
  };


  const salvarAgenda = () => {
    const agendamento = {
      id,
      datahora,
      nomemedico,
      especialidade,
    
    };

    if (id) {
      axios
        .put(`http://localhost:8080/api/agendamento/${id}`, agendamento)
        .then(() => {
          console.log("Agenda atualizada com sucesso.");
          limparCampos();
        })
        .catch(() => {
          console.error("Erro ao atualizar a agenda.");
        });
    } else {
      axios
        .post("http://localhost:8080/api/agendamento", agendamento)
        .then(() => {
          console.log("Agenda criada com sucesso.");
          limparCampos();
        })
        .catch(() => {
          console.error("Erro ao criar a agenda.");
        });
    }
  };

  const limparCampos = () => {
    setId("");
    DataoHora("");
    setNomeMedico("");
    setEspecialidade("");
    setIsIdEnabled(false);
  };

  const adicionarAgenda = () => {
    limparCampos();
    console.log("Preparando para adicionar uma nova agenda.");
  };

  const editarAgenda = () => {
    if (!id) {
      alert("Selecione uma agenda para editar.");
      return;
    }
    salvarAgenda();
  };

  const excluirAgenda = () => {
    if (!id) {
      alert("Selecione uma agenda para excluir.");
      return;
    }
    axios
      .delete(`http://localhost:8080/api/agendamento/${id}`)
      .then(() => {
        console.log("Agenda excluída com sucesso.");
        limparCampos();
      })
      .catch(() => {
        console.error("Erro ao excluir a agenda.");
      });
  };


  
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          backgroundColor: "white",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          Menu
        </div>

        <img src={logo} style={{ width: "200px", height: "200px" }} />

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={especialidades}
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <a href="//">Especialidades</a>
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <img
            src={medicos}
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <a href="http://">Médicos</a>
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <img
            src={pacientes}
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <a href="http://">Pacientes</a>
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={consultas}
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <a href="http://">Consultas</a>
        </div>

        <div
          style={{
            marginTop: "auto",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={sair}
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          <a href="http://"> Encerrar Sessão</a>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <Menu fixed="top" style={{ backgroundColor: "#265BA7" }}>
          <Container>
            <div
              style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                marginRight: "10rem",
                alignSelf: "center",
              }}
            >
              eClinic+
            </div>
            <div
              style={{
                marginLeft: "0",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon size="big" name="user circle"/>
              <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem", gap: "1 rem" }}>
                Usuário
              </span>
            </div>
          </Container>
        </Menu>


      <div
  style={{
    position: 'relative',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    gap: '2rem', 
  }}
>
  
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem', 
    }}
  >
    <Icon size="big" name="filter"/>

   

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>ID</label>
      <input
        id="input1"
        name="id"
        type="text"
        placeholder="Ex: #000000"
        value={id}
        onChange={e => setId(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
          textAlign:'center',
        }}
      />
    </div>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Médico</label>
      <input
        name="medico"
        type="text"
        placeholder="Ex: Marcos"
        value={nomemedico}
       onChange={e => setNomeMedico(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
          textAlign:'center',
        }}
      />
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Especialidades</label>
      <select
       value={especialidade}
       onChange={e => setEspecialidade(e.target.value)}
       name="especialidades"

        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
          textAlign:'center',
        }}
      >
        <option>Selecione</option>
        <option>Clínico</option>
        <option>Dentista</option>
        <option>Ortopedia</option>
      </select>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <label style={{ color: 'white' }}>Data e Hora</label>
  <input
    type="datetime-local"
    value={dataoHra}
    onChange={e => setDataHora(e.target.value)}
    style={{
      padding: '0.5rem',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '200px',
      textAlign: 'center',
    }}
  />
</div>



    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem', 
        marginLeft: '15px',
        top: '15rem',
      }}
    >
     
     <Icon size="big" name="add" onClick={adicionarAgenda} />
  <Icon size="big" name="edit outline" onClick={editarAgenda} />
  <Icon size="big" name="trash alternate outline" onClick={excluirAgenda} />
    </div>
  </div>

  
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}
  >
  

   


    <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}
  >

  </div>

  
 
   
  </div>

  <div 
  style={{ 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    gap: '1rem', 
    marginLeft: '11px' 
  }}
>
  <label style={{ display: 'flex', alignItems: 'center', gap: '2rem',marginLeft: "19rem" }}>
    <input
      type="checkbox"
      checked={isIdEnabled}
      onChange={toggleIdInput}
    
    />
    <span style={{ color: 'white' }}></span>
  </label>

  <div 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12rem' ,
      marginLeft:'9rem'
      
    }}
  >
    <p style={{ margin: 0, color: 'white'}}>ID</p>
    <p style={{ margin: 0, color: 'white' }}>Médico</p>
    <p style={{ margin: 0, color: 'white' }}>Especialidade</p>
    <p style={{ margin: 0, color: 'white' }}>Data/Hora</p>
    <p style={{ margin: 0, color: 'white' }}>Detalhes</p>

    

  </div>
</div>

</div>

       
      </div>
    </div>
  
 
); 
 
    
};
export default Geren_Agendas ;
