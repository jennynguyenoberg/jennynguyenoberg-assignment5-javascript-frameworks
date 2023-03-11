import styles from '../../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container} style={{ marginTop: "-70px", marginBottom: "-92px", background: '#B7E0E6' }}>
      <div className={styles.pageTitle}>
        <h1 className={styles.heading}>Let's grab a coffee!</h1>
      </div>
      <form className={styles.form} action="mailto:jenny.nguyen_oberg@edu.cmeducations.se?subject=Hej!" method="post">
        <label className={styles.label}>Name</label>
        <input className={styles.inputSmall} placeholder="Jane Doe" />
        <label className={styles.label}>Email</label>
        <input className={styles.inputLarge} placeholder="your@email.com" />
        <label className={styles.label}>Message</label>
        <textarea className={styles.textArea} placeholder="Write your message" rows={6} />
        <button className={styles.button}>↳ Send message</button>
      </form>
    </div>
  )
}