import Link from 'next/link'
import styles from '../../styles/About.module.css'
import photo from '../../public/photo.jpg'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.container}>
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
          />
        </div>
      </div>

      {/* ------- Resume section ------- */}
      <div className={styles.moreProjects}>
        <div className={styles.subTitle}>More projects</div>
        <span className={styles.contentTitle}>
          <span className={styles.contentDesc}>Years</span>
          <span className={styles.contentDesc}>Role</span>
          <span className={styles.contentDesc}>Company</span>
          <span className={styles.contentDesc}></span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
      </div>
    </div>
  )
}