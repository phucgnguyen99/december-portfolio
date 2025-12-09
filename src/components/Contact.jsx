import Section from "./Section";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className={styles.text}>
        I&apos;m open to entry-level software engineer or Android/web developer roles,
        internships, and collaboration on interesting projects.
      </p>

      <div className={styles.info}>
        <p>
          <span className={styles.label}>Email:</span>{" "}
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
        <p>
          <span className={styles.label}>GitHub:</span>{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            github.com/your-username
          </a>
        </p>
        <p>
          <span className={styles.label}>LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/your-linkedin
          </a>
        </p>
      </div>
    </Section>
  );
}
