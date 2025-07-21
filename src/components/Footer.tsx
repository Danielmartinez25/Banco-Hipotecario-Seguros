import Image from "next/image";
import imageBanco from "../../public/Footer/banco-hipotecario.svg";
import styles from "../components/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className="container">
          <div className="row pt-4 py-lg-5">
            <div className="col-12 text-center col-lg-2 d-flex flex-column align-items-center">
              <Image
                src={imageBanco}
                alt="banco-hipotecario"
                className={styles.bancoImg}
              />
              <div
                className={`d-flex flex-column align-items-start py-4 ${styles.infoContact}`}
              >
                <p>CENTRO DE ATENCIÓN TELEFONICA</p>
                <a href="">0810-666-0101</a>
                <span>De Lunes a Viernes de 9:00 a 21:00 hs</span>
              </div>
              <div className="mb-3">
                <Link href={""}>
                  <i className={`${styles.icon} fa-brands fa-facebook-f`}></i>
                </Link>
                <Link href={""}>
                  <i className={`${styles.icon} fa-brands fa-instagram`}></i>
                </Link>
                <Link href={""}>
                  <i className={`${styles.icon} fa-brands fa-youtube`}></i>
                </Link>
                <Link href={""}>
                  <i className={`${styles.icon} fa-brands fa-linkedin-in`}></i>
                </Link>
              </div>
              <div className="text-center">
                <p className={styles.textRights}>
                  Todos los derechos reservados. <br />© 2025 Es marca
                  registrada.
                </p>
              </div>
            </div>
            <div className={`col-12 col-md-3 col-lg-2 ${styles.textCompany}`}>
              <p className={styles.companyTitle}>EMPRESA</p>
              <ul>
                <li>
                  <a title="Quienes somos" className="" href="/empresa">
                    Quienes somos
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hipotecario.com.ar/"
                    title="Banco Hipotecario"
                    target="_blank"
                  >
                    Banco Hipotecario
                  </a>
                </li>
                <li>
                  <a
                    href="https://hipotecario.hiringroom.com/jobs/microsite/hipotecarioseguros"
                    title="Trabajá en HS"
                    target="_blank"
                  >
                    Trabajá en HS
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-12 col-md-3 col-lg-2 ${styles.textSecure}`}>
              <p className={styles.secureTitle}>SEGUROS</p>
              <ul className="">
                <li>
                  <a
                    title="Hogar"
                    className=""
                    href="https://asegurate.hipotecarioseguros.com.ar/producto/hogar-estandar"
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    title="Accidentes personales"
                    className=""
                    href="/productos/seguros/accidentes-personales"
                  >
                    Accidentes personales
                  </a>
                </li>
                <li>
                  <a
                    title="Bienes móviles"
                    className=""
                    href="/productos/seguros/bienes-moviles"
                  >
                    Bienes móviles
                  </a>
                </li>
                <li>
                  <a title="Salud" className="" href="/productos/seguros/salud">
                    Salud
                  </a>
                </li>
                <li>
                  <a
                    title="Salud"
                    className=""
                    href="/productos/seguros/caucion"
                  >
                    Caución
                  </a>
                </li>
                <li>
                  <a
                    title="Movilidad"
                    className=""
                    href="https://asegurate.hipotecarioseguros.com.ar/producto/cotizador/movilidad"
                  >
                    Movilidad
                  </a>
                </li>
                <li>
                  <a title="Asistencias" className="" href="/asistencias">
                    Asistencias
                  </a>
                </li>
                <li>
                  <a
                    title="Condiciones generales"
                    target="_blank"
                    className=""
                    href="/documents/CCGG%20Salud.pdf"
                  >
                    Condiciones generales
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-12 col-md-3 col-lg-2 ${styles.textService}`}>
              <p className={styles.serviceTitle}>SERVICIOS</p>
              <ul className="">
                <li>
                  <a
                    title="Siniestros"
                    target="_blank"
                    className=""
                    href="https://autogestion.hipotecarioseguros.com.ar/"
                  >
                    Mi cuenta
                  </a>
                </li>
                <li>
                  <a title="Siniestros" className="" href="/siniestros">
                    Denunciar siniestro
                  </a>
                </li>
                <li>
                  <a title="Blog" className="" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    title="Preguntas frecuente"
                    className=""
                    href="/preguntas-frecuentes"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a title="Contacto" className="" href="/contacto">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    title="Servicio de Atención al Asegurado (SAA)"
                    className=""
                    href="/servicio-de-atencion-al-asegurado"
                  >
                    {" "}
                    Servicio de Atención al Asegurado (SAA)
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-12 col-md-3 col-lg-2 ${styles.textLegal}`}>
              <p className={styles.legalTitle}>LEGAL</p>
              <ul className="">
                <li>
                  <a
                    href="https://autogestion.hipotecarioseguros.com.ar/"
                    title="Solicitud de baja"
                    target="_blank"
                  >
                    Botón de arrepentimiento / baja
                  </a>
                </li>
                <li>
                  <a
                    title="Defensa del consumidor"
                    className=""
                    href="/defensa-del-consumidor"
                  >
                    Defensa del consumidor
                  </a>
                </li>
                <li>
                  <a
                    title="Términos y condiciones"
                    className=""
                    href="/terminos-y-condiciones/generales"
                  >
                    Términos y condiciones: BHN Seguros Generales
                  </a>
                </li>
                <li>
                  <a
                    title="Términos y condiciones"
                    className=""
                    href="/terminos-y-condiciones/vida"
                  >
                    Términos y condiciones: BHN Vida
                  </a>
                </li>
                <li>
                  <a
                    title="Res. N° 35.678 SSN"
                    className=""
                    href="/resolucion-nro-35678-s-s-n"
                  >
                    Res. N° 35.678 SSN
                  </a>
                </li>
                <li>
                  <a title="Clientes PEP" className="" href="/clientes-pep">
                    Clientes PEP
                  </a>
                </li>
                <li>
                  <a
                    title="Protección de datos personales SSN"
                    className=""
                    href="/proteccion-de-datos-personales"
                  >
                    Protección de datos personales SSN
                  </a>
                </li>
                <li>
                  <a
                    title="Prevención del fraude"
                    className=""
                    href="/prevencion-de-fraude"
                  >
                    Prevención del fraude
                  </a>
                </li>
                <li>
                  <a
                    title="Libro de quejas, agradecimientos, sugerencias y reclamos"
                    className=""
                    href="/contacto"
                  >
                    Libro de quejas, agradecimientos, sugerencias y reclamos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
