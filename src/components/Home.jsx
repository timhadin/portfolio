import styles from "./Home.module.css";

function Home({ homeRef, scrollPosition }) {
  return (
    <section ref={homeRef} className={`${styles.homeSection} ${styles.parallax}`}>
      <div
        className={styles.content}
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      >
        <div className={styles.profileImage}>
          <img src="신분증.jpg" alt="Profile" />
        </div>
        <div className={styles.textContent}>
          <h1>SIM HAJIN</h1>
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
      </div>
    </section>
  );
}

export default Home;