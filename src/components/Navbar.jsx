import styles from "./Navbar.module.css";

function Navbar({ scrollToSection, refs }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>SIM HAJIN</div>
      <div className={styles.navLinks}>
        <button onClick={() => scrollToSection(refs.homeRef)}>HOME</button>
        <button onClick={() => scrollToSection(refs.aboutRef)}>ABOUT</button>
        <button onClick={() => scrollToSection(refs.skillsRef)}>SKILLS</button>
        <button onClick={() => scrollToSection(refs.projectRef)}>PROJECTS</button>
      </div>
    </nav>
  );
}

export default Navbar;