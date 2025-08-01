import styles from "./FeatureCard.module.css"; // Vom crea acest fișier

export default function FeatureCard({ feature }) {
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
