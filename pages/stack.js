import styles from "@/styles/Stack.module.css";

export default function Stack() {
  return (
    <>
      <h1 className={styles.code}>&lt;div id="stack"&gt;</h1>
      <div className={styles.main}>
        <h1 className={styles.title}>My Stack</h1>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.subtitle}>Front-end</h2>
            <ul className={styles.list}>
              <li className={styles.items}>HTML</li>
              <li className={styles.items}>CSS</li>
              <li className={styles.items}>JavaScript</li>
              <li className={styles.items}>React</li>
              <li className={styles.items}>Next.js</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.subtitle}>Back-end</h2>
            <ul className={styles.list}>
              <li className={styles.items}>Node.js</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.subtitle}>Others</h2>
            <ul className={styles.list}>
              <li className={styles.items}>Git</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className={styles.code}>&lt;/div&gt;</h1>
    </>
  );
}
