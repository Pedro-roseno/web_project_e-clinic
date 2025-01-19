import "../../styles/global.css";
import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const GerMedico = () => (
  <div id="principal">
    <div id="navbar_area2">
      <section id="navbar_section2">
        <Menu id="nav2" borderless>
          <h1>eClinic+</h1>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon size='big' name='user circle' />
              <span style={{ fontSize: '1.2rem', color: 'white' }}>
                Usuário
              </span>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </section>

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
        {/* filtro */}
        <Icon size='big' name='filter' />

        {/* Campo ID abaixo */}
        <label style={{ color: 'white' }}>ID</label>
        <input
          type='text'
          placeholder='Ex: #000000'
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '200px',
          }}
        />

        {/* Campo nome do médico */}
        <label style={{ color: 'white' }}>MÉDICO</label>
        <input
          type='text'
          placeholder='Ex: Marcos'
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '200px',
          }}
        />

        {/* Escolher especialidades*/}
        <label style={{ color: 'white' }}>ESPECIALIDADES</label>
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <Icon size='big' name='add' /> {/* Adicionar */}
          <Icon size='big' name='edit outline' /> {/* Fazer edições */}
          <Icon size='big' name='trash alternate outline' /> {/* Limpar */}
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          top: 64,
          left: 0,
          width: '250px',
          backgroundColor: 'white',
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          display: 'flex',
          flexDirection: "column",
          alignItems: "start",
          height: '90vh',
          overflow: 'hidden',
        }} >

          {/* Abaixo,encontra-se a logo Eclinic+ e outras telas */}

        <img
          src="ecliniclogo.png"
          alt="Logo eClinic"
          style={{ width: "200px", height: "200px" }}
        />
        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "black"
          }}>
          <img
            src="especialidades.png"
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          Especialidades
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "black"
          }}
        >
          <Icon size="big" name="user md" style={{ marginRight: "0.5rem" }} />
          Médicos
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "black"
          }}>
          <Icon size="big" name="user" style={{ marginRight: "0.5rem" }} />
          Pacientes
        </div>

        <div
          style={{
            marginBottom: "3rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "black"
          }}>
          <img
            src='consulta.png'
            style={{ width: "30px", height: "30px", marginRight: "0.5rem" }} />
          Consultas
        </div>

        <div style={{ marginTop: 'auto', cursor: 'pointer', color: 'black' }}>
          <Icon size='big' name='sign-out' />
          Encerrar Sessão
        </div>
      </div>
    </div>
  </div>
);

export default GerMedico;
