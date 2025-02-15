import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthPacienteService from "../../services/AuthPaciente.service";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "../../styles/global.css";
import "./EditProfile.css";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    enderecoUf: "",
    enderecoCidade: "",
    profilePic: "",
  });

  const navigate = useNavigate();

  const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchProfileData = async () => {
    try {
      const token = AuthPacienteService.getAuthToken();
      if (!token) {
        return;
      }

      const response = await axios.get("http://localhost:8080/api/pacientes/1", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfileData({
        ...response.data,
        cpf: formatCPF(response.data.cpf),
        dataNascimento: formatDate(response.data.dataNascimento),
      });
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = AuthPacienteService.getAuthToken();
      if (!token) {
        return;
      }

      await axios.put("http://localhost:8080/api/pacientes/1", profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Perfil atualizado com sucesso!");
      navigate("/perfil");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="profile-main-container">
        <div className="profile-container">
          <h2>Editar Perfil</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-wrapper">

              <div className="inputs-wrapper">
                <div className="form-group">
                  <label htmlFor="nomeCompleto">Nome Completo</label>
                  <input type="text" id="nomeCompleto" name="nomeCompleto" value={profileData.nomeCompleto} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" name="cpf" value={profileData.cpf} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="dataNascimento">Data de Nascimento</label>
                  <input type="text" id="dataNascimento" name="dataNascimento" value={profileData.dataNascimento} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={profileData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoUf">Estado</label>
                  <input type="text" id="enderecoUf" name="enderecoUf" value={profileData.enderecoUf} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoCidade">Cidade</label>
                  <input type="text" id="enderecoCidade" name="enderecoCidade" value={profileData.enderecoCidade} onChange={handleChange} />
                </div>
                <div className="form-group submit-group">
                  <button type="submit">Salvar Alterações</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
