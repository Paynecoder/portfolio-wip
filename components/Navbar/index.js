import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 onClick={() => router.push("/")}>joshua.payne</h1>
      </div>
      <div className={styles.links}>
        <Link href={"/work"}>
          <p>work()</p>
        </Link>
        <Link href={"/"}>
          <p>about()</p>
        </Link>
        <Link href={"/"}>
          <p>stack()</p>
        </Link>
        <Link href={"/contact"}>
          <p>contact()</p>
        </Link>
      </div>
    </nav>
  );
}
