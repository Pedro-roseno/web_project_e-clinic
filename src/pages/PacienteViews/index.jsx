import './index.css'
import { Navbar } from '../../components/Navbar/Navbar';
import {SidebarPaciente} from '../../components/Sidebars/SidebarPaciente/SidebarPaciente';
import { PacienteConsultasViews } from './PacientesConsultasViews/PacienteConsultasViews';

export const PacienteViews = () => {
  return (
    <div className="paciente-views-container">
      <Navbar />

      <div className="content">
        <div className="left-side">
          <SidebarPaciente /> 
        </div>
        <div className="right-side">
          <PacienteConsultasViews /> 
        </div>
      </div>
    </div>
  );
};
