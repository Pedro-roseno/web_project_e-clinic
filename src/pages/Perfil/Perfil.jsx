import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa o axios
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import Navbar from "../../components/Navbar/Navbar"; // Importando a Navbar
import { Footer } from "../../components/Footer/Footer";
import "../../styles/global.css"; // Global styles
import "./Perfil.css"; // Estilos para o Perfil

const Perfil = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    enderecoUf: "",
    enderecoCidade: "",
    profilePic: "", // Foto de perfil
    errorMessage: "", // Mensagem de erro
  });

  const navigate = useNavigate(); // Hook para navegação

  // Função para buscar os dados do paciente
  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtém o token de autenticação (se armazenado no localStorage)
      
      // Verifica se o token existe
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
          Authorization: `Bearer ${token}`, // Envia o token no cabeçalho da requisição
        },
      });

      // Atualiza os dados do perfil com a resposta da API
      setProfileData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      setProfileData((prevState) => ({
        ...prevState,
        errorMessage: "Erro ao carregar os dados do paciente",
      }));
    }
  };

  // Chama a função para buscar os dados assim que o componente for montado
  useEffect(() => {
    fetchProfileData();
  }, []); // O array vazio garante que a requisição seja feita apenas uma vez

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode salvar as mudanças se necessário.
  };

  return (
    <div>
      <Navbar /> {/* Adicionando a Navbar */}
      <div id="profile-main-container">
        <div className="profile-container">
          <h2>Perfil</h2>
          {profileData.errorMessage && (
            <div className="error-message">{profileData.errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={profileData.cpf}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dataNascimento">Data de Nascimento</label>
                  <input
                    type="text"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={profileData.dataNascimento}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enderecoUf">Estado</label>
                  <input
                    type="text"
                    id="enderecoUf"
                    name="enderecoUf"
                    value={profileData.enderecoUf}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enderecoCidade">Cidade</label>
                  <input
                    type="text"
                    id="enderecoCidade"
                    name="enderecoCidade"
                    value={profileData.enderecoCidade}
                    disabled
                  />
                </div>

                <div className="form-group submit-group">
                  <button
                    type="button"
                    onClick={() => navigate("/editProfile")} // Navega para a página de edição
                  >
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
