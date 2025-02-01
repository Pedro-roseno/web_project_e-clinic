import './MedicoConsultasViews.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import React, { useState } from "react";

export const AdminViews = () => {
  return (
    <div className="admin-views-container">
      <Navbar />

      <div className="content">
      <div className="left-side">
        
        <Sidebar />
  
        </div>
        <div className="right-side">
        
        <Outlet/>
        
        </div>
      </div>
    </div>
  );
};

