import styles from "./About.module.css";

function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      className={styles.aboutSection}
    >
      <div className={styles.content}>
        <h2>ABOUT ME</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutItem}>
            <h3>EDUCATION</h3>
            <p>• 선문대학교 국제레저관광학과</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>EXPERIENCE</h3>
            <p>• 에스원씨알엠(주) : 2022.09 ~ 2024.08</p>
            <p>• 장애인 디지털 아카데미(Full-Stack 과정) : 2024.09 ~ 2025.02</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>CONTACT</h3>
            <p>• Email: 12shj21@naver.com</p>
            <p>• Phone: 010-8891-3006</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
