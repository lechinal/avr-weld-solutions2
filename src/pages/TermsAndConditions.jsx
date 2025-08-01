// src/pages/Legal/TermsAndConditions.jsx

import React from "react";
import styles from "../pages/TermsAndConditions.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1>TERMENI ȘI CONDIȚII</h1>
        <p>Data ultimei actualizări: 1 August 2025</p>

        <h2 id="agreement">ACORDUL PRIVIND TERMENII NOȘTRI LEGALI</h2>
        <p>
          Noi suntem AVR WELD SOLUTIONS ("Companie," "noi," "nouă," "nostru"), o
          companie înregistrată în România la adresa Al. G. Golescu nr 42, Blaj,
          Alba 515400.
        </p>
        <p>
          Operăm site-ul web{" "}
          <a href="http://www.avr-weld-solutions.ro">
            http://www.avr-weld-solutions.ro
          </a>{" "}
          (denumit în continuare "Site-ul"), precum și orice alte produse și
          servicii conexe care fac referire sau se leagă de acești termeni
          legali (denumite în continuare "Termenii Legali") (colectiv,
          "Serviciile").
        </p>
        <p>
          Ne puteți contacta prin e-mail la avrweldsolutions@gmail.com sau prin
          poștă la Al. G. Golescu nr 42, Blaj, Alba 515400, România.
        </p>
        <p>
          Acești Termeni Legali constituie un acord cu forță juridică
          obligatorie încheiat între dumneavoastră, fie personal, fie în numele
          unei entități ("dumneavoastră"), și AVR WELD SOLUTIONS, privind
          accesul și utilizarea Serviciilor. Sunteți de acord că, prin accesarea
          Serviciilor, ați citit, ați înțeles și ați fost de acord să fiți legat
          de toți acești Termeni Legali. DACĂ NU SUNTEȚI DE ACORD CU TOȚI ACEȘTI
          TERMENI LEGALI, ATUNCI VI SE INTERZICE EXPRES UTILIZAREA SERVICIILOR
          ȘI TREBUIE SĂ ÎNCETAȚI UTILIZAREA IMEDIAT.
        </p>

        <h2 id="ip">2. DREPTURI DE PROPRIETATE INTELECTUALĂ</h2>
        <p>
          Suntem proprietarul sau licențiatul tuturor drepturilor de proprietate
          intelectuală asupra Serviciilor noastre, inclusiv tot codul sursă,
          bazele de date, funcționalitatea, software-ul, designurile site-ului
          web, audio, video, text, fotografii și grafice din Servicii (colectiv,
          "Conținutul"), precum și mărcile comerciale, mărcile de servicii și
          logo-urile conținute în acestea ("Mărcile").
        </p>
        <p>
          Conținutul și Mărcile sunt furnizate în sau prin intermediul
          Serviciilor "AȘA CUM SUNT" doar pentru uzul dumneavoastră personal,
          necomercial sau pentru scopuri de afaceri interne.
        </p>

        <h2 id="userreps">3. REPREZENTĂRILE UTILIZATORULUI</h2>
        <p>
          Prin utilizarea Serviciilor, reprezentați și garantați că: (1) aveți
          capacitatea legală și sunteți de acord să respectați acești Termeni
          Legali; (2) nu sunteți minor în jurisdicția în care locuiți sau, dacă
          sunteți minor, ați primit permisiunea părinților pentru a utiliza
          Serviciile; (3) nu veți accesa Serviciile prin mijloace automate sau
          non-umane, fie printr-un bot, script sau altfel; (4) nu veți utiliza
          Serviciile pentru niciun scop ilegal sau neautorizat; și (5)
          utilizarea de către dumneavoastră a Serviciilor nu va încălca nicio
          lege sau reglementare aplicabilă.
        </p>

        <h2 id="prohibited">4. ACTIVITĂȚI INTERZISE</h2>
        <p>
          Nu puteți accesa sau utiliza Serviciile în niciun alt scop decât cel
          pentru care le punem la dispoziție. Serviciile nu pot fi utilizate în
          legătură cu nicio activitate comercială, cu excepția celor care sunt
          aprobate sau susținute în mod specific de noi.
        </p>
        {/* Puteți adăuga aici o listă <ul> cu activitățile interzise, dacă doriți să le detaliați */}

        <h2 id="thirdparty">5. SITE-URI WEB ȘI CONȚINUT DE LA TERȚI</h2>
        <p>
          Serviciile pot conține link-uri către alte site-uri web ("Site-uri Web
          Terțe"), precum și articole, fotografii, text și alt conținut
          aparținând sau provenind de la terți ("Conținut Terț"). Astfel de
          Site-uri Web Terțe și Conținut Terț nu sunt investigate, monitorizate
          sau verificate de noi pentru acuratețe, și nu suntem responsabili
          pentru acestea.
        </p>

        {/* ... CONTINUĂ SĂ ADĂUGI RESTUL SECȚIUNILOR ÎN ACELAȘI MOD ... */}
        {/* Exemplu: */}
        <h2 id="law">6. LEGEA APLICABILĂ</h2>
        <p>
          Acești Termeni Legali sunt guvernați și interpretați în conformitate
          cu legile din România.
        </p>

        <h2 id="contact">7. CONTACT</h2>
        <p>
          Pentru a rezolva o plângere referitoare la Servicii sau pentru a primi
          informații suplimentare, vă rugăm să ne contactați la:
        </p>
        <p>
          <strong>AVR WELD SOLUTIONS</strong>
          <br />
          Alexandru Gh. Golescu nr 42
          <br />
          Blaj, Alba 515400
          <br />
          România
          <br />
          avrweldsolutions@gmail.com
        </p>
      </div>
    </div>
  );
}
