import pillOutline from '../../../public/pill-outline.svg'
import pillFilled from '../../../public/pill-filled.svg'
import styles from '../../../styles/Projects.module.css'
import Image from 'next/image'

export default function Pills() {
  return (
    <div className={styles.pills}>
      <span className={styles.pillText}>Design</span>
      <Image className={styles.pillOutline}
        src={pillOutline}
        alt="portfolio"
        width={75}
      />
      <span className={styles.pillText2}>Code</span>
      <Image className={styles.pillOutline}
        src={pillOutline}
        alt="portfolio"
        width={75}
      />
      {/* <Image className={styles.pillFilled}
          src={pillFilled}
          alt="portfolio"
          width={75}
        /> */}
    </div>
  )
}