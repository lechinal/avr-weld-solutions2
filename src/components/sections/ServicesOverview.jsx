import { Link } from "react-router-dom";
import { SERVICES, FEATURES } from "../../data/constants";
import styles from "./ServicesOverview.module.css";

import ServiceCard from "../layout/ServiceCard/ServiceCard.jsx";
import FeatureCard from "../layout/FeatureCard/FeatureCard.jsx";

export default function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Serviciile Noastre</h2>
          <p className={styles.sectionSubtitle}>
            Oferim soluții complete pentru toate nevoile dvs. de sudură și
            confecții metalice.
          </p>
          <div className={styles.titleUnderline} />
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* CTA Section */}
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
