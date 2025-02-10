import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import { Footer } from "../../components/Footer/Footer";
import "../../styles/global.css";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    enderecoUf: "",
    enderecoCidade: "",
    profilePic: "",
    errorMessage: "",
  });

  const [showInfoMessage, setShowInfoMessage] = useState(false); // Estado para controlar a exibição da mensagem de informação
  const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem de sucesso
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  const navigate = useNavigate(); // Hook de navegação

  // Função para atualizar os dados de perfil
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para gerenciar a mudança da foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const validExtensions = ["image/jpeg", "image/png", "image/gif"];
      if (!validExtensions.includes(file.type)) {
        setProfileData((prev) => ({
          ...prev,
          errorMessage:
            "Formato de imagem não suportado. Por favor, escolha uma imagem JPG, PNG ou GIF.",
        }));
        e.target.value = "";
        return;
      }

      setProfileData((prev) => ({
        ...prev,
        profilePic: URL.createObjectURL(file),
        errorMessage: "",
      }));
    }
  };

  // Função para exibir a notificação ao clicar nos campos CPF ou Data de Nascimento
  const handleFieldClick = () => {
    setShowInfoMessage(true); // Exibe a mensagem
  };

  // Função para enviar os dados para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o carregamento

    try {
      const token = localStorage.getItem("token"); // Obtém o token de autenticação (caso esteja armazenado no localStorage)

      // Verifica se o token está presente
      if (!token) {
        setProfileData((prevState) => ({
          ...prevState,
          errorMessage: "Você precisa estar logado para atualizar o perfil.",
        }));
        setLoading(false); // Desativa o carregamento
        return;
      }

      // Envia a requisição PUT para atualizar os dados do perfil
      const response = await axios.put("http://localhost:8080/api/pacientes/1", profileData, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });

      if (response.status === 200) {
        setSuccessMessage("Perfil atualizado com sucesso!"); // Exibe a mensagem de sucesso
        setTimeout(() => {
          navigate("/perfil"); // Redireciona para a página de perfil após 2 segundos
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
      setProfileData((prevState) => ({
        ...prevState,
        errorMessage: "Erro ao salvar os dados do perfil.",
      }));
    } finally {
      setLoading(false); // Desativa o carregamento
    }
  };

  // Função para buscar os dados do paciente
  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token"); // Verifica o token no localStorage

      // Verifica se o token está presente
      if (!token) {
        setProfileData((prevState) => ({
          ...prevState,
          errorMessage: "Você precisa estar logado para acessar o perfil.",
        }));
        return;
      }

      const response = await axios.get("http://localhost:8080/api/pacientes/1", {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token na requisição
        },
      });
      setProfileData(response.data); // Atualiza o estado com os dados do perfil
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      setProfileData((prevState) => ({
        ...prevState,
        errorMessage: "Erro ao carregar os dados do paciente",
      }));
    }
  };

  useEffect(() => {
    fetchProfileData(); // Carrega os dados do perfil quando o componente é montado
  }, []);

  return (
    <div id="profile-edit-main">
      <div className="profile-edit-page">
        <div className="profile-edit-container">
          <h2>Editar Perfil</h2>

          {/* Exibe a mensagem de sucesso */}
          {successMessage && <div className="success-message">{successMessage}</div>}

          {/* Exibe a notificação somente se showInfoMessage for verdadeiro */}
          {showInfoMessage && (
            <div className="info-message">
              <p>
                <strong>Atenção:</strong> Não é possível alterar o <strong>CPF</strong> nem a{" "}
                <strong>Data de Nascimento</strong>.
              </p>
            </div>
          )}

          {/* Exibe a mensagem de erro, se existir */}
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
                  <input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  {profileData.errorMessage && (
                    <span className="error-message">{profileData.errorMessage}</span>
                  )}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={profileData.cpf}
                    onChange={handleChange}
                    onClick={handleFieldClick}
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
                    onChange={handleChange}
                    onClick={handleFieldClick}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoUf">Estado</label>
                  <input
                    type="text"
                    id="enderecoUf"
                    name="enderecoUf"
                    value={profileData.enderecoUf}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enderecoCidade">Cidade</label>
                  <input
                    type="text"
                    id="enderecoCidade"
                    name="enderecoCidade"
                    value={profileData.enderecoCidade}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group submit-group">
                  <button type="submit" disabled={loading}>
                    {loading ? "Salvando..." : "Salvar Alterações"}
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

export default EditProfile;
