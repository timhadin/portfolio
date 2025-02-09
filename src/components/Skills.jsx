import { useState } from "react";
import styles from "./Skills.module.css";

function Skills({ skillsRef, scrollPosition }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "Spring Boot",
      level: "35%",
      icon: "/images/spring-boot.png",
      description: "기본적인 CRUD 애플리케이션 개발 가능"
    },
    {
      name: "Figma",
      level: "30%",
      icon: "/images/Figma.png",
      description: "기본적인 UI/UX 디자인 및 프로토타입 제작 가능"
    },
    {
      name: "HTML5",
      level: "70%",
      icon: "/images/html.png",
      description: "시맨틱 마크업과 웹 접근성을 고려한 구조화 가능"
    },
    {
      name: "CSS3",
      level: "75%",
      icon: "/images/css.png",
      description: "반응형 디자인 및 모던 레이아웃 구현 가능"
    },
    {
      name: "JavaScript",
      level: "70%",
      icon: "/images/js.png",
      description: "ES6+ 문법 활용 및 비동기 처리 구현 가능"
    },
    {
      name: "React",
      level: "70%",
      icon: "/images/React-icon.png",
      description: "컴포넌트 설계 및 상태관리 구현 가능"
    }
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
                    style={{ '--level': skill.level }}
                  >
                    <span className={styles.percentage}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
