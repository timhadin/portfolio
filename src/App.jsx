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
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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