import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthPacienteService from "../../services/AuthPaciente.service"; //autenticação
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "../../styles/global.css";
import "./Perfil.css";

const Perfil = () => {
  const [profileData, setProfileData] = useState({
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    enderecoUf: "",
    enderecoCidade: "",
    profilePic: "",
    errorMessage: "",
  });

  const navigate = useNavigate();

  //formato da data
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // formato cpf
  const formatCPF = (cpf) => {
    if (!cpf) return "";
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  const fetchProfileData = async () => {
    try {
      const token = AuthPacienteService.getAuthToken(); //token
      
      if (!token) {
        console.error("Token de autenticação não encontrado!");
        setProfileData((prevState) => ({
          ...prevState,
          errorMessage: "Você precisa estar logado para acessar os dados do perfil.",
        }));
        return;
      }

      const response = await axios.get("http://localhost:8080/api/pacientes/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data;

      // Atualiza o estado formatando CPF e data de nascimento
      setProfileData({
        ...userData,
        dataNascimento: formatDate(userData.dataNascimento), // Formata a data antes de armazenar
        cpf: formatCPF(userData.cpf), // Formata o CPF antes de armazenar
      });

    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      setProfileData((prevState) => ({
        ...prevState,
        errorMessage: "Erro ao carregar os dados do paciente",
      }));
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
          <h2>Perfil</h2>
          {profileData.errorMessage && (
            <div className="error-message">{profileData.errorMessage}</div>
          )}
          <form>
            <div className="form-wrapper">

              <div className="inputs-wrapper">
                <div className="form-group">
                  <label htmlFor="nomeCompleto">Nome Completo</label>
                  <input type="text" id="nomeCompleto" value={profileData.nomeCompleto} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" value={profileData.cpf} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="dataNascimento">Data de Nascimento</label>
                  <input type="text" id="dataNascimento" value={profileData.dataNascimento} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={profileData.email} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoUf">Estado</label>
                  <input type="text" id="enderecoUf" value={profileData.enderecoUf} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoCidade">Cidade</label>
                  <input type="text" id="enderecoCidade" value={profileData.enderecoCidade} disabled />
                </div>
                <div className="form-group submit-group">
                  <button type="button" onClick={() => navigate("/editProfile")}>
                    Editar Perfil
                  </button>
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

export default Perfil;
