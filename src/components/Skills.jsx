import styles from "./Skills.module.css";

function Skills({ skillsRef, scrollPosition }) {
  return (
    <section ref={skillsRef} className={`${styles.skillsSection} ${styles.parallax}`}>
      <div
        className={styles.content}
        style={{
          transform: `translateY(${
            (scrollPosition - skillsRef.current?.offsetTop) * 0.3
          }px)`,
        }}
      >
        <h2>SKILLS</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3>FRONT END</h3>
            <div className={styles.skillBars}>
              <div className={styles.skillBar}>
                <span>HTML5/CSS3</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span>JavaScript</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "65%" }}></div>
                </div>
              </div>
              <div className={styles.skillBar}>
                <span>React</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;