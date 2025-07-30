import React from "react";
import { useParams, Link } from "react-router-dom";
import { galleryItems } from "../data/projectData.js";
import styles from "./ProjectsDetails.module.css";
import ProjectImageGallery from "../components/layout/ProjectImageGallery/ProjectImageGallery.jsx";
import ProjectVideoPlayer from "../components/layout/ProjectVideoPlayer/ProjectVideoPlayer.jsx";
// import SuduraVideo from "../../src/assets/videos/videoOneLakeDistrictBucuresti.mp4?url";

export default function ProjectsDetails() {
  const { id } = useParams();

  const project = galleryItems.find((item) => item.id == id);

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
                <strong>Client:</strong> {project.client}
              </li>
              <li>
                <strong>Locatie:</strong>
                {project.location}
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
      <div className={styles.galleryImages}>
        <ProjectImageGallery
          images={project.galleryImages}
          title={project.title}
          client={project.client}
        />
        {project.video && <ProjectVideoPlayer videoSrc={project.video} />}
      </div>
    </div>
  );
}
