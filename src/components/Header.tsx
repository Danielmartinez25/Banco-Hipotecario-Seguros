import React from "react";
import Link from "next/link";
import Image from "next/image";
import hipoterioSeguros from "../../public/hipotecarios-seguros.jpg";
import styles from "./Header.module.css"; // Assuming you have a CSS module for styling
export default function Header() {
  return (
    <header className="navbar navbar-expand-lg shadow-sm p-0 position-fixed top-0 start-0 w-100 bg-white">
      <div className={`container ${styles.containerHeader}`}>
        <Link
          href="https://hipotecarioseguros.com.ar/"
          className="navbar-brand d-flex align-items-center p-0"
        >
          <Image
            src={hipoterioSeguros}
            alt="Hipotecario Seguros"
            width={150}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>

        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className={`navbar-toggler-icon ${styles.iconBurger}`}></span>
        </button>

        <div
          className={`collapse navbar-collapse ${styles.navbarCollapse}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center ">
            <li className="nav-item" id={styles.productList}>
              <Link href="#productos" className={`nav-link ${styles.navLink}`}>
                PRODUCTOS
                <i className="fa fa-angle-down"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#beneficios" className={`nav-link ${styles.navLink}`}>
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#faqs" className={`nav-link ${styles.navLink}`}>
                DENUNCIAR SINIESTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#faqs" className={`nav-link ${styles.navLink}`}>
                CONTACTO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#mi cuenta"
                className={`btn ms-lg-3 ${styles.ctaButton}`}
              >
                <i className="fa fa-user pr-1 "></i> MI CUENTA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#P.A.S"
                className={`btn ms-lg-3 ${styles.ctaButtonPas}`}
              >
                P.A.S.<i className="fa fa-angle-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
