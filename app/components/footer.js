import styles from '../../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.columnLeft}>
        <div className={styles.copyright}>
          © 2023 <br />
          Site built and designed by Jenny Nguyen Öberg.
          <br />
          All rights reserved.
        </div>
      </div>
      <div className={styles.columnRight}>
        <div className={styles.socials}>
          <Link href="https://github.com/jennynguyenoberg" rel="noreferrer">
            <span className={styles.navLink}>Github</span>
          </Link>
          <br />
          <Link
            href="https://linkedin.com/in/jennynguyenoberg"
            rel="noreferrer"
          >
            <span className={styles.navLink}>LinkedIn</span>
          </Link>
          <br />
          <Link
            href="https://www.instagram.com/studio.noberg/"
            rel="noreferrer"
          >
            <span className={styles.navLink}>Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
