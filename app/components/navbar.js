"use client";
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <span className={styles.navLogo}>Jenny Nguyen Öberg</span>
        </Link>
        <span className={styles.navLogo}>Designer & Developer</span>
        <ul className={isOpen === false ?
          styles.navMenu : styles.navMenu + ' ' + styles.active}>
          <li className={styles.navItem}>
            <Link href='/projects'>
              <span className={styles.navLink}>Projects</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about'>
              <span className={styles.navLink}>About</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/contact'>
              <span className={styles.navLink}>Get in touch</span>
            </Link>
          </li>
        </ul>
        <button className={isOpen === false ?
          styles.hamburger : styles.hamburger + ' ' + styles.active}
          onClick={openMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}