import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div>
          <h3>eClinic+</h3>
          <a href="#" className="footer-link">
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
            sobre a eClinic+
          </a>
        </div>
        <div>
          <h3>Contato e Suporte</h3>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=eclinic101@gmail.com&su=Contato%20eClinic&body=Olá,%20tenho%20uma%20dúvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            eclinic101@gmail.com
          </a>
          <a href="https://wa.me/558190000000" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FontAwesomeIcon icon={faWhatsapp} className="footer-icon" />
            (81) 9000-0000
          </a>
        </div>
        <div>
          <h3>Links Úteis</h3>
          <a href="#" className="footer-link">
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
            Termos de uso
          </a>
          <a href="#" className="footer-link">
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
            Política de privacidade
          </a>
          <a href="#" className="footer-link">
            <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
            Ajuda
          </a>
        </div>
        <div>
          <h3>Siga-nos nas nossas redes sociais</h3>
          <a
            href="https://www.instagram.com/eclini.c?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

