import { useState } from "react";
import styles from "./Skills.module.css";

function Skills({ skillsRef, scrollPosition }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "Spring Boot",
      level: "35%",
      icon: "/images/spring-boot.png",
      description: "기본적인 CRUD 기능이 포함된\n애플리케이션 개발 가능",
    },
    {
      name: "Figma",
      level: "30%",
      icon: "/images/Figma.png",
      description: "기본적인 UI/UX 디자인 및 프로토타입 제작 가능",
    },
    {
      name: "HTML5",
      level: "65%",
      icon: "/images/html.png",
      description: "기본적인 웹페이지 마크업 작성 및\n시맨틱 태그 활용 가능",
    },
    {
      name: "CSS3",
      level: "65%",
      icon: "/images/css.png",
      description:
        "미디어 쿼리를 활용한 웹페이지 제작 및\n간단한 애니메이션 적용 가능",
    },
    {
      name: "JavaScript",
      level: "65%",
      icon: "/images/js.png",
      description: "ES6+ 문법 기본 활용 및 비동기 처리 기본적인 이해",
    },
    {
      name: "React",
      level: "60%",
      icon: "/images/React-icon.png",
      description: "컴포넌트 기반 개발 및 props, state 관리 가능\nReact Hooks (useState, useEffect)\n기본 활용 가능",
    },
  ];

  return (
    <section ref={skillsRef} className={styles.skillsSection}>
      <div
        className={styles.content}
        style={{
          transform: `translate3d(0, ${scrollPosition * 0.3}px, 0)`,
          willChange: "transform",
          transition: "transform 0.1s ease-out",
        }}
      >
        
        <h2>SKILLS</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.skillItem}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={styles.skillIcon}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className={styles.skillInfo}>
                <h3>{skill.name}</h3>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{ "--level": skill.level }}
                  >
                    <span className={styles.percentage}>{skill.level}</span>
                  </div>
                </div>
                <p className={styles.skillDescription}>
                  {skill.description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
