import React from "react";
import Image from "next/image";
import imageHero from "../../public/Hero/imagen-hero.svg";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <>
      <section className={`container ${styles.hipoHero}`}>
        <div className="row">
          <div className="col-12 col-lg-8 order-1 order-lg-2">
            <div className={`${styles.heroText}`}>
              <div className={`d-flex flex-row ${styles.heroTextHeader}`}>
                <Image
                  src={imageHero}
                  alt="image hero"
                  className={styles.imageHero}
                  priority
                />
                <p>¡Nueva protección!</p>
              </div>
              <h1>Respaldá tu economia ante un imprevisto de salud</h1>
              <p>
                Funciona como un complemento al sistema de salud público, obras
                sociales y prepagas y aporta un beneficio adicional para
                utilizarlo como necesites.
              </p>
            </div>
            <div className="d-flex justify-content-center mt-lg-5">
              <form
                className={`p-4 rounded shadow-sm mb-4 ${styles.formHealth}`}
              >
                <span>Simulá tu seguro de salud integral</span>
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Juan"
                      required
                    />
                  </div>

                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="juan@email.com"
                      required
                    />
                  </div>

                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Código de área *
                    </label>
                    <input
                      type="tex"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="0"
                      required
                    />
                  </div>

                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="1123456789"
                      required
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className={styles.formButton}>
                    Simular
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 order-2 order-md-1 mb-4">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <div
                className={`d-flex flex-column align-items-center justify-content-center ${styles.containerHealth}`}
              >
                <div className={styles.cardHead}>
                  <div className={`${styles.health}`}>
                    <p>Salud Integral</p>
                  </div>
                  <div
                    className={`d-flex flex-column justify-content-center align-items-center ${styles.price}`}
                  >
                    <div className="d-flex justify-content-center align-items-center h-50">
                      <span>$</span>
                      <span className={styles.number}>5.185</span>
                      <span>/mes</span>
                    </div>
                    <div>
                      <span className={styles.priceDay}>$172 / día</span>
                    </div>
                  </div>
                  <div className={styles.prepaid}>
                    <p>Ideal para acompañar tu obra social ó prepaga</p>
                  </div>
                </div>
                <div className={styles.plan}>
                  <div className={styles.planItem}>
                    <i
                      className={`fa-solid fa-lg fa-circle-check ${styles.check}`}
                    ></i>
                    <p>Plan individual</p>
                  </div>
                  <div className={styles.planItem}>
                    <i
                      className={`fa-solid fa-lg fa-circle-check ${styles.check}`}
                    ></i>
                    <p>Cobertura desde los 18 años</p>
                  </div>
                  <div className={styles.planItem}>
                    <i
                      className={`fa-solid fa-lg fa-circle-check ${styles.check}`}
                    ></i>
                    <p>Ingreso sin chequeo medico</p>
                  </div>
                  <div className={styles.planItem}>
                    <i
                      className={`fa-solid fa-lg fa-circle-check ${styles.check}`}
                    ></i>
                    <p>Contratación fácil y 100% online</p>
                  </div>
                  <div>
                    <div className={`${styles.priceCard}`}>
                      <span className={styles.cardWord}>Hasta</span>
                    </div>
                    <div
                      className={`d-flex justify-content-between ${styles.priceCard}`}
                    >
                      <p className={styles.cardInfo}>Enfermedades críticas</p>
                      <p className={styles.priceInfo}>$1.750.000</p>
                    </div>
                    <div
                      className={`d-flex justify-content-between ${styles.priceCard}`}
                    >
                      <p className={styles.cardInfo}>Cirugías</p>
                      <p className={styles.priceInfo}>$1.750.000</p>
                    </div>
                    <div
                      className={`d-flex justify-content-between ${styles.priceCard}`}
                    >
                      <p className={styles.cardInfo}>Transplante de órganos</p>
                      <p className={styles.priceInfo}>$3.500.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
