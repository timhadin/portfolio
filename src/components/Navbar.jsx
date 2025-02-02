import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

function Navbar({ scrollToSection, homeRef, aboutRef, skillsRef, projectsRef }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" }
    ];

    const observers = [];
    
    sections.forEach(({ ref, id }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5 // 50% 이상 보일 때 활성화
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [homeRef, aboutRef, skillsRef, projectsRef]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>SIM HAJIN's PORTFOLIO</div>
      <div className={styles.navLinks}>
        <button
          onClick={() => scrollToSection(homeRef)}
          className={activeSection === "home" ? styles.active : ""}
        >
          HOME
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={activeSection === "about" ? styles.active : ""}
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection(skillsRef)}
          className={activeSection === "skills" ? styles.active : ""}
        >
          SKILLS
        </button>
        <button
          onClick={() => scrollToSection(projectsRef)}
          className={activeSection === "projects" ? styles.active : ""}
        >
          PROJECTS
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
