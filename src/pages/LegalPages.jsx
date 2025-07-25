import React from "react";
import styles from "./LegalPages.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1>Politică de Confidențialitate</h1>
        <p>Data ultimei actualizări: 25 Iulie 2025</p>

        <h2>1. Ce date colectăm?</h2>
        <p>
          Atunci când utilizați formularul nostru de contact, colectăm
          următoarele date pe care ni le furnizați voluntar: nume, adresă de
          e-mail, număr de telefon și orice alte informații pe care le includeți
          în mesajul dumneavoastră.
        </p>

        <h2>2. Cum folosim datele?</h2>
        <p>
          Folosim datele colectate exclusiv pentru a răspunde solicitărilor și
          întrebărilor dumneavoastră. Nu vom folosi datele dumneavoastră în
          scopuri de marketing fără consimțământul dumneavoastră explicit și nu
          le vom vinde niciodată unor terțe părți.
        </p>

        {/* ...   restul conținutului ... */}
      </div>
    </div>
  );
}
