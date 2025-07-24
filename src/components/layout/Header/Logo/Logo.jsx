import { Link } from "react-router-dom";
import styles from "../Header.module.css";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className={styles.logoLink} onClick={onClick}>
      <div className={styles.logo}>
        <span className={styles.logoMain}>AVR</span>
        <span className={styles.logoSub}>WELD SOLUTIONS</span>
      </div>
    </Link>
  );
}
