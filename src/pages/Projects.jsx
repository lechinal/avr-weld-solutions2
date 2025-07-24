import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

import { galleryCategories, galleryItems } from "../data/projectData.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const getCategoryColor = (color) => {
    switch (color) {
      case "primary":
        return styles.colorPrimary;
      case "green":
        return styles.colorGreen;
      case "dark":
        return styles.colorDark;
      default:
        return styles.colorPrimary;
    }
  };

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className={styles.galleryPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Galeria Noastră</h1>
          <p className={styles.heroSubtitle}>
            Descoperiți o selecție din proiectele noastre realizate cu măiestrie
            și atenție la detalii
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filters}>
        <div className={styles.container}>
          <div className={styles.filterButtons}>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  activeCategory === category.id
                    ? styles.filterButtonActive
                    : ""
                } ${getCategoryColor(category.color)}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={styles.galleryItem}
                onClick={() => openModal(item)}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDescription}>
                        {item.description}
                      </p>
                      <div className={styles.itemDetails}>
                        <span className={styles.detail}>{item.details}</span>
                        <span className={styles.year}>{item.year}</span>
                      </div>
                      <button className={styles.viewButton}>
                        Vezi Detalii
                        <span className={styles.arrow}>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalImage}>
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className={styles.modalInfo}>
              <h2 className={styles.modalTitle}>{selectedImage.title}</h2>
              <p className={styles.modalDescription}>
                {selectedImage.description}
              </p>
              <div className={styles.modalDetails}>
                <span className={styles.modalDetail}>
                  {selectedImage.details}
                </span>
                <span className={styles.modalYear}>{selectedImage.year}</span>
              </div>
              <div className={styles.modalActions}>
                <Link to={`/details/${selectedImage.id}`}>
                  <button className={styles.detailsButton}>
                    Vezi Pagina Proiectului
                    <span className={styles.arrow}>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Vă Inspiră Lucrările Noastre?</h2>
          <p className={styles.ctaSubtitle}>
            Contactați-ne pentru a discuta despre proiectul dumneavoastră și să
            vedeți cum vă putem ajuta.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact">
              <button className={styles.ctaPrimaryButton}>
                <span className={styles.buttonIcon}>📞</span>
                Contactează-ne
              </button>
            </Link>
            <Link to="/services">
              <button className={styles.ctaSecondaryButton}>
                Vezi Serviciile
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
