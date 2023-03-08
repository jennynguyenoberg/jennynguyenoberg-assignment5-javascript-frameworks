import Link from 'next/link';
import styles from '../../styles/NotFound.module.css'

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Oops...</h1>
        <h2 className={styles.subtitle}>That page cannot be found.</h2>
        <div className={styles.link}>
          <p className={styles.para}>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
      </div>
    </>
  );
};