import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.send}>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
        />
        <button type="submit" className={styles.btn}>
          Send
        </button>
      </form>
    </div>
  );
}
