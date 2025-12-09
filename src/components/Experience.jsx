import Section from "./Section";
import styles from "../styles/Experience.module.css";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className={styles.list}>
        {experience.map((item) => (
          <div key={item.role + item.company} className={styles.card}>
            <div className={styles.header}>
              <div>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
              </div>
              <p className={styles.period}>{item.period}</p>
            </div>
            <ul className={styles.details}>
              {item.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
