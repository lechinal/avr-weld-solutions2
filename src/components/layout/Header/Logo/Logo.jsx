import { Link } from "react-router-dom";
import styles from "../Header.module.css";
import LogoSvg from "../../../../assets/logoAVR-small.svg?react";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className={styles.logoLink} onClick={onClick}>
      <LogoSvg className={styles.logoSvg} />

      <div className={styles.logoTextContainer}>
        <span className={styles.logoMain}>AVR</span>
        <span className={styles.logoSub}>WELD SOLUTIONS</span>
      </div>
    </Link>
  );
}
