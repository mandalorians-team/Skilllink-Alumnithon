import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import Logo from '../assets/imagen/Logo.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            {/* Parte izquierda: logo + desc + redes */}
                <div className="footer-left">
                    <div className="footer-logo">
                    <img src={Logo} alt="Skill Link Logo" className="logo-img" />
                    <span className="logo-text">Skill Link</span>
                    </div>
                    <p className="footer-description">
                    Mantente al día con nuestros últimos cursos y mentores. Únete a nuestra comunidad.
                    </p>
                    <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook.png" alt="Facebook" className="icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/twitter.png" alt="Twitter" className="icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram.png" alt="Instagram" className="icon" />
                    </a>
                    </div>
                </div>

            {/* Parte derecha: formulario */}
                <div className="footer-right">
                    <p className="newsletter-title">Suscríbete a nuestro boletín</p>
                    <form className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="newsletter-input"
                    />
                    <motion.button
                        whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 10px rgba(121,158,184,0.7)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="newsletter-button"
                    >
                        Suscribirse
                    </motion.button>
                    </form>
                </div>
            </div>

            {/* Footer inferior */}
            <div className="footer-bottom">
                <p>© 2025 SkillLink. Todos los derechos reservados.</p>
                    <div className="lang-buttons">
                        <button>Español</button>
                        <button>English</button>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;