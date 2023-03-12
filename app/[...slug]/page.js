import Link from 'next/link'
import styles from '../../styles/NotFound.module.css'

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Oops...</h2>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>That page cannot be found.</p>
        <div className={styles.link}>
          <p className={styles.para}>
            Go back to the <Link href="/">↳ Homepage</Link>
          </p>
        </div>
      </div>
    </>
  )
}
