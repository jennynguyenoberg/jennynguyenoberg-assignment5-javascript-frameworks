import styles from '../../styles/About.module.css';

export default function Education() {
  return (
    <div className={styles.moreProjects}>
      <div className={styles.subTitle}>Education</div>
      <span className={styles.contentTitle}>
        <span className={styles.contentDesc}>Years</span>
        <span className={styles.contentDesc}>Program</span>
        <span className={styles.contentDesc}>School</span>
        <span className={styles.contentDesc}></span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2022&#8212;2024</span>
        <span className={styles.contentRole}>Frontend & App Developer</span>
        <span className={styles.contentClient}>Changemaker Education</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2017</span>
        <span className={styles.contentRole}>Design Lead</span>
        <span className={styles.contentClient}>Hyper Island</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2008&#8212;2010</span>
        <span className={styles.contentRole}>Graphic Design</span>
        <span className={styles.contentClient}>Berghs SoC</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2007</span>
        <span className={styles.contentRole}>Graphic Design Introduction</span>
        <span className={styles.contentClient}>Berghs SoC</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
    </div>
  );
}
