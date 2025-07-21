import { useState } from "react";
import styles from "./Secure.module.css";
import Image from "next/image";
import imageAccident from "../../public/Segure/accident.svg";
import imageBear from "../../public/Segure/bear.svg";
import imageCheck from "../../public/Segure/check.svg";
import imageUmbrella from "../../public/Segure/umbrella.svg";

export default function Segure() {
  const [flipped, setFlipped] = useState(false);
  const [flippedTwo, setFlippedTwo] = useState(false);
  const [flippedThree, setFlippedThree] = useState(false);
  const [flippedFour, setFlippedTFour] = useState(false);
  return (
    <>
      <div className="container">
        <div className={`row justify-content-center ${styles.containerSecure}`}>
          <div className="d-flex justify-content-center">
            <h2 className={`text-center p-4 ${styles.title}`}>
              Contratá tu seguro 100% online, sin trámites
            </h2>
          </div>
          <div
            className={`col-7 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${styles.cardWrapper}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
              <div className={`${styles.front}`}>
                <div className="d-flex justify-content-center mt-4">
                  <Image
                    src={imageAccident}
                    alt="accident"
                    className={` ${styles.image}`}
                    width={150}
                    height={113}
                  />
                </div>
                <div className={`${styles.cardText}`}>
                  <p className={styles.textMarked}>Sumá reintegros</p>
                  <p>por prótesis e internación</p>
                </div>
              </div>
              <div className={styles.back}>
                <p className={styles.text}>
                  Podés sumar a tus coberturas el reintegro por prótesis y renta
                  por internacion diaria
                </p>
              </div>
            </div>
          </div>

          <div
            className={`col-7 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${styles.cardWrapper}`}
            onClick={() => setFlippedTwo(!flippedTwo)}
          >
            <div
              className={` ${styles.card} ${flippedTwo ? styles.flipped : ""}`}
            >
              <div className={` ${styles.front}`}>
                <div className="d-flex justify-content-center mt-4">
                  <Image
                    src={imageCheck}
                    alt="check"
                    className={styles.image}
                    width={150}
                    height={113}
                  />
                </div>
                <div className={`${styles.cardText}`}>
                  <p className={styles.textMarked}>Sin exámenes médicos</p>
                </div>
              </div>
              <div className={styles.back}>
                <p className={styles.text}>
                  Sólo vas a tener que responder unas preguntas de tu salud como
                  declaración jurada
                </p>
              </div>
            </div>
          </div>

          <div
            className={`col-7 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${styles.cardWrapper}`}
            onClick={() => setFlippedThree(!flippedThree)}
          >
            <div
              className={`${styles.card} ${flippedThree ? styles.flipped : ""}`}
            >
              <div className={styles.front}>
                <div className="d-flex justify-content-center mt-4">
                  <Image
                    src={imageUmbrella}
                    alt="umbrella"
                    className={styles.image}
                    width={150}
                    height={113}
                  />
                </div>
                <div className={`${styles.cardText}`}>
                  <p>Cobertura desde</p>
                  <p className={styles.textMarked}>los 18 años</p>
                </div>
              </div>
              <div className={styles.back}>
                <p className={styles.text}>
                  La edad de contratación es de 18 a 64 y de permanencia hasta
                  los 65
                </p>
              </div>
            </div>
          </div>

          <div
            className={`col-7 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${styles.cardWrapper}`}
            onClick={() => setFlippedTFour(!flippedFour)}
          >
            <div
              className={`${styles.card} ${flippedFour ? styles.flipped : ""}`}
            >
              <div className={styles.front}>
                <div className="d-flex justify-content-center mt-4">
                  <Image
                    src={imageBear}
                    alt="bear"
                    className={styles.image}
                    width={150}
                    height={113}
                  />
                </div>
                <div className={`${styles.cardText}`}>
                  <p className={styles.textMarked}>Todo on line,</p>
                  <p className={styles.textMarked}>incluso tu póliza</p>
                </div>
              </div>
              <div className={`${styles.back}`}>
                <p className={styles.text}>
                  Contratás y tu póliza las podés ver on line. Tenemos un portal
                  de autogestión para vos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
