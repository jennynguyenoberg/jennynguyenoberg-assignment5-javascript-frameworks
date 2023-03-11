import Link from 'next/link'
import styles from '../../styles/About.module.css'
import photo from '../../public/photo.jpg'
import Image from 'next/image'
import Work from './work'
import Education from './education'
import Info from './info'

export default function About() {
  return (
    <div className={styles.containerAbout} style={{ marginTop: "-70px", marginBottom: "-92px", background: '#D4D2BD' }}>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <span className={styles.title}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <span className={styles.linkTitle}>
              <Link href='/'>↳ Download resume</Link>
            </span>
          </span>
        </div>
        <div className={styles.content}>
          <Image
              src={photo}
              alt="project"
              width={230}
            />
        </div>
      </div>
      <Info />
      <Work />
      <Education />
    </div>
  )
}