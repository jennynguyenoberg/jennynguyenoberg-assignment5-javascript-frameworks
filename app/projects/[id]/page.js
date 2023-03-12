import Project1 from './proj1'
import Project2 from './proj2'
import Project3 from './proj3'
import Project4 from './proj4'
import Project5 from './proj5'
import styles from '../../../styles/Projects.module.css'

export default function PorfolioProject({ params }) {
  if (params.id === 'week1') {
    return (
      <div
        className={styles.containerProjects}
        style={{ marginTop: '-70px', marginBottom: '-92px' }}
      >
        <div className={styles.pageTitle}>
          <h1 className={styles.heading2}>{params.id}</h1>
          <h2 className={styles.heading}>Introduction to React.js</h2>
        </div>
        <Project1 />
      </div>
    )
  }
  if (params.id === 'week2') {
    return (
      <div
        className={styles.containerProjects}
        style={{ marginTop: '-70px', marginBottom: '-92px' }}
      >
        <div className={styles.pageTitle}>
          <h1 className={styles.heading2}>{params.id}</h1>
          <h2 className={styles.heading}>Node, npm, Git, GitHub, DateTime</h2>
        </div>
        <Project2 />
      </div>
    )
  }
  if (params.id === 'week3') {
    return (
      <div
        className={styles.containerProjects}
        style={{ marginTop: '-70px', marginBottom: '-92px' }}
      >
        <div className={styles.pageTitle}>
          <h1 className={styles.heading2}>{params.id}</h1>
          <h2 className={styles.heading}>Build Tools, CSS, Personal Project</h2>
        </div>
        <Project3 />
      </div>
    )
  }
  if (params.id === 'week4') {
    return (
      <div
        className={styles.containerProjects}
        style={{ marginTop: '-70px', marginBottom: '-92px' }}
      >
        <div className={styles.pageTitle}>
          <h1 className={styles.heading2}>{params.id}</h1>
          <h2 className={styles.heading}>API</h2>
        </div>
        <Project4 />
      </div>
    )
  }
  return (
    <div
      className={styles.containerProjects}
      style={{ marginTop: '-70px', marginBottom: '-92px' }}
    >
      <div className={styles.pageTitle}>
        <h1 className={styles.heading2}>{params.id}</h1>
        <h2 className={styles.heading}>SSR, Next.js</h2>
      </div>
      <Project5 />
    </div>
  )
}
