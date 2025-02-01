import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/user.png"; 

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">eClinic+</h1>
      <div className="navbar-profile" onClick={toggleDropdown}>
        <img src={profilePic} alt="Perfil" className="navbar-profile-pic" />
        <span className="navbar-username">Username</span>
        {dropdownOpen && (
          <div className="navbar-dropdown">
            <div className="navbar-dropdown-item">
              <FontAwesomeIcon icon={faEdit} />
              <span>Editar Perfil</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
