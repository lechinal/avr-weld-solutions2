import styles from "./ProjectVideoPlayer.module.css";

function ProjectVideoPlayer({ videoSrc }) {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <h2 className={styles.videoTitle}>Video Prezentare</h2>
        <div className={styles.videoWrapper}>
          <video className={styles.videoPlayer} controls>
            <source src={videoSrc} type="video/mp4" />
            Browser-ul tău nu suportă tag-ul video.
          </video>
        </div>
      </div>
    </section>
  );
}

export default ProjectVideoPlayer;
