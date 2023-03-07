import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>JENNY NGUYEN ÖBERG</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH ME</span>
            {/* <Image src="" width={40} height={40} alt="" /> */}
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NYC <br /> USA
        </div>
        <div className={styles.cardItem}>
          hello@jennynguyenoberg.com <br /> 073 316 05 19
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW ME:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2023 JENNY
          <br />
          ALL RIGHTS REVERVED.
        </div>
      </div>
    </div>
  )
}