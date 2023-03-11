import styles from '../../styles/Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Je<em className={styles.italic}>nny</em> Ng<em className={styles.italic}>uyen</em> Ö<em className={styles.italic}>be</em>rg
        </h1>
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.column1}>
          <p className={styles.descriptionText}>
            Designer & Web Developer student based in beautiful Stockholm, Sweden.
            Creative at heart with a passion for the details.
          </p>
        </div>
        <div className={styles.column2}>
          <div className={styles.category}>
            <Link href='/'>Design</Link>
          </div>
        </div>
        <div className={styles.column3}>
          <div className={styles.category}>
            <Link href='/'>&#60;&#47;Code&#62;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}