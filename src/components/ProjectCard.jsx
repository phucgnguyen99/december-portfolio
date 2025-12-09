import styles from "../styles/ProjectCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tags}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub /> <span>Code</span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> <span>Live</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
