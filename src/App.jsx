import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>SIM HAJIN</div>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection(homeRef)}>HOME</button>
          <button onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
          <button onClick={() => scrollToSection(skillsRef)}>SKILLS</button>
          <button onClick={() => scrollToSection(projectRef)}>PROJECTS</button>
        </div>
      </nav>

      <section
        ref={homeRef}
        className={`${styles.homeSection} ${styles.parallax}`}
      >
        <div
          className={styles.content}
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        >
          <div className={styles.profileImage}>
            <img src="신분증.jpg" alt="Profile" />
          </div>
          <h1>SIM HAJIN</h1>
          <h2>프론트엔드 개발자입니다</h2>
          <p className={styles.intro}>
            🚀 사용자 중심의 서비스를 개발하는 것을 좋아하는 심하진입니다.
            <br />
            <span className={styles.highlight}>리액트</span>를 중심으로 한
            프론트엔드 개발에 열정을 가지고 있으며,{" "}
            <span className={styles.highlight}>SpringBoot</span>를 활용해
            백엔드와의 완벽한 통합을 이뤄냅니다.
            <br /> <br />
            <span className={styles.highlight}>🎨 Figma</span>를 활용한 디자인
            작업을 통해, 사용자의 직관적인 경험을 고려한 UI/UX를 설계합니다.{" "}
            <br />
            개발과 디자인의 경계를 허물며, 기능뿐만 아니라 사용자 경험을
            중시하는 개발을 추구합니다.
            <br /> <br />✨{" "}
            <span className={styles.highlight}>
              "사용자가 원하는 것은 내가 만들겠다"
            </span>
            는 신념으로 매일 성장하며, 창의적인 아이디어를 코드와 디자인으로
            실현해 나가고 있습니다.
          </p>
        </div>
      </section>

      <section ref={aboutRef} className={styles.aboutSection}>
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
              <p>
                • 장애인 디지털 아카데미(Full-Stack 과정) : 2024.09 ~ 2025.02
              </p>
            </div>
            <div className={styles.aboutItem}>
              <h3>CONTACT</h3>
              <p>• Email: 12shj21@naver.com</p>
              <p>• Phone: 010-8891-3006</p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`${styles.skillsSection} ${styles.parallax}`}
      >
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

      <section ref={projectRef} className={styles.projectsSection}>
        <div className={styles.content}>
          <h2>PROJECTS</h2>
          <div className={styles.projectGrid}>{/* Project cards here */}</div>
        </div>
      </section>
    </div>
  );
}

export default App;
