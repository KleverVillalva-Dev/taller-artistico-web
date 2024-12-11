import React from "react";
import "../styles/Gallery.css";
import useFetch from "../hooks/useFetch";

const Gallery = () => {
  const {
    data: images,
    loading,
    error,
  } = useFetch("http://localhost:5000/api/images/obtener-imagen");

  if (loading) return <p>Cargando imágenes...</p>;
  if (error) return <p>Error al cargar las imágenes: {error}</p>;

  return (
    <div className="gallery-container">
      <h2>Obras Más Destacadas</h2>
      <div className="gallery-grid">
        {images.map((image: any, index: number) => (
          <div className="gallery-card" key={index}>
            <img src={image.url} alt={image.titulo} className="gallery-image" />
            <div className="gallery-info">
              <h3>{image.titulo}</h3>
              <p>{image.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
