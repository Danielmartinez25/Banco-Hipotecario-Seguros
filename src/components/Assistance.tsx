import Image from "next/image";
import imageCheck from "../../public/Assistance/checkups.svg";
import imageComputer from "../../public/Assistance/computer.svg";
import imageTooth from "../../public/Assistance/tooth.svg";
import imageNurse from "../../public/Assistance/nurse.svg";
import imageTablet from "../../public/Assistance/tablet.svg";
import imageLaboratory from "../../public/Assistance/laboratory.svg";
import styles from "./Assistance.module.css";

export default function Assistance() {
  return (
    <>
      <div className="container">
        <div className={`row p-3 m-2 ${styles.assistance}`}>
          <h2 className={styles.title}>Asistencias para tu tranquilidad</h2>
          <div className={styles.divResponsive}></div>
          <div className="col-12 col-lg-4 pt-3">
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageTablet}
                  alt="tablet assistance"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className={`text-center text-md-start`}>
                <p className={styles.textTitle}>Reintegro en farmacias</p>
                <p className={styles.textParagraph}>
                  1 medicamento recetado al mes. Hasta $8000 cada uno.
                </p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 pt-4`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageTooth}
                  alt="tooth"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className={`text-center text-md-start`}>
                <p className={styles.textTitle}>Reintegro en Odontología</p>
                <p className={styles.textParagraph}>
                  2 consultas o limpieza por año. Hasta $19.000 cada una
                </p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 pt-3`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageLaboratory}
                  alt="laboratory assistance"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className={`text-center text-md-start`}>
                <p className={styles.textTitle}>Estudios de laboratorio</p>
                <p className={styles.textParagraph}>
                  4 veces por año. Hasta $8000 cada uno.
                </p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 pt-3`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageNurse}
                  alt="nurse assistance"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className="text-center text-md-start">
                <p className={styles.textTitle}>Médico clínico a domicilio</p>
                <p className={styles.textParagraph}>Hasta 6 visitas por año</p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 pt-3`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageComputer}
                  alt="computer assistance"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className="text-center text-md-start">
                <p className={styles.textTitle}>
                  Telemedicina para grupo familiar
                </p>
                <p className={styles.textParagraph}>
                  Atención 24hs online para consultas y recetas.
                </p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-lg-4 pt-3`}>
            <div
              className={`d-flex flex-column flex-md-row align-items-center h-100`}
            >
              <div className="col-lg-4 col-md-4 col-sm-12 col-3">
                <Image
                  src={imageCheck}
                  alt="check assistance"
                  width={108}
                  height={110}
                  className={styles.cardImg}
                />
              </div>
              <div className="text-center text-md-start">
                <p className={styles.textTitle}>Chequeos preventivos</p>
                <p className={styles.textParagraph}>
                  2 veces al año. Hasta $29.000 cada uno
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
