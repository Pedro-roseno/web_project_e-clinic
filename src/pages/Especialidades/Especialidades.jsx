import React from "react";
import { Container, Menu, Input, Button, Icon } from "semantic-ui-react";
import "./Especialidades.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Especialidades = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
        <Link to={'/'}>
          <img src={logo} alt="eClinic+" className="logo-img" />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <Link to={'/especialidades'}><li><b>Especialidades</b></li></Link>
            <Link to={'/gerenciamentomedico'}><li>Médicos</li></Link>
            <Link to={'/gerenciamentopaciente'}><li>Pacientes</li></Link>
            {/* <li>Consultas</li> */}
            <li>Encerrar sessão</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-user">Username</div>
        </header>

        <section className="content">
          <div className="filter-bar">
            <label htmlFor="especialidade-select">Especialidade:</label>
            <select id="especialidade-select">
              <option>Selecione</option>
            </select>
            <button className="add-button">+</button>
            <button className="edit-button">✎</button>
            <button className="delete-button">🗑️</button>
          </div>

          <table className="especialidades-table">
            <thead>
              <tr>
                <th></th>
                <th>Especialidade</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Ortopedia</td>
                <td><button className="details-button">ℹ️</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Dentista</td>
                <td><button className="details-button">ℹ️</button></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>Clínico</td>
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
export default Especialidades;
