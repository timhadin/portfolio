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
      <Navbar 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
      />
      <Home homeRef={homeRef} scrollPosition={scrollPosition} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} scrollPosition={scrollPosition} />
      <Projects projectRef={projectRef} />
    </div>
  );
}

export default App;