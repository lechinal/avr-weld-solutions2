import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.floatingElement1} />
      <div className={styles.floatingElement2} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>AVR</span>
            <span className={styles.titleSecondary}>WELD SOLUTIONS</span>
          </h1>
          {/* <h4>Locul unde Metalul Prinde Viață.</h4>
          <h4>Montaje și Reparații Tuberie Industrială, Structuri Metalice</h4> */}

          <p className={styles.subtitle}>
            Soluții profesionale de sudură și confecții metalice pentru toate
            nevoile industriale. Experiență de peste 25 ani în domeniu cu
            echipamente moderne și certificări internaționale.
          </p>
          {/* <p className={styles.subtitle}>
            Serviciile de sudură a confecțiilor metalice sunt esențiale pentru o
            gamă largă de industrii, inclusiv construcții, manufacturare, auto,
            aeronautică, navală și multe altele. Suntem specializați în sudura
            diferitelor tipuri de confecții metalice, precum și în producția
            acestora, oferind soluții personalizate pentru nevoile fiecărui
            client.
          </p> */}

          <div className={styles.buttons}>
            <Link to="/contact">
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>📞</span>
                Solicită Ofertă
              </button>
            </Link>
            <Link to="/services">
              <button className={styles.secondaryButton}>
                Serviciile Noastre
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button className={styles.scrollIndicator} onClick={scrollToServices}>
        <span className={styles.arrow}>↓</span>
      </button>
    </section>
  );
}
