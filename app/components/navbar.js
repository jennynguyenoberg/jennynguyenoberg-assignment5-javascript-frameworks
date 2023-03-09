"use client";
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href='/'>Jenny Nguyen Öberg</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>Designer & Developer</li>
        <li className={styles.listItem}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/about'>About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/contact'>Get in touch</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/about'>About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/contact'>Get in touch</Link>
        </li>
      </ul>
    </div>
  );
}