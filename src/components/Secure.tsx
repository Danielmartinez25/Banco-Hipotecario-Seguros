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
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2>Segure</h2>
        <div className="">
          <div
            className={`col ${styles.cardWrapper}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
              <div className={styles.front}>
                <Image
                  src={imageAccident}
                  alt="accident"
                  className={styles.image}
                />
              </div>
              <div className={styles.back}>
                <p className={styles.texto}>¡Este es el texto del reverso!</p>
              </div>
            </div>
          </div>
          <div
            className={`col ${styles.cardWrapper}`}
            onClick={() => setFlippedTwo(!flippedTwo)}
          >
            <div
              className={`${styles.card} ${flippedTwo ? styles.flipped : ""}`}
            >
              <div className={styles.front}>
                <Image src={imageCheck} alt="check" className={styles.image} />
              </div>
              <div className={styles.back}>
                <p className={styles.texto}>¡Este es el texto del reverso!</p>
              </div>
            </div>
          </div>
          <div
            className={`col ${styles.cardWrapper}`}
            onClick={() => setFlippedThree(!flippedThree)}
          >
            <div
              className={`${styles.card} ${flippedThree ? styles.flipped : ""}`}
            >
              <div className={styles.front}>
                <Image
                  src={imageUmbrella}
                  alt="umbrella"
                  className={styles.image}
                />
              </div>
              <div className={styles.back}>
                <p className={styles.texto}>¡Este es el texto del reverso!</p>
              </div>
            </div>
          </div>
          <div
            className={`col ${styles.cardWrapper}`}
            onClick={() => setFlippedTFour(!flippedFour)}
          >
            <div
              className={`${styles.card} ${flippedFour ? styles.flipped : ""}`}
            >
              <div className={styles.front}>
                <Image src={imageBear} alt="bear" className={styles.image} />
              </div>
              <div className={styles.back}>
                <p className={styles.texto}>¡Este es el texto del reverso!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
