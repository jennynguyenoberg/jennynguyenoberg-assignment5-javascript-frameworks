import Link from 'next/link'
import styles from '../../styles/About.module.css'

export default function Info() {
  return (
    <div className={styles.moreProjects}>
      <div className={styles.subTitle}>Contact information</div>
      <span className={styles.contentTitle}>
        <span className={styles.contentDesc}>Mail</span>
        <span className={styles.contentDesc}>Mobile</span>
        <span className={styles.contentDesc}>LinkedIn</span>
        <span className={styles.contentDesc}>Instagram</span>
      </span>
      <span className={styles.bar}></span>
      <span className={styles.contentProject}>
        <div className={styles.contentYear}>
          <form className={styles.form} action="mailto:jenny.nguyen_oberg@edu.cmeducations.se?subject=Hej!" method="post">
            <button className={styles.button}>Send email &#8600;</button>
          </form>
        </div>
        <span className={styles.contentRole}>Designer</span>
        <span className={styles.contentClient}>+46 (0) 733 16 05 19</span>
        <span className={styles.contentSocial}>
          <Link href='https://www.instagram.com/studio.noberg/'>studio.noberg &#8600;</Link>
        </span>
      </span>
    </div>
  )
}