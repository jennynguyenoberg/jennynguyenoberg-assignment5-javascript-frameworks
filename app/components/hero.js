import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import photo from '../../public/photo.jpg'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>JENNY NGUYEN ÖBERG</span> DESIGNER & FRONTEND DEVELOPER
        </h1>
        <p className={styles.description}>Designer & Web Developer based in beautiful Stockholm, Sweden. Creative at heart with a passion for the details.</p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image
          src={photo}
          width={700}
          height={700}
          alt=""
        />
      </div>
    </div>
  )
}