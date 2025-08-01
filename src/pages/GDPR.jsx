import React from "react";
import styles from "./LegalPages.module.css";

export default function GDPR() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1>Informații privind Drepturile GDPR</h1>
        <p>Data ultimei actualizări: 1 August 2025</p>

        <h2>Drepturile Dumneavoastră Conform GDPR</h2>
        <p>
          În conformitate cu Regulamentul (UE) 2016/679 (Regulamentul General
          privind Protecția Datelor), aveți următoarele drepturi în ceea ce
          privește datele dumneavoastră cu caracter personal pe care le
          prelucrăm:
        </p>
        <ul className={styles.gdprList}>
          <li>
            <strong>Dreptul la acces:</strong> Puteți solicita o copie a datelor
            personale pe care le deținem despre dumneavoastră.
          </li>
          <li>
            <strong>Dreptul la rectificare:</strong> Puteți solicita corectarea
            oricăror date incorecte sau incomplete.
          </li>
          <li>
            <strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Ne
            puteți solicita să ștergem datele dumneavoastră personale în anumite
            circumstanțe.
          </li>
          <li>
            <strong>Dreptul la restricționarea prelucrării:</strong> Puteți
            solicita limitarea modului în care prelucrăm datele dumneavoastră.
          </li>
          <li>
            <strong>Dreptul la portabilitatea datelor:</strong> Puteți solicita
            să vă transferăm datele pe care le deținem către o altă organizație
            sau direct către dumneavoastră.
          </li>
          <li>
            <strong>Dreptul la opoziție:</strong> Vă puteți opune prelucrării
            datelor dumneavoastră în anumite situații, de exemplu, în scopuri de
            marketing direct.
          </li>
          <li>
            <strong>Dreptul de a retrage consimțământul:</strong> Dacă
            prelucrarea se bazează pe consimțământul dumneavoastră, îl puteți
            retrage în orice moment.
          </li>
        </ul>

        <h2>Cum vă Puteți Exercita Drepturile</h2>
        <p>
          Pentru a vă exercita oricare dintre aceste drepturi, vă rugăm să ne
          contactați la adresa de e-mail:{" "}
          <a href="mailto:avrweldsolutions@gmail.com">
            avrweldsolutions@gmail.com
          </a>
          .
        </p>

        <h2>Dreptul de a Depune o Plângere</h2>
        <p>
          Dacă considerați că prelucrarea datelor dumneavoastră a încălcat
          legislația GDPR, aveți dreptul de a depune o plângere la autoritatea
          de supraveghere competentă. În România, aceasta este Autoritatea
          Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal
          (ANSPDCP).
        </p>
      </div>
    </div>
  );
}
