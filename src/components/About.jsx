import Section from "./Section";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className={styles.text}>
        I&apos;m an entry-level software engineer focused on{" "}
        <span className={styles.highlight}>
          Android development and full-stack web development
        </span>
        . I enjoy turning ideas into working apps and learning new tools along
        the way.
      </p>

      <p className={styles.text}>
        Recently, I&apos;ve been working with React, Node.js, and Firebase on
        the web side, and Firebase + ML Kit for Android. I&apos;m looking for
        opportunities where I can grow as an engineer and contribute to a
        collaborative team.
      </p>
    </Section>
  );
}
