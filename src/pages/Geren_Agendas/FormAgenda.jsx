import React from 'react';
import { useState } from "react";
import { Container, Menu, Icon,  Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from "../../assets/logo.png";
import especialidades from "../../assets/especialidades.png";
import medicos from "../../assets/medicos.png";
import pacientes from "../../assets/pacientes.png";
import consultas from "../../assets/consultas.png";
import sair from "../../assets/sair.png";

import "./Geren-Agenda.css";


const Geren_Agendas = () =>   {
  
  const [tempo, setTempo] = useState();

return(


    <div style={{ display: 'flex', height: '100vh' }}>

    <div
      style={{
        width: '250px',
        backgroundColor: 'white',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        Menu
      </div>

      <img  src={logo} style={{ width: '200px', height: '200px' }} />

      <div style={{ marginBottom: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center' , marginTop: '20px' }}>
        <img  src={especialidades}  style={{ width: '30px', height: '30px', marginRight: '0.5rem', }} /> <a href="//">Especialidades</a></div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', alignItems: 'center' }}>
      <img  src={medicos}    style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} /> <a href="http://">Médicos</a> </div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', alignItems: 'center' }}>
      <img   src={pacientes} style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} /> <a href="http://">Pacientes</a> </div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img  src={consultas} style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} /> <a href="http://">Consultas</a> </div>

      <div style={{ marginTop: 'auto', cursor: 'pointer' , display: 'flex', alignItems: 'center' }}>
       <img  src={sair} style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}  />  <a href="http://"> Encerrar Sessão</a>
    
      </div>
    </div>

    <div style={{ flex: 1 }}>
      <Menu fixed="top" style={{ backgroundColor: '#265BA7' }}>
        <Container>
          <div
            style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginRight: '10rem',
              alignSelf: 'center',
            }}
          >
            eClinic+
          </div>
          <div
            style={{
              marginLeft: 'auto',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon size='big' name='user circle' />
            <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>Usuário</span>
          </div>
        </Container>
      </Menu>

      <div
  style={{
    position: 'relative',
    top: '27%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    gap: '2rem', 
  }}
>
  {       }
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem', 
    }}
  >
    <Icon size="big" name="filter" />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>ID</label>
      <input
        id="input1"
        name="id"
        type="text"
        placeholder="Ex: #000000"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Data</label>
      <input
       name="data"
        type="date"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Hora</label>
      <input
        name="hora"
        type="time"
        value={tempo}
        onChange={e => setTempo(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
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
      }}
    >
     
      <Icon size="big" name="add" />
      <Icon size="big" name="edit outline" />
      <Icon size="big" name="trash alternate outline" />
    </div>
  </div>

  {      }
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Médico</label>
      <input
        name="medico"
        type="text"
        placeholder="Ex: Marcos"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Especialidades</label>
      <select
       name="especialidades"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      >
        <option>Selecione</option>
        <option>Clínico</option>
        <option>Dentista</option>
        <option>Ortopedia</option>
      </select>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Motivo da Consulta</label>
      <input
       name="motivoconsulta"
        type="text"
        placeholder="Ex: obturação"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      />
    </div>
  </div>

  {      }
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Pacientes</label>
      <input
       name="pacientes"
        type="text"
        placeholder="Ex: Nome"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ color: 'white' }}>Status da Consulta</label>
      <select
       name="status"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
        }}
      >
        <option value="">Selecione</option>
        <option value="active">Marcada</option>
        <option value="inactive">Pendente</option>
        <option value="pending">Cancelada</option>
      </select>
    </div>
  </div>
</div>

       
      </div>
    </div>
  
 
); 
 
    
};
export default Geren_Agendas ;
