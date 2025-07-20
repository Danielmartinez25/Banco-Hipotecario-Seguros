import { useState } from "react";
import styles from "./Service.module.css"; // Assuming you have a CSS module for styles
export default function Service() {
  const [displayText, setDisplayText] = useState(false);
  const [displayTextTwo, setDisplayTextTwo] = useState(false);
  const [displayTextThree, setDisplayTextThree] = useState(false);
  const [displayArrow, setDisplayArrow] = useState(false);
  const [displayArrowTwo, setDisplayArrowTwo] = useState(false);
  const [displayArrowThree, setDisplayArrowThree] = useState(false);
  const [displayChangeText, setDisplayChangeText] = useState(false);
  const [displayChangeTextTwo, setDisplayChangeTextTwo] = useState(false);
  const [displayChangeTextThree, setDisplayChangeTextThree] = useState(false);

  const handleClick = () => {
    setDisplayArrow(!displayArrow);
    setDisplayChangeText(!displayChangeText);
    setDisplayText(!displayText);
    if (displayTextTwo || displayTextThree) {
      setDisplayTextTwo(false);
      setDisplayTextThree(false);
    }
  };
  const handleClickTwo = () => {
    setDisplayArrowTwo(!displayArrowTwo);
    setDisplayChangeTextTwo(!displayChangeTextTwo);
    setDisplayTextTwo(!displayTextTwo);
    if (displayText || displayTextThree) {
      setDisplayText(false);
      setDisplayTextThree(false);
    }
  };
  const handleClickThree = () => {
    setDisplayArrowThree(!displayArrowThree);
    setDisplayChangeTextThree(!displayChangeTextThree);
    setDisplayTextThree(!displayTextThree);
    if (displayText || displayTextTwo) {
      setDisplayText(false);
      setDisplayTextTwo(false);
    }
  };
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center pt-2 lg-pt-5 pb-3 ${styles.serviceContainer}`}
      >
        <div className="container">
          <h2 className={`text-center ${styles.title}`}>
            ¿Qué me cubre la asistencia del seguro de salud?
          </h2>
          <div className="p-4">
            <p className={` ${styles.description}`}>
              Este servicio es el complemento a la cobertura que contratás con
              tu seguro y te permite contar con:
            </p>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClick}
              >
                {displayText ? "Atención cubierta" : "Atención cubierta"}
                <span className="d-flex flex-wrap">
                  <span className={`${styles.spanButton}`}>
                    {displayChangeText ? "Ver menos" : "Ver más"}
                  </span>
                  <i
                    className={`fa fa-chevron-right ${styles.arrow} ${
                      !displayArrow ? "" : styles.rotated
                    }`}
                    aria-hidden="true"
                  ></i>
                </span>
              </button>

              {displayText && (
                <div className={`${styles.textPanel}`}>
                  <h3>Médico a domicilio</h3>
                  <h3>Reintegros en farmacias todos los meses</h3>
                  <h3>Sesiones de psicología virtual o presencial</h3>
                  <h3>Atención odontológica</h3>
                  <p>
                    Atención ante urgencias odontológicas, incluyendo
                    radiografías (Periapicales y Coronales), Endodoncia
                    (Tratamiento de Conducto), Operatoria Dental (Obturación
                    simple compuesta y compleja), Periodoncia (Tratamiento
                    gingivitis), Cirugías: dientes (permanentes/temporales);
                    (radiculares/fracturados), Limpieza.
                  </p>
                  <h3>Asistencia nutricional</h3>
                  <p>
                    Con planes orientativos de alimentación saludable indicando
                    calorías recomendadas en cada comida, Información práctica
                    de recetas clásicas adaptadas a las distintas patologías
                    (por ejemplo, celiaquía y diabetes) y asesoramiento sobre
                    productos disponibles en el mercado para cada caso.
                  </p>
                  <h3>Alquiler de aparatos ortopédicos</h3>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClickTwo}
              >
                {displayTextTwo ? "Exámenes" : "Exámenes"}
                <span className="d-flex flex-wrap">
                  {" "}
                  <span className={styles.spanButton}>
                    {displayChangeTextTwo ? "Ver menos" : "Ver más"}
                  </span>
                  <i
                    className={`fa fa-chevron-right ${styles.arrow} ${
                      !displayArrowTwo ? "" : styles.rotated
                    }`}
                    aria-hidden="true"
                  ></i>
                </span>
              </button>

              {displayTextTwo && (
                <div className={`${styles.textPanel}`}>
                  <h3>Consultas médicas de cualquier especialidad</h3>
                  <p>
                    Con especialistas como Kinesiología, Dermatología,
                    Gastroenterología, Nutrición, Oftalmología, Psicología,
                    Otorrinolaringología, Odontología, Nefrología, Neurología,
                    Neumología, Endocrinología, Cardiología, Traumatología,
                    Reumatología, Cirugía General y Hepatología.
                  </p>
                  <h3>Chequeos preventivos</h3>
                  <p>
                    Que incluye electrocardiograma, hemograma y análisis de
                    orina completo, RX de tórax, ecografía abdominal y ecografía
                    Doppler. Control médico anual por prevención/control con un
                    especialista en estudios de:
                  </p>
                  <ul>
                    <li>Endoscopia</li>
                    <li>Colonoscopia</li>
                    <li>Examen prostático</li>
                    <li>PET / CT (Estudio de Cáncer)</li>
                  </ul>
                  <h3>Estudios de laboratorio</h3>
                  <p>
                    Vas a poder realizarte estudios de laboratorio, hemograma y
                    análisis de orina completo entre otros.
                  </p>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClickThree}
              >
                {displayTextThree ? "Atención cubierta" : "Atención cubierta"}
                <span className="d-flex flex-wrap">
                  <span className={styles.spanButton}>
                    {displayChangeTextThree ? "Ver menos" : "Ver más"}
                  </span>
                  <i
                    className={`fa fa-chevron-right ${styles.arrow} ${
                      !displayArrowThree ? "" : styles.rotated
                    }`}
                    aria-hidden="true"
                  ></i>
                </span>
              </button>

              {displayTextThree && (
                <div className={`${styles.textPanel}`}>
                  <h3>Consultas médicas para vos y tu familia</h3>
                  <p>
                    Te sumamos el más completo servicio de telemedicina para vos
                    y para tu grupo familiar, las 24hs, los 365 días del año.
                  </p>
                  <h3>Atención on line las 24 hs.</h3>
                  <p>Sin límite de llamados.</p>
                  <h3>Clínica médica y pediatría</h3>
                  <p>
                    Ante una duda, mejor acudir rápidamente antes de salir de
                    casa.
                  </p>
                  <h3>Recetas y órdenes de estudios totalmente digital</h3>
                  <p>
                    Con registro de historia clínica y derivación a diferentes
                    especialidades.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
