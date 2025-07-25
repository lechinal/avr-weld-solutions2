import React from "react";
import styles from "./LegalPages.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1>Termeni și Condiții</h1>
        <p>Data ultimei actualizări: 25 Iulie 2025</p>

        <h2>1. Utilizarea Site-ului</h2>
        <p>
          Prin accesarea și utilizarea acestui site web, sunteți de acord să
          respectați termenii și condițiile prezentate. Acest site este oferit
          ca o sursă de informare despre serviciile noastre.
        </p>

        {/* ... Adaugă aici restul conținutului ... */}
      </div>
    </div>
  );
}
