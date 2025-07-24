import { Link } from "react-router-dom";
import { SERVICES, FEATURES } from "../../data/constants";
import styles from "./ServicesOverview.module.css";

function ServiceCard({ service, index }) {
  const getColorClass = (color) => {
    switch (color) {
      case "primary":
        return styles.colorPrimary;
      case "green":
        return styles.colorGreen;
      case "dark":
        return styles.colorDark;
      default:
        return styles.colorPrimary;
    }
  };

  return (
    <div
      className={`${styles.serviceCard} ${
        index === 2 ? styles.serviceCardLarge : ""
      }`}
    >
      <div className={`${styles.serviceIcon} ${getColorClass(service.color)}`}>
        <span>{service.icon}</span>
      </div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <a
        href="#"
        className={`${styles.serviceLink} ${getColorClass(service.color)}`}
      >
        Află mai mult <span className={styles.arrow}>→</span>
      </a>
    </div>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <span>{feature.icon}</span>
      </div>
      <h4 className={styles.featureTitle}>{feature.title}</h4>
      <p className={styles.featureDescription}>{feature.description}</p>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Serviciile Noastre</h2>
          <p className={styles.sectionSubtitle}>
            Oferim soluții complete pentru toate nevoile dvs. de sudură și
            confecții metalice
          </p>
          <div className={styles.titleUnderline} />
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className={styles.ctaSection}>
          <Link to="/services">
            <button className={styles.ctaButton}>
              Vezi Toate Serviciile
              <span className={styles.arrow}>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
