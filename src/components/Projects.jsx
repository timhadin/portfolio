import styles from "./Projects.module.css";

function Projects({ projectRef }) {
  return (
    <section ref={projectRef} className={styles.projectsSection}>
      <div className={styles.content}>
        <h2>PROJECTS</h2>
        <div className={styles.projectGrid}>{/* Project cards here */}</div>
      </div>
    </section>
  );
}

export default Projects;