import React from 'react';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email:alexigikungu.012@gmail.com</p>
        <p><FaWhatsapp /> Whatsapp: 0112043557</p>
        <p><FaFacebook /> Facebook: <a href="https://www.facebook.com/alex.alexi">Alexi Alex</a></p>
        <p><FaInstagram /> Instagram: <a href="https://www.instagram.com/alexi">Alexi</a></p>
        <p><FaGithub /> Github: <a href="https://www.github.com/ALex-gikungu">Alexi</a></p>
      </div>
    </footer>
  );
};

export default Footer;
