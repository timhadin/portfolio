import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const sections = [homeRef, aboutRef, skillsRef, projectsRef];
      const currentSection = sections.findIndex(ref => {
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      // 프로젝트 섹션에서는 기본 스크롤 동작 허용
      if (currentSection === 3) { // projects는 배열의 마지막 요소
        const projectSection = projectsRef.current;
        const isScrollable = projectSection.scrollHeight > projectSection.clientHeight;
        const isAtTop = projectSection.scrollTop === 0;
        const isAtBottom = projectSection.scrollTop + projectSection.clientHeight >= projectSection.scrollHeight;

        // 맨 위에서 위로 스크롤하거나 맨 아래에서 아래로 스크롤할 때만 섹션 전환
        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          e.preventDefault();
          if (e.deltaY > 0 && currentSection < sections.length - 1) {
            sections[currentSection + 1].current.scrollIntoView({ behavior: "smooth" });
          } else if (e.deltaY < 0 && currentSection > 0) {
            sections[currentSection - 1].current.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }

      // 다른 섹션에서는 기존 동작 유지
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].current.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.app}>
      <Navbar 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Home homeRef={homeRef} scrollPosition={scrollPosition} />
      <About aboutRef={aboutRef} scrollPosition={scrollPosition} />
      <Skills skillsRef={skillsRef} scrollPosition={scrollPosition} />
      <Projects projectsRef={projectsRef} scrollPosition={scrollPosition} />
    </div>
  );
}

export default App;