import "./index.css"
import { Navbar } from '../../components/Navbar/Navbar';
import SidebarMedico from '../../components/Sidebars/SidebarMedico/SidebarMedico';
import { MedicoConsultasViews } from './MedicoConsultasViews/MedicoConsultasViews';

export const MedicoViews = () => {
  return (
    <div className="medico-views-container">
      <Navbar />

      <div className="content">
        <div className="left-side">
          <SidebarMedico /> 
        </div>
        <div className="right-side">
          <MedicoConsultasViews /> 
        </div>
      </div>
    </div>
  );
};
