import Image from "next/image";
import styles from "./ContactBody.module.css";
import giti from "@/public/icons/git.svg";
import lii from "@/public/icons/linkedin.svg";

export default function ContactBody() {
  return (
    <>
      <div className={styles.contact}>
        <h2 className={styles.contacttitle}>Let's Connect 📫</h2>
        <p className={styles.contacttxt}>
          I'm always looking to connect with other developers and creatives.
          Feel free to reach out to me on any of the platforms below. <br /> Or
          Send me an email on the right.
        </p>
        <div className={styles.contactlinks}>
          <p className={styles.sociallinks}>
            <br />
            let socials = [
          </p>
          <div className={styles.imglinks}>
            <Image src={giti} width={40} height={40} />
            <Image src={lii} width={40} height={40} />
          </div>
          <p className={styles.sociallinks}>]</p>
        </div>
      </div>
    </>
  );
}
