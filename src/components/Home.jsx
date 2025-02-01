import styles from "./Home.module.css";

function Home({ homeRef, scrollPosition }) {
  return (
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
        <div className={styles.textContent}>
          <h1>SIM HAJIN</h1>
          <p className={styles.intro}>
            🚀 사용자 중심의 서비스를 개발하는{" "}
            <span className={styles.highlight}>심하진</span>입니다.
            <br />
            <span className={styles.highlight}>리액트</span>를 중심으로 한
            프론트엔드 개발에 열정을 가지고 있으며,
            <br />
            <span className={styles.highlight}>SpringBoot</span>를 활용해
            백엔드와의 매끄러운 연동을 구현합니다.
            <br /> <br />
            <span className={styles.highlight}>🎨 Figma</span>를 활용한 UI/UX
            설계를 통해 직관적인 사용자 경험을 제공합니다.
            <br />
            기능적인 개발을 넘어{" "}
            <span className={styles.highlight}>
              사용자가 만족하는 경험을 만드는 것
            </span>
            이 제 목표입니다.
            <br /> <br />✨{" "}
            <span className={styles.highlight}>
              "사용자가 원하는 것은 내가 만든다"
            </span>{" "}
            라는 신념으로,
            <br />
            끊임없이 성장하며 더 나은 서비스를 위한 개발을 이어가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
