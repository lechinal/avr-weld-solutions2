import React from "react";
import styles from "./LegalPages.module.css";

export default function GDPR() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1>Informații GDPR</h1>
        <p>Data ultimei actualizări: 25 Iulie 2025</p>

        <h2>Drepturile Dumneavoastră</h2>
        <p>
          Conform Regulamentului (UE) 2016/679 (GDPR), aveți următoarele
          drepturi în ceea ce privește datele dumneavoastră cu caracter
          personal: dreptul la informare, dreptul de acces la date, dreptul la
          rectificare, dreptul la ștergerea datelor ("dreptul de a fi uitat"),
          etc.
        </p>

        {/* ... Adaugă aici restul conținutului ... */}
      </div>
    </div>
  );
}
