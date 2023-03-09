import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects.module.css'
import photo from '../../public/photo.jpg'

export default function AllProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.link}>
        <Link href="/projects/assignment1" >
          <Image
            src={photo}
            alt="project"
          />
          <div className={styles.title}>
            Project 1: Assignment 1
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/projects/assignment2" >
          <Image
            src={photo}
            alt="project"
          />
          <div className={styles.title}>
            Project 2: Assignment 2
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/projects/assignment3" >
          <Image
            src={photo}
            alt="project"
          />
          <div className={styles.title}>
            Project 3: Assignment 3
          </div>
        </Link>
      </div>
    </div>
  )
}
