import styles from '../../styles/Contact.module.css'

export default function Contact() {
  return (

    <div className={styles.container}>
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