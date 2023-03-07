import styles from '../../styles/Contact.module.css'
import Head from 'next/head'

export default function Contact() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Portfolio of Jenny Nguyen Öberg</title>
        <meta name="description" content="Portfolio of Jenny Nguyen Öberg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input className={styles.inputSmall} placeholder="Username" />
        <input className={styles.inputSmall} placeholder="Phone" />
        <input className={styles.inputLarge} placeholder="Email" />
        <input className={styles.inputLarge} placeholder="Subject" />
        <textarea className={styles.textArea} placeholder="Message" rows={6} />
        <button className={styles.button}>SUBMIT</button>
      </form>

    </div>
  )
}