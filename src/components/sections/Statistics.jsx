import { STATISTICS } from "../../data/constants";
import styles from "./Statistics.module.css";

function StatCard({ stat }) {
  const getColorClass = (color) => {
    switch (color) {
      case "primary":
        return styles.colorPrimary;
      case "green":
        return styles.colorGreen;
      case "white":
        return styles.colorWhite;
      default:
        return styles.colorPrimary;
    }
  };

  return (
    <div className={styles.statCard}>
      <div className={`${styles.statIcon} ${getColorClass(stat.color)}`}>
        <span>{stat.icon}</span>
      </div>
      <div className={`${styles.statNumber} ${getColorClass(stat.color)}`}>
        {stat.number}
      </div>
      <h3 className={styles.statLabel}>{stat.label}</h3>
      <p className={styles.statDescription}>{stat.description}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Rezultatele Noastre</h2>
          <p className={styles.sectionSubtitle}>
            Cifre care demonstrează experiența și calitatea serviciilor noastre
          </p>
        </div>

        <div className={styles.statsGrid}>
          {STATISTICS.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
