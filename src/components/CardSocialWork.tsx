import Image from "next/image";
import handPrice from "../../public/CardSocialWork/hand-price.svg";
import handMedical from "../../public/CardSocialWork/list.svg";
import styles from "./CardSocialWork.module.css";
export default function CardSocialWork() {
  return (
    <>
      <div className="container">
        {" "}
        <div
          className={` d-flex flex-column  flex-lg-row m-2 h-50	${styles.cardSocialWork}`}
        >
          <div
            className={` d-flex flex-row align-items-center w-100 w-lg-50 me-lg-3 mb-4 mb-lg-0 ${styles.cardPrice}`}
          >
            <Image src={handPrice} alt="Obra Social" width={100} height={100} />
            <div className={`${styles.textPrice}`}>
              <h3 className={styles.title}>
                Te pagamos los gastos que tu obra social no te cubre
              </h3>
              <p>¿Quién va a pagar los viáticos?</p>
              <p>¿Quién le paga a la niñera?</p>
              <p>¿Quién te cuida?</p>
            </div>
          </div>
          <div
            className={` d-flex flex-row align-items-center w-100 w-lg-50 ${styles.cardList}`}
          >
            <Image
              src={handMedical}
              alt="Asistencia médica"
              width={100}
              height={100}
            />
            <div className={`${styles.textList}`}>
              <h3 className={styles.titleList}>
                Si no tenés cobertura de salud, nosotros te asistimos
              </h3>
              <p>Ante una urgencia, tenemos prestadores que pueden ayudarte</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
