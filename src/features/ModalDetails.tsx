import React from "react";
import "../styles/ModalDetails.css";

const ModalDetails = ({ obra, onClose }: { obra: any; onClose: () => void }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={obra.url} alt={obra.titulo} className="modal-image" />
        <h2>{obra.titulo}</h2>
        <p>{obra.descripcion}</p>
      </div>
    </div>
  );
};

export default ModalDetails;
