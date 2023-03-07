import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/'>Jenny Nguyen Öberg</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>Designer & Developer</li>
        <li className={styles.listItem}>
          <Link href='/portfolio'>Projects</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/about'>About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='contact'>Get in touch</Link>
        </li>
      </ul>
    </div>
  );
}