import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Pagina Nu A Fost Găsită</h1>
          <p className={styles.message}>
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost
            mutată.
          </p>
          <div className={styles.buttons}>
            <Link href="/">
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>🏠</span>
                Înapoi Acasă
              </button>
            </Link>
            <Link href="/contact">
              <button className={styles.secondaryButton}>
                Contactează-ne
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>

          <div className={styles.suggestions}>
            <h2 className={styles.suggestionsTitle}>Pagini Utile:</h2>
            <div className={styles.suggestionsList}>
              <Link href="/services" className={styles.suggestionLink}>
                <span className={styles.linkIcon}>🔧</span>
                <span>Serviciile Noastre</span>
              </Link>
              <Link href="/projects" className={styles.suggestionLink}>
                <span className={styles.linkIcon}>📸</span>
                <span>Galeria de Proiecte</span>
              </Link>
              <Link href="/about" className={styles.suggestionLink}>
                <span className={styles.linkIcon}>ℹ️</span>
                <span>Despre Noi</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.weldingIcon}>⚡</div>
          <div className={styles.sparks}>
            <span className={styles.spark}>✨</span>
            <span className={styles.spark}>✨</span>
            <span className={styles.spark}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
}
