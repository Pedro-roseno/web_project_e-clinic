import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthPacienteService from "../../services/AuthPaciente.service"; // Importa o serviço de autenticação
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "../../styles/global.css";
import "./Perfil.css";

const Perfil = () => {
  const [profileData, setProfileData] = useState({
    nameCompleto: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    enderecoUf: "",
    enderecoCidade: "",
    profilePic: "",
    errorMessage: "",
  });

  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const token = AuthPacienteService.getAuthToken(); // Obtém o token corretamente
      
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

      setProfileData(response.data);
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
              <div className="profile-pic-wrapper">
                <div className="profile-pic-preview">
                  {profileData.profilePic && (
                    <img
                      src={profileData.profilePic}
                      alt="Foto de Perfil"
                      className="profile-pic"
                    />
                  )}
                  <span>Escolha uma foto</span>
                  <input type="file" accept="image/*" />
                </div>
              </div>

              <div className="inputs-wrapper">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input type="text" id="name" value={profileData.nameCompleto} disabled />
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
