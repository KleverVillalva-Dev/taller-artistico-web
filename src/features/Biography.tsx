import React from "react";
import "../styles/Biography.css";
import escultorImage from "../assets/img/Papa.png";

const Biography = () => {
  return (
    <div className="biography-container">
      <h1 className="bio-title">BIBLIOGRAFÍA</h1>
      <div className="bio-content">
        <div className="bio-image">
          <img src={escultorImage} alt="Jorge Villalva Escultor" />
        </div>
        <div className="bio-text">
          <p>
            Jorge Villalva, destacado escultor y pintor, ha dedicado su vida al
            arte. Sus obras combinan elementos clásicos y contemporáneos,
            capturando emociones y detalles únicos en cada pieza.
          </p>
          <p>
            Con más de 20 años de experiencia, sus esculturas y pinturas son
            reconocidas por su autenticidad y profundidad. Desde temprana edad,
            Jorge mostró gran talento en el arte y ha perfeccionado sus
            habilidades a lo largo de los años.
          </p>
          <p>
            Su trabajo ha sido exhibido en galerías nacionales e
            internacionales, dejando una huella importante en la comunidad
            artística. Además, ha impartido talleres a jóvenes talentos,
            contribuyendo al desarrollo del arte en su comunidad.
          </p>
          <p>
            Durante su carrera, Jorge ha explorado diferentes técnicas y
            estilos, experimentando con materiales tradicionales como el mármol
            y la madera, así como con enfoques más contemporáneos. Su pasión por
            el detalle y la precisión lo han convertido en una figura clave en
            el ámbito artístico.
          </p>
          <p>
            Inspirado por la belleza de la naturaleza y las historias humanas,
            sus obras reflejan una conexión profunda con el entorno y con las
            emociones. Entre sus piezas más destacadas se encuentran esculturas
            monumentales que adornan plazas públicas y colecciones privadas.
          </p>
          <p>
            Jorge sigue trabajando con la misma pasión y compromiso que lo han
            caracterizado a lo largo de su carrera, llevando el arte a nuevas
            alturas y compartiendo su visión con el mundo.
          </p>
          <p>
            Además, Jorge Villalva ha recibido numerosos reconocimientos por su
            excepcional contribución al mundo del arte. Su enfoque único y su
            habilidad para combinar elementos modernos y tradicionales le han
            valido premios tanto a nivel nacional como internacional.
          </p>
          <p>
            En sus talleres, Jorge enseña a jóvenes artistas a expresar su
            creatividad a través de diferentes medios artísticos, inculcándoles
            la importancia del detalle y la pasión en cada obra. Su objetivo es
            inspirar a la próxima generación de artistas a alcanzar su máximo
            potencial.
          </p>
          <p>
            En su tiempo libre, Jorge disfruta explorando la naturaleza y
            buscando inspiración en su entorno. Estas experiencias enriquecen
            aún más su trabajo, permitiéndole conectar con las emociones y la
            belleza del mundo que lo rodea.
          </p>
          <p>
            Con cada nueva obra, Jorge Villalva sigue consolidando su legado
            como un maestro del arte. Su dedicación y amor por el arte continúan
            inspirando a generaciones futuras, y su trabajo permanece como un
            testimonio vivo de su inigualable talento y compromiso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
