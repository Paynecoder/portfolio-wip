import styles from "@/styles/Stack.module.css";

export default function Stack() {
  return (
    <>
      <h1 className={styles.code}>&lt;div id="stack"&gt;</h1>
      <div className={styles.main}></div>
      <h1 className={styles.code}>&lt;/div&gt;</h1>
    </>
  );
}
