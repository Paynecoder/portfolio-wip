import styles from "./LandingBody.module.css";
import { useRouter } from "next/router";

export default function LandingBody() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, I'm Joshua Payne 👋</h1>
      <h2 className={styles.description}>
        I'm a Front-end Web Engineer 🛠️ based in BC, Canada 🏔️
      </h2>
      <h2 className={styles.pages}>
        <span
          style={{
            color: "#777f85",
            cursor: "text",
          }}
        >
          // Explore
        </span>{" "}
        <br /> let pages = [
        <span onClick={() => router.push("/work")}>work()</span>,{" "}
        <span onClick={() => router.push("/about")}>about()</span>,{" "}
        <span onClick={() => router.push("/stack")}>stack()</span>,{" "}
        <span onClick={() => router.push("/contact")}>contact()</span>]
      </h2>
    </div>
  );
}
