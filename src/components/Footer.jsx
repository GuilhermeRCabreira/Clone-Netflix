import "./Footer.css";
import React from "react";
import Facebook_icon from "../assets/facebook_icon.png";
import Instagram_icon from "../assets/instagram_icon.png";
import Twitter_icon from "../assets/twitter_icon.png";
import Youtube_icon from "../assets/youtube_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--icons">
        <img src={Facebook_icon} alt="Facebook" />
        <img src={Instagram_icon} alt="Instagram" />
        <img src={Twitter_icon} alt="Twitter" />
        <img src={Youtube_icon} alt="Youtube" />
      </div>
      <ul>
        <li>Audio Descrição</li>
        <li>Central de Ajuda</li>
        <li>Resgatar cartão pré-pago</li>
        <li>Media Center</li>
        <li>Relações com investidores</li>
        <li>Carreiras</li>
        <li>Termos de Uso</li>
        <li>Privacidade</li>
        <li>Avisos Legais</li>
        <li>Preferências de cookies</li>
        <li>Informações corporativas</li>
        <li>Entre em contato</li>
      </ul>
      <p className="copyright-text">
        ©2024 Guilherme Rodrigues Cabreira <br />
        Direito de imagem para Netflix <br />
        Dados disponibilizados pelo site Themoviedb.org
      </p>
    </div>
  );
}

export default Footer;
