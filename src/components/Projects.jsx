import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

function Projects({ projectsRef, scrollPosition }) {
  const [currentSlides, setCurrentSlides] = useState({});

  const projects = [
    {
      title: "FIND GOOD STORE",
      description: "오픈 API를 활용한 매장 검색 및 지도 표시 서비스",
      images: ["/images/goodstore1.png", "/images/goodstore2.png", "/images/goodstore3.png", "/images/goodstore4.png"],
      tech: ["HTML", "CSS", "JavaScript", "Open API"],
      features: [
        "매장 위치 지도 표시",
        "카테고리별 필터링",
        "실시간 매장 검색",
        "상세 정보 조회"
      ],
      github: "https://github.com/timhadin/goodstore"
    },
    {
      title: "KOKEETEA MAIN WEB",
      description: "KOKEETEA 브랜드 웹사이트",
      images: ["/images/kokee1.png", "/images/kokee2.png", "/images/kokee3.png"],
      tech: ["React", "Spring Boot", "MySQL", "Axios"],
      features: [
        "회원 관리 시스템",
        "메뉴 주문 기능",
        "관리자 공지사항",
        "고객 문의"
      ],
      github: "https://github.com/timhadin/kokeetea-main"
    }
  ];

  useEffect(() => {
    // 각 프로젝트마다 슬라이드 인덱스 초기화
    const initialSlides = {};
    projects.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlides(initialSlides);

    // 자동 슬라이드 설정
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        projects.forEach((project, index) => {
          newSlides[index] = (prev[index] + 1) % project.images.length;
        });
        return newSlides;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={projectsRef}
      className={styles.projectsSection}
    >
      <div 
        className={styles.content}
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <h2>PROJECTS</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageSlider}>
                {project.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${project.title} ${imgIndex + 1}`}
                    style={{
                      opacity: currentSlides[index] === imgIndex ? 1 : 0,
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                ))}
                <div className={styles.sliderDots}>
                  {project.images.map((_, imgIndex) => (
                    <span
                      key={imgIndex}
                      className={`${styles.dot} ${currentSlides[index] === imgIndex ? styles.activeDot : ''}`}
                      onClick={() => {
                        setCurrentSlides(prev => ({
                          ...prev,
                          [index]: imgIndex
                        }));
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className={styles.features}>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" className={styles.githubLink}>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
