import Section from "./Section";
import styles from "../styles/Skills.module.css";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.card}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item} className={styles.badge}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
