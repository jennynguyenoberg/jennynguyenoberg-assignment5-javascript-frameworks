import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';
import photo from '../../public/pill-outline.svg';
import MoreProjects from './moreProj';

export default function AllProjects() {
  return (
    <div
      className={styles.containerProjects}
      style={{
        marginTop: '-70px',
        marginBottom: '-92px',
        background: '#8B80E5',
      }}
    >
      <div className={styles.pageTitle}>
        <h1 className={styles.heading}>All projects</h1>
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.col}>
          <Link href="/projects/week1">
            <Image src={photo} alt="project" width={230} />
            <div className={styles.imgTitle}>Week 1</div>
          </Link>
        </div>
        <div className={styles.col}>
          <Link href="/projects/week2">
            <Image src={photo} alt="project" width={230} />
            <div className={styles.imgTitle}>Week 2</div>
          </Link>
        </div>
        <div className={styles.col}>
          <Link href="/projects/week3">
            <Image src={photo} alt="project" width={230} />
            <div className={styles.imgTitle}>Week 3</div>
          </Link>
        </div>
        <div className={styles.col}>
          <Link href="/projects/week4">
            <Image src={photo} alt="project" width={230} />
            <div className={styles.imgTitle}>Week 4</div>
          </Link>
        </div>
        <div className={styles.col}>
          <Link href="/projects/week5">
            <Image src={photo} alt="project" width={230} />
            <div className={styles.imgTitle}>Week 5</div>
          </Link>
        </div>
      </div>
      <MoreProjects />
    </div>
  );
}
