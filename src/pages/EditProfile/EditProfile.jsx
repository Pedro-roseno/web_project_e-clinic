import React, { useState } from "react";
import "./EditProfile.css";
import Footer from "../../components/footer/app";
import "../../styles/global.css";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    email: "",
    role: "",
    profilePic: null,
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="profile-edit-main">
      <div className="profile-edit-page">
        <div className="profile-edit-container">
          <h2>Editar Perfil</h2>
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
                    <span className="error-message">
                      {profileData.errorMessage}
                    </span>
                  )}
                </div>
              </div>
              <div className="inputs-wrapper">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="surname">Sobrenome</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={profileData.surname}
                    onChange={handleChange}
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
                  <label htmlFor="role">Função</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={profileData.role}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group submit-group">
                  <button type="submit">Salvar</button>
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
