import React from "react";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./AdminConsultasViews.css";

const AdminConsultasViews = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="admin-main">

        {/* Área de conteúdo */}
        <main className="admin-content">
          {/* Conteúdo da página será inserido aqui */}
        </main>

        {/* Footer fixo no final */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminConsultasViews;
