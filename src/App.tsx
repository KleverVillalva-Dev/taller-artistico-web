import { useState } from "react";
import "./App.css";
import Biography from "./features/Biography";
import Header from "./features/Header";
import ImagenCarousel from "./features/Carousel";
import Gallery from "./features/Gallery";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "works":
        return <Gallery />;
      case "bio":
        return <Biography />;
      case "home":
      default:
        return (
          <>
            <div className="welcome-section">
              <h2>Bienvenidos al Taller de Escultura y Pintura</h2>
              <p>
                Descubre las maravillosas obras creadas con pasión y dedicación.
                Este carrusel muestra una selección de piezas destacadas.
              </p>
            </div>
            <div className="main-content">
              <ImagenCarousel />
            </div>
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header setCurrentSection={setCurrentSection} />
      {renderSection()}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>
              <strong>Escultor:</strong> Jorge Eduardo Villalva Flores
            </p>
            <p>
              <strong>Correo:</strong>{" "}
              <a
                href="mailto:jorgejvill-flores@hotmail.com"
                className="footer-link"
              >
                jorgejvill-flores@hotmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Teléfono: (06) 2932422 - (+593)
              997307229
            </p>
          </div>
          <div className="footer-section">
            <h4>Ubicación</h4>
            <p>Panamericana y Alfredo Dalgo, San Antonio de Ibarra</p>
            <a
              href="https://www.google.com/maps?q=0.3375279,-78.1674031"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Ver en Google Maps
            </a>
          </div>

          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://wa.me/+593997307229"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
