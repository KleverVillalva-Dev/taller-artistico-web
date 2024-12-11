import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import "../styles/Carousel.css";
import useFetch from "../hooks/useFetch";

const ImageCarousel = () => {
  const {
    data: images,
    loading,
    error,
  } = useFetch("http://localhost:5000/api/images/obtener-imagen");

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    url: "",
    titulo: "",
    autor: "",
  });

  const handleImageClick = (image: { url: string; titulo: string; autor: string }) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  if (loading) return <p>Cargando imágenes...</p>;
  if (error) return <p>Error al cargar imágenes: {error}</p>;

  return (
    <div className="carousel-container">
      <Carousel controls={false} indicators={true}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-container">
              <img
                className="carousel-image"
                src={image.url}
                alt={image.titulo}
                onClick={() => handleImageClick(image)}
              />
              <div className="carousel-description">
                <h3>{image.titulo}</h3>
                <p>{image.descripcion}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal para mostrar la imagen ampliada */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="image-modal"
      >
        <Modal.Body>
          <img
            src={selectedImage.url}
            alt={selectedImage.titulo}
            className="modal-image"
          />
          <h5 className="modal-title">{selectedImage.titulo}</h5>
          <p className="modal-author">Autor: {selectedImage.autor}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageCarousel;
