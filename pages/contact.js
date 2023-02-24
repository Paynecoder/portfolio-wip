import ContactBody from "@/components/ContactBody";
import styles from "@/styles/Contact.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className={styles.code}>&lt;div id="contact"&gt;</h1>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <ContactBody />
          <ContactForm />
        </div>
      </div>
      <h1 className={styles.code}>&lt;/div&gt;</h1>
    </>
  );
}
