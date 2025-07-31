import { Link } from "react-router-dom";
import { SERVICES, FEATURES } from "../data/constants";
import styles from "./Services.module.css";

const detailedServices = [
  {
    ...SERVICES[0],
    details: [
      "Sudură TIG (Tungsten Inert Gas)",
      "Sudură MIG/MAG (Metal Inert/Active Gas)",
      "Sudură cu electrozi înveliți",
      "Sudură sub flux",
      "Sudură în atmosphere protectoare",
      "Reparații și consolidări metalice",
    ],
    applications: [
      "Industria petrochimică",
      "Construcții navale",
      "Infrastructură",
      "Echipamente industriale",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    ...SERVICES[1],
    details: [
      "Tăiere cu plasmă și laser",
      "Îndoire și profilere",
      "Asamblare structuri metalice",
      "Finisare și tratamente de suprafață",
      "Controlul calității",
      "Proiectare asistată de calculator",
    ],
    applications: [
      "Construcții metalice",
      "Echipamente pentru industrie",
      "Mobilier urban",
      "Soluții personalizate",
    ],
    image:
      "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
  {
    ...SERVICES[2],
    details: [
      "Transport de echipamente grele",
      "Manipulare specializată",
      "Echipaje cu experiență",
      "Asigurări complete",
      "Urmărire în timp real",
      "Consultanță logistică",
    ],
    applications: [
      "Mașini-unelte industriale",
      "Structuri prefabricate",
      "Echipamente pentru șantiere",
      "Transport național",
    ],
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  },
];

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Serviciile Noastre</h1>
          <p className={styles.heroSubtitle}>
            Soluții complete de sudură și confecții metalice pentru toate
            nevoile industriale
          </p>
          <div className={styles.heroButtons}>
            <Link to="/contact">
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>📞</span>
                Solicită Ofertă
              </button>
            </Link>
            <Link to="/projects">
              <button className={styles.secondaryButton}>
                Vezi Proiectele
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className={styles.detailedServices}>
        <div className={styles.container}>
          {detailedServices.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceDetail} ${
                index % 2 === 1 ? styles.serviceDetailReverse : ""
              }`}
            >
              {/* Content */}
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceEmoji}>{service.icon}</span>
                  <span className={styles.serviceBadge}>
                    Serviciu Principal
                  </span>
                </div>

                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.serviceDetails}>
                  <h3 className={styles.detailsTitle}>Ce oferim:</h3>
                  <div className={styles.detailsList}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className={styles.detailItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.applicationsList}>
                  <h3 className={styles.detailsTitle}>Aplicații:</h3>
                  <div className={styles.applications}>
                    {service.applications.map((app, idx) => (
                      <span key={idx} className={styles.applicationTag}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <button className={styles.serviceButton}>
                    Solicită Detalii
                    <span className={styles.arrow}>→</span>
                  </button>
                </Link>
              </div>

              {/* Image */}
              <div className={styles.serviceImage}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.image}
                />
                <div className={styles.premiumBadge}>
                  <span className={styles.star}>★</span>
                  <span>Premium</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>De Ce Să Ne Alegeți</h2>
            <p className={styles.featuresSubtitle}>
              Avantajele care ne diferențiază în industria sudurilor și
              confecțiilor metalice
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Gata să Începem Proiectul?</h2>
          <p className={styles.ctaSubtitle}>
            Contactați-ne astăzi pentru o consultație gratuită și o ofertă
            personalizată pentru proiectul dumneavoastră.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact">
              <button className={styles.ctaPrimaryButton}>
                <span className={styles.buttonIcon}>📞</span>
                Contactează-ne Acum
              </button>
            </Link>
            <Link href="/gallery">
              <button className={styles.ctaSecondaryButton}>
                Vezi Lucrările Noastre
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
