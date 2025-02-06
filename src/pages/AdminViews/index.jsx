import './index.css';
import { Navbar } from '../../components/Navbar/Navbar';
import SidebarAdmin from '../../components/Sidebars/SidebarAdmin/SidebarAdmin';
import { Outlet } from 'react-router-dom';

export const AdminViews = () => {
  return (
    <div className="admin-views-container">
      <Navbar />

      <div className="content">
        <div className="left-side">
          <SidebarAdmin /> 
        </div>
        <div className="right-side">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

