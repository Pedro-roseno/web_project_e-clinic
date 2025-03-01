import React, { useState, useEffect } from "react";
import "./Home.css";
import "../../styles/global.css"
import { Link } from "react-router-dom";
import image1 from "../../assets/consulta.png";
import image2 from "../../assets/logo.png";
import image3 from "../../assets/image3.jpg";
import sobre from "../../assets/sobre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faUserNurse, faHandHoldingMedical, faRightToBracket, faRobot, faEnvelope, faCircleNodes } from "@fortawesome/free-solid-svg-icons";

import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const slides = [image1, image2, image3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-nav-title">eClinic+</h1>
        <div className="home-header-right">
          <nav>
            <ul className="home-nav-links">
              <li onClick={scrollToAbout}>Sobre</li>
              <li>Depoimentos</li>
              <li
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contatos
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="mailto:eclinic01@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} /> Email
                    </a>
                    <a href="https://wa.me/558190000000" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </nav>
          
            <button className="home-login-button" onClick={handleDeleteClick}>
              Entrar <FontAwesomeIcon icon={faRightToBracket} className="icon-desktop" />
            </button>
          
        </div>
      </header>

      <div className="home-carousel">
        <button className="home-carousel-button prev" onClick={prevSlide}>
          &#8592;
        </button>
        <div
          className="home-carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="home-carousel-slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="home-carousel-button next" onClick={nextSlide}>
          &#8594;
        </button>
        <div className="home-carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                index === currentSlide
                  ? "home-carousel-indicator active"
                  : "home-carousel-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="carousel-shadow"></div>

      <section id="about" className="home-about">
        <img src={sobre} alt="Sobre nós" className="home-about-image" />
        <div className="home-about-content">
          <div className="home-about-header">
            <div className="about-index"></div>
            <h2>Sobre nós</h2>
          </div>
          <div className="home-about-text">
            <h3>Entenda quem somos e por que existimos</h3>
            <p>
              A eClinic+ é uma plataforma inovadora que transforma a forma como você
              acessa cuidados médicos. Por meio de uma plataforma digital, oferecemos
              teleconsultas médicas de forma prática, rápida e segura.
            </p>
          </div>
        </div>
      </section>

      <section className="home-facilities">
        <div className="home-facilities-header">
          <div className="facilities-index"></div>
          <h2>Facilidades eClinic+</h2>
        </div>
        <div className="home-facility-grid">
          <div className="home-facility-item">
            <FontAwesomeIcon icon={faRobot} className="icon-clipboard" />
            <p>Agende sua consulta diretamente na plataforma.</p>
          </div>
          <div className="home-facility-item">
            <FontAwesomeIcon icon={faUserNurse} className="icon-user" />
            <p>Experiência e tecnologia para um atendimento eficiente.</p>
          </div>
          <div className="home-facility-item">
            <FontAwesomeIcon icon={faHandHoldingMedical} className="icon-home" />
            <p>Teleconsultas de diversas especialidades no momento que você precisa.</p>
          </div>
        </div>
      </section>

      {isDeleteModalOpen && (
      <div className="modal-overlay" onClick={() => setIsDeleteModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
      <h2>Você é Médico ou Paciente?</h2>
      <div className="modal-buttons">
        <Link to={"/formLoginMedicos"}>
          <button className="btn-cancel">Médico</button>
        </Link>
        <Link to={"/formLogin"}>
          <button className="btn-confirm">Paciente</button>
        </Link>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Home;
