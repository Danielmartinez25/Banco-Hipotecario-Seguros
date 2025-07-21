import React from "react";
import Link from "next/link";
import Image from "next/image";
import hipotecarioSeguros from "../../public/hipotecarios-seguros.jpg";
import styles from "./Header.module.css"; // Assuming you have a CSS module for styling
export default function Header() {
  return (
    <header
      className="navbar navbar-expand-lg shadow-sm p-0 position-fixed top-0 start-0 w-100 bg-white"
      style={{ zIndex: "999" }}
    >
      <div className={`container ${styles.containerHeader}`}>
        <Link
          href="https://hipotecarioseguros.com.ar/"
          className="navbar-brand d-flex align-items-center p-0"
        >
          <Image
            src={hipotecarioSeguros}
            alt="Hipotecario Seguros"
            className={styles.logo}
            priority
            height={79}
          />
        </Link>

        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className={styles.iconBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>

        <div
          className={`collapse navbar-collapse ${styles.navbarCollapse}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center ">
            <li className="nav-item">
              <Link
                id={styles.product}
                href="https://hipotecarioseguros.com.ar/"
                className={`nav-link ${styles.navLink}`}
              >
                Productos
                <i className={`fa fa-angle-down`}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id={styles.linkNav}
                href="https://hipotecarioseguros.com.ar/blog"
                className={`nav-link ${styles.navLink}`}
              >
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id={styles.linkNav}
                href="https://hipotecarioseguros.com.ar/siniestros"
                className={`nav-link ${styles.navLink}`}
              >
                DENUNCIAR SINIESTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id={styles.linkNav}
                href="https://hipotecarioseguros.com.ar/contacto"
                className={`nav-link ${styles.navLink}`}
              >
                CONTACTO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://autogestion.hipotecarioseguros.com.ar/"
                className={`btn ms-lg-3 ${styles.ctaButton}`}
              >
                <i className="fa fa-user pr-1 "></i> MI CUENTA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://hipotecarioseguros.com.ar/"
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
