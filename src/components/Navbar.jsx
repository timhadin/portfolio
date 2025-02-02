import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

function Navbar({ scrollToSection, homeRef, aboutRef, skillsRef, projectsRef }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: skillsRef, id: "skills" },
        { ref: projectsRef, id: "projects" }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionBottom = sectionTop + section.ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 초기 로드 시 현재 섹션 확인
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
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
