import React from "react";
import { Container, Menu, Input, Button, Icon } from "semantic-ui-react";
import "./GerPaciente.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const GerPaciente = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="eClinic+" className="logo-img" style={{ width: '150px', height: '150p' }} />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <Link to={'/especialidades'}>
              <li>
                <img src='especialidades.png'style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
                Especialidades</li></Link>
            <Link to={'/gerenciamentomedico'}><li>
              <Icon name='user md' style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
              Médicos</li></Link>
            <Link to={'/gerenciamentopaciente'}><li>
              <Icon name='user' style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
              <b>Pacientes</b></li></Link>
            {/* <li>Consultas</li> */}
            <li>
              <Icon size='big' name='sign-out' />
              Encerrar sessão</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
        <img src='usuarioicon.png'style={{ width: '25px', height: '25px', marginRight: '0.5rem' }} />
          <div className="header-user">Usuário</div>
        </header>

        <section className="content">
          <div className="filter-bar">

            <Icon size='big' name='filter' />  {/* Ícone filtro */}

            {/* Campo ID abaixo */}
            <label style={{ color: 'white' }}>ID(CPF)</label>
            <input
              type='text'
              placeholder='Ex: #000000'
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '200px',
                marginRight: '1rem'
              }} />

            {/* Campo Médico abaixo */}
            <label style={{ color: 'white'}}>Nome</label>
            <input
              type='text'
              placeholder='Ex: Marcos'
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '200px',
                marginRight: '1rem'
              }} />
            <button className="add-button">+</button>
            <button className="edit-button">✎</button>
            <button className="delete-button">🗑️</button>
          </div>

          <table className="pacientes-table">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Nome</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#000000</td>
                <td>Mário</td>
                <td><button className="details-button">ℹ️</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#111111</td>
                <td>Maria</td>
                <td><button className="details-button">ℹ️</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#222222</td>
                <td>Eduarda</td>
                <td><button className="details-button">ℹ️</button></td>
              </tr>
            </tbody>
          </table>

          <footer className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>Mais</span>
          </footer>
        </section>
      </main>
    </div>
  );
};
export default GerPaciente;
