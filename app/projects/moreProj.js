import styles from '../../styles/Projects.module.css'

export default function MoreProjects() {
  return (
    <div className={styles.moreProjects}>
      <div className={styles.subTitle}>More projects</div>
      <span className={styles.contentTitle}>
        <span className={styles.contentDesc}>Year</span>
        <span className={styles.contentDesc}>Deliverables</span>
        <span className={styles.contentDesc}>Client</span>
        <span className={styles.contentDesc}></span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2020</span>
        <span className={styles.contentRole}>Brand Identity</span>
        <span className={styles.contentClient}>Trygghetsbyrån</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2018&#8212;2019</span>
        <span className={styles.contentRole}>Packaging & Brand Identity</span>
        <span className={styles.contentClient}>Moss & Noor</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <span className={styles.contentYear}>2017</span>
        <span className={styles.contentRole}>Brand Strategist</span>
        <span className={styles.contentClient}>Kask of Sweden</span>
        <span className={styles.contentArrow}>&#x261E;</span>
      </span>
      <span className={styles.bar}></span>
    </div>
  )
}