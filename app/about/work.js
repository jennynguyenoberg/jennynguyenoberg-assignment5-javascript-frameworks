import styles from '../../styles/About.module.css';

export default function Work() {
  return (
    <div className={styles.moreProjects}>
      <div className={styles.subTitle}>Work experience</div>
      <span className={styles.contentTitle}>
        <span className={styles.contentDesc}>Years</span>
        <span className={styles.contentDesc}>Role</span>
        <span className={styles.contentDesc}>Company</span>
        <span className={styles.contentDesc}></span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2019&#8212;2022</span>
        <span className={styles.contentRole}>Digital Producer</span>
        <span className={styles.contentClient}>Nattskiftet</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2018</span>
        <span className={styles.contentRole}>Digital Art Director</span>
        <span className={styles.contentClient}>Rodebjer</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2018</span>
        <span className={styles.contentRole}>E-commerce Designer</span>
        <span className={styles.contentClient}>J.Lindeberg</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2016&#8212;2017</span>
        <span className={styles.contentRole}>Content Manager & Designer</span>
        <span className={styles.contentClient}>Wonderboo</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2014&#8212;2016</span>
        <span className={styles.contentRole}>Art Director</span>
        <span className={styles.contentClient}>We Are Group</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2010&#8212;2014</span>
        <span className={styles.contentRole}>Art Director Ass. & Designer</span>
        <span className={styles.contentClient}>A.S.Castro</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2010</span>
        <span className={styles.contentRole}>Design Intern</span>
        <span className={styles.contentClient}>Liedgren Design</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
    </div>
  );
}
