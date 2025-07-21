import Image from "next/image";
import imageComputer from "../../public/Health/computer.svg";
import imageCheck from "../../public/Health/check.svg";
import imageBear from "../../public/Health/bear.svg";
import imageHeart from "../../public/Health/heart.svg";
import miniHome from "../../public/Health/minihome.png";
import styles from "./Health.module.css";
export default function Health() {
  return (
    <>
      <div className={`${styles.healthContainer}`}>
        <div className="container d-flex flex-column align-items-center p-3 p-md-4 p-lg-5">
          <h2 className={styles.title}>
            Más asistencias en tu seguro de salud
          </h2>
          <strong>Te acompañamos desde la prevención</strong>
          <p className={styles.description}>
            No esperes a que te pase algo para usar todos los beneficios que
            tenemos
          </p>
          <div className={`row mb-1 mt-4 w-100`}>
            <div className={`col-6 col-lg-3 mb-3 ${styles.boxHealth}`}>
              <Image alt="heart" src={imageHeart} width={106} height={79} />
              <p>Sesiones de psicología</p>
            </div>
            <div className={`col-6 col-lg-3 mb-3 ${styles.boxHealth}`}>
              <Image
                alt="computer"
                src={imageComputer}
                width={106}
                height={79}
              />
              <p>Chequeos anuales</p>
            </div>
            <div className={`col-6 col-lg-3 mb-3 ${styles.boxHealth}`}>
              <Image alt="check" src={imageCheck} width={106} height={79} />
              <p>Recetas y órdenes</p>
            </div>
            <div className={`col-6 col-lg-3 mb-3 ${styles.boxHealth}`}>
              <Image alt="bear" src={imageBear} width={106} height={79} />
              <p>Sesiones de psicología</p>
            </div>
          </div>
          <div className={styles.boxLink}>
            <a
              href="https://hipotecarioseguros.com.ar/documents/asistencias-medica-salud-integral.pdf"
              target="_blank"
            >
              <Image src={miniHome} alt="mini-home" />
              Ver PDF completo de asistencia
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
