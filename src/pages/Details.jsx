import React from "react";
import { useParams, Link } from "react-router-dom";
// Asigură-te că ai separat datele într-un fișier pentru a le putea importa aici
import { galleryItems } from "../data/projectData.js"; // Calea către fișierul cu datele proiectelor
import styles from "./Details.module.css"; // Vom crea acest fișier CSS

export default function Details() {
  // Extragem 'id'-ul din URL. ex: /details/3 -> id va fi "3"
  const { id } = useParams();

  // Căutăm proiectul în array-ul nostru pe baza id-ului.
  // Folosim `==` în loc de `===` deoarece `id` din URL este un string.
  const project = galleryItems.find((item) => item.id == id);

  // Ce se întâmplă dacă un proiect cu acel id nu există? Afișăm un mesaj.
  if (!project) {
    return (
      <div className={styles.detailsPage}>
        <div className={styles.container}>
          <h1>Proiectul nu a fost găsit</h1>
          <p>
            Ne pare rău, dar nu am găsit detalii pentru proiectul solicitat.
          </p>
          <Link to="/projects">
            <button className={styles.backButton}>Înapoi la Proiecte</button>
          </Link>
        </div>
      </div>
    );
  }

  // Dacă proiectul este găsit, afișăm detaliile sale.
  return (
    <div className={styles.detailsPage}>
      <section className={styles.hero}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.detailsContent}>
          <div className={styles.mainContent}>
            <h2>Descrierea Proiectului</h2>
            <p>{project.description}</p>
            <p>
              Aici poți adăuga o descriere mult mai lungă și detaliată a
              proiectului, specificații tehnice, provocări întâmpinate și
              soluțiile aplicate. Această pagină dedicată îți permite să
              prezinți lucrarea în profunzime.
            </p>
          </div>

          <aside className={styles.sidebar}>
            <h3>Detalii Cheie</h3>
            <ul>
              <li>
                <strong>Anul Finalizării:</strong> {project.year}
              </li>
              <li>
                <strong>Tehnologie Principală:</strong> {project.details}
              </li>
              <li>
                <strong>Client:</strong> Nume Client Fictiv
              </li>
              <li>
                <strong>Durata:</strong> 6 săptămâni
              </li>
            </ul>
            <Link to="/projects">
              <button className={styles.backButton}>
                <span className={styles.arrow}>←</span>
                Înapoi la Toate Proiectele
              </button>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
