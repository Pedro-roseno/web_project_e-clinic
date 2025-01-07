import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

const GerenciamentoMedico = () => (
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

      <img src="ecliniclogo.png" style={{ width: '200px', height: '200px' }} />

      <div style={{ marginBottom: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img src='especialidades.png' style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} />Especialidades</div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', alignItems: 'center' }}>
        <Icon size='big' name='user md' style={{ marginRight: '0.5rem' }} />Médicos</div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', alignItems: 'center' }}>
        <Icon size='big' name='user' style={{ marginRight: '0.5rem' }} />Pacientes</div>

      <div style={{ marginBottom: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <img src='consulta.png' style={{ width: '30px', height: '30px', marginRight: '0.5rem' }} />Consultas
      </div>

      <div style={{ marginTop: 'auto', cursor: 'pointer' }}>
        <Icon size='big' name='sign-out'></Icon>
        Encerrar Sessão
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
          position: 'absolute',
          top: '30%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Icon size='big' name='filter' />
        <label style={{ color: 'white' }}>ID</label>
        <input
          type="text"
          placeholder='Ex: #000000'
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '200px',
          }}
        />
        <label style={{ color: 'white' }}>Médico</label>
        <input
          type="text"
          placeholder='Ex: Marcos'
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '200px',
          }}
        />
        <label style={{ color: 'white' }}>Especialidades</label>
        <select
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.2rem' }}>
          <Icon size='big' name='add' />
          <Icon size='big' name='edit outline' />
          <Icon size='big' name='trash alternate outline' />
        </div>
      </div>
    </div>
  </div>
);
export default GerenciamentoMedico;
