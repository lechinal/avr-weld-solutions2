import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, index }) {
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
      <Link
        to="/services"
        className={`${styles.serviceLink} ${getColorClass(service.color)}`}
      >
        Află mai mult <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
}
