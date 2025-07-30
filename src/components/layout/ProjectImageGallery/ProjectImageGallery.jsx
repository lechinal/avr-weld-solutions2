import styles from "./ProjectImageGallery.module.css";

function ProjectImageGallery({ images, title, client }) {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.galleryTitle}>{title}</h2>
        <h4 className={styles.gallerySubtitle}>{client}</h4>
        <div className={styles.galleryGrid}>
          {images.map((imgUrl, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={imgUrl}
                alt={`Imagine ${index + 1} din galerie`}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectImageGallery;
