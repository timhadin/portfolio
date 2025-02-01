import styles from '../App.module.css';

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.profileImage}>
        <img src="/path/to/your/image.jpg" alt="Profile" />
      </div>
      <div className={styles.contentSection}>
        <h1>안녕하세요</h1>
        <h2>프론트엔드 개발자입니다</h2>
        <p>
          새로운 기술을 배우는 것을 좋아하며...
        </p>
      </div>
    </section>
  );
};

export default HomeSection; 