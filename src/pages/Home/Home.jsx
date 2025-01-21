import React, { useState, useEffect } from "react";
import "./Home.css";
import image1 from "../../assets/consulta.png";
import image2 from "../../assets/logo.png";
import sobre from "../../assets/sobre.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [image1, image2, sobre];

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

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-nav-title">eClinic+</h1>
        <div className="home-header-right">
          <nav>
            <ul className="home-nav-links">
              <li>Início</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Depoimentos</li>
              <li>Contato</li>
            </ul>
          </nav>
          <button className="home-login-button">Iniciar atendimento</button>
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

      <section className="home-about">
        <h2>Sobre nós</h2>
        <div className="home-about-content">
          <img src={sobre} alt="Sobre nós" />
          <div>
            <h3>Entenda quem somos e por que existimos</h3>
            <p>
              A eClinic+ é uma plataforma inovadora que transforma a forma como
              você acessa cuidados médicos. Por meio de um chatbot inteligente,
              oferecemos teleconsultas médicas de forma prática, rápida e
              segura.
            </p>
          </div>
        </div>
      </section>

      <section className="home-facilities">
        <h2>Facilidades eClinic+</h2>
        <div className="home-facility-grid">
          <div className="home-facility-item">
            Agende sua consulta diretamente no chatbot.
          </div>
          <div className="home-facility-item">
            Experiência e tecnologia para um atendimento eficiente.
          </div>
          <div className="home-facility-item">
            Teleconsultas de diversas especialidades no momento que você
            precisa.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
