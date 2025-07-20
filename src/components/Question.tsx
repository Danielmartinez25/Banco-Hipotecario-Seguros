import { useState } from "react";
import styles from "./Question.module.css";
export default function Question() {
  const [displayText, setDisplayText] = useState(false);
  const [displayTextTwo, setDisplayTextTwo] = useState(false);
  const [displayTextThree, setDisplayTextThree] = useState(false);
  const [displayTextFour, setDisplayTextFour] = useState(false);
  const [displayArrow, setDisplayArrow] = useState(false);
  const [displayArrowTwo, setDisplayArrowTwo] = useState(false);
  const [displayArrowThree, setDisplayArrowThree] = useState(false);
  const [displayArrowFour, setDisplayArrowFour] = useState(false);
  const handleClick = () => {
    setDisplayArrow(!displayArrow);
    setDisplayText(!displayText);
    if (displayTextTwo || displayTextThree || displayTextFour) {
      setDisplayTextTwo(false);
      setDisplayTextThree(false);
      setDisplayTextFour(false);
    }
  };
  const handleClickTwo = () => {
    setDisplayArrowTwo(!displayArrowTwo);
    setDisplayTextTwo(!displayTextTwo);
    if (displayText || displayTextThree || displayTextFour) {
      setDisplayText(false);
      setDisplayTextThree(false);
      setDisplayTextFour(false);
    }
  };
  const handleClickThree = () => {
    setDisplayArrowThree(!displayArrowThree);
    setDisplayTextThree(!displayTextThree);
    if (displayText || displayTextTwo || displayTextFour) {
      setDisplayText(false);
      setDisplayTextTwo(false);
      setDisplayTextFour(false);
    }
  };

  const handleClickFour = () => {
    setDisplayTextFour(!displayTextFour);
    setDisplayArrowFour(!displayArrowFour);
    if (displayText || displayTextTwo || displayTextThree) {
      setDisplayText(false);
      setDisplayTextTwo(false);
      setDisplayTextThree(false);
    }
  };
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center  p-3 p-md-4 p-lg-5 ${styles.serviceContainer}`}
      >
        <div className="container">
          <h2 className={`text-center ${styles.title}`}>
            Preguntas Frecuentes
          </h2>
          <div>
            <p className={` ${styles.description}`}>
              ¿Te quedaron preguntas sobre el seguro de salud?
            </p>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClick}
              >
                {displayText ? "¿Para qué me sirve?" : "¿Para qué me sirve?"}
                <i
                  className={`fa fa-xs fa-chevron-right  ${
                    !displayArrow ? "" : styles.rotated
                  }`}
                  style={{ marginTop: "15px", color: "#34BBDA" }}
                  aria-hidden="true"
                ></i>
              </button>
              {!displayText && <div className={styles.divResponsive}></div>}
              {displayText && (
                <div className={`${styles.textPanel}`}>
                  <h3>¿Para qué me sirve el seguro del salud integral?</h3>
                  <p>
                    Para respaldar tu economía ante un imprevisto de salud.
                    Cubre la falta o complementa la prestación del sistema de
                    salud público, tu obra social o medicina prepaga. Ante el
                    primer diagnóstico de cáncer, infarto de miocardio, derrame
                    e infarto cerebral, cirugía o un trasplante te pagamos una
                    suma asegurada y con el dinero podrás hacer frente a todos
                    los gastos adicionales e imprevistos que siempre surgen.
                  </p>
                  <h3>¿Qué me cubre el seguro de salud?</h3>
                  <ul>
                    <li>Médico a domicilio por cualquier emergencia</li>
                    <li>Reintegros en gastos de farmacia</li>
                    <li>
                      Videoconsultas médicas con diferentes especialistas las 24
                      horas para vos y tu familia. También podés perdile a los
                      médicos recetas u órdenes de estudios que necesites
                    </li>
                    <li>Consultas médicas de cualquier especialidad</li>
                    <li>Estudios de laboratorio</li>
                    <li>
                      ¡Te vas a poder hacer 2 chequeos anuales preventivos!
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClickTwo}
              >
                {displayTextTwo
                  ? "Coberturas y Asistencias"
                  : "Coberturas y Asistencias"}
                <i
                  className={`fa fa-xs fa-chevron-right  ${
                    !displayArrowTwo ? "" : styles.rotated
                  }`}
                  style={{ marginTop: "15px", color: "#34BBDA" }}
                  aria-hidden="true"
                ></i>
              </button>
              {!displayTextTwo && <div className={styles.divResponsive}></div>}

              {displayTextTwo && (
                <div className={`${styles.textPanel}`}>
                  <h3>¿Ante qué situación tengo cobertura?</h3>
                  <p>Tu póliza de seguro de salud te protege ante:</p>
                  <ul>
                    <li>
                      Intervenciones quirúrgicas como: visión,
                      otorrinolaringológicas, mamas, cardiovasculares, en el
                      aparato digestivo y urinario, obstétricas, óseas, dermis,
                      reparadoras y bariátricas
                    </li>
                    <li>
                      Trasplante de órganos: médula ósea, corazón, pulmón o
                      bipulmón, hígado, páncreas, riñones y de córnea
                    </li>
                    <li>
                      Enfermedades críticas como: cáncer, infarto de miocardio,
                      derrame e infarto cerebral
                    </li>
                    <li>
                      Prótesis: traumatológicas y ortopédicas, cardiovasculares,
                      neurológicas, oculares, auditivas y digestivas
                    </li>
                    <li>Gasto diario por internación clínica y/o quirúrgica</li>
                  </ul>
                  <h3>
                    ¿Cómo solicitar el servicio de asistencia? ¿Quiénes pueden
                    utilizarla?
                  </h3>
                  <p>
                    Para solicitar o consultar sobre tu asistencia podés llamar
                    al 0810.666.0066.
                  </p>
                  <br />
                  <p>
                    El servicio puede ser utilizado por el asegurado de la
                    póliza, pero, en caso de que necesites, podés coordinar una
                    videoconsulta con un médico especialista para vos o
                    cualquier integrante de tu grupo familiar.
                  </p>
                  <h3>¿Quién puede ser asegurado?</h3>
                  <p>
                    Lo podés contratar si tenés entre 18 y 64 años y no hayas
                    contraído ninguno de los padecimientos cubiertos.
                  </p>
                  <h3>
                    Si tengo obra social o pre paga ¿Puedo contratar el seguro
                    de salud?
                  </h3>
                  <p>
                    Si, lo podés contratar, es complementario al sistema de
                    salud pública, tu obra social o prepaga.
                  </p>
                  <h3>¿A partir de qué momento está vigente la cobertura?</h3>
                  <p>
                    La vigencia de la póliza es a partir de las 0 (cero) horas
                    del día siguiente de la contratación.
                  </p>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClickThree}
              >
                {displayTextThree
                  ? "Siniestros y denuncias"
                  : "Siniestros y denuncias"}
                <i
                  className={`fa fa-xs fa-chevron-right  ${
                    !displayArrowThree ? "" : styles.rotated
                  }`}
                  style={{ marginTop: "15px", color: "#34BBDA" }}
                  aria-hidden="true"
                ></i>
              </button>
              {!displayTextThree && (
                <div className={styles.divResponsive}></div>
              )}

              {displayTextThree && (
                <div className={`${styles.textPanel}`}>
                  <h3>¿Cómo denuncio un siniestro?</h3>
                  <strong>Tenés 3 opciones para tu comodidad:</strong>
                  <ol>
                    <li>
                      Ingresá al
                      <u>
                        <strong>
                          <a
                            href="https://autogestion.hipotecarioseguros.com.ar/"
                            style={{ color: "#575756" }}
                          >
                            {" "}
                            portal de autogestión{" "}
                          </a>
                        </strong>
                      </u>
                      con tu clave y cargá on line tu denuncia las 24hs.
                    </li>
                    <li>
                      Comunicate por
                      <u>
                        <strong>
                          <a
                            href="https://web.whatsapp.com/send?phone=+5491123646994"
                            style={{ color: "#575756" }}
                          >
                            {" "}
                            WhatsApp{" "}
                          </a>
                        </strong>
                      </u>
                      o al
                      <u>
                        <strong>
                          <a
                            href="tel:0810.666.0066"
                            title="0810.666.0066"
                            style={{ color: "#575756" }}
                          >
                            {" "}
                            0810.666.0066{" "}
                          </a>
                        </strong>
                      </u>
                      de lunes a viernes de 8 a 20hs.
                    </li>
                    <li>
                      Descargá y completá el formulario de denuncia de
                      siniestro, firmalo y envialo por mail a:
                      <a
                        href="mailto:denuncias@hipotecarioseguros.com.ar"
                        title="denuncias@hipotecarioseguros.com.ar"
                        style={{ color: "#575756", textDecoration: "none" }}
                      >
                        {" "}
                        denuncias@hipotecarioseguros.com.ar
                      </a>
                    </li>
                  </ol>
                  <h3>¿Quién pueden denunciar un siniestro?</h3>
                  <p>
                    El asegurado, sus beneficiarios y cualquier persona ligada
                    directamente al titular si éste estuviera, por caso de
                    fuerza mayor, imposibilitado de hacerla.
                  </p>
                  <h3>
                    ¿Qué pasa si se produce un siniestro estando impago el
                    premio de la póliza?
                  </h3>
                  <p>
                    La cobertura se suspende en forma automática desde la hora
                    24 del día del vencimiento impago. Verificá en tu póliza la
                    cláusula de cobranza, a fin de evitar un rechazo por falta
                    de pago.
                  </p>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button
                className={`d-flex justify-content-between ${styles.buttonService}`}
                onClick={handleClickFour}
              >
                {displayTextFour ? "Contacto" : "Contacto"}
                <i
                  className={`fa fa-xs fa-chevron-right  ${
                    !displayArrowFour ? "" : styles.rotated
                  }`}
                  style={{ marginTop: "15px", color: "#34BBDA" }}
                  aria-hidden="true"
                ></i>
              </button>
              {!displayTextFour && <div className={styles.divResponsive}></div>}

              {displayTextFour && (
                <div className={`${styles.textPanel}`}>
                  <h3>Contacto</h3>
                  <p>
                    En el caso que tengas dudas comunicate con nosotros y te
                    ayudamos a elegir la mejor opción para vos.
                  </p>
                  <h3>Venta telefónica</h3>
                  <p>0810-666-0101 </p>
                  <br />
                  <p>De lunes a viernes de 9:00 a 21:00 hs</p>
                  <h3>Atención al cliente</h3>
                  <p>0810-666-0101 </p>
                  <br />
                  <p>De lunes a viernes de 8:00 a 20:00 hs</p>
                  <h3>Escribinos</h3>
                  <p>consultas@hipotecarioseguros.com.ar</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
