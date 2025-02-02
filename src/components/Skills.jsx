import styles from "./Skills.module.css";

function Skills({ skillsRef, scrollPosition }) {
  const skills = [
    {
      name: "HTML5",
      level: 80,
      icon: "/images/html.png",
    },
    {
      name: "CSS3",
      level: 75,
      icon: "/images/css.png",
    },
    {
      name: "JavaScript",
      level: 70,
      icon: "/images/js.png",
    },
    {
      name: "React",
      level: 70,
      icon: "/images/React-icon.png",
    },
  ];

  return (
    <section
      ref={skillsRef}
      className={styles.skillsSection}
    >
      <div
        className={styles.content}
        style={{
          transform: `translate3d(0, ${scrollPosition * 0.3}px, 0)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h2>SKILLS</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillIcon}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className={styles.skillInfo}>
                <h3>{skill.name}</h3>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className={styles.percentage}>{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
