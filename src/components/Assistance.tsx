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
      <div
        className={`d-flex flex-wrap justify-content-center align-items-center p-3 m-4 ${styles.assistance}`}
      >
        <h2 className={styles.title}>Asistencias para tu tranquilidad</h2>
        <div className={styles.divResponsive}></div>
        <div className={`d-flex flex-wrap justify-content-center`}>
          <div>
            <Image
              src={imageTablet}
              alt="tablet assistance"
              width={108}
              height={110}
            />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Reintegro en farmacias</p>
            <p className={styles.textParagraph}>
              1 medicamento recetado al mes. Hasta $8000 cada uno.
            </p>
          </div>
        </div>
        <div className={`d-flex flex-wrap justify-content-center`}>
          <div>
            <Image src={imageTooth} alt="tooth" width={100} height={100} />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Reintegro en Odontología</p>
            <p className={styles.textParagraph}>
              2 consultas o limpieza por año. Hasta $19.000 cada una
            </p>
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <div>
            <Image
              src={imageLaboratory}
              alt="laboratory assistance"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Estudios de laboratorio</p>
            <p className={styles.textParagraph}>
              4 veces por año. Hasta $8000 cada uno.
            </p>
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <div>
            <Image
              src={imageNurse}
              alt="nurse assistance"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Médico clínico a domicilio</p>
            <p className={styles.textParagraph}>Hasta 6 visitas por año</p>
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <div>
            <Image
              src={imageComputer}
              alt="computer assistance"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Telemedicina para grupo familiar</p>
            <p className={styles.textParagraph}>
              Atención 24hs online para consultas y recetas.
            </p>
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <div>
            <Image
              src={imageCheck}
              alt="check assistance"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <p className={styles.textTitle}>Chequeos preventivos</p>
            <p className={styles.textParagraph}>
              2 veces al año. Hasta $29.000 cada uno
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
