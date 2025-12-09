import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.subtitle}>Entry-Level Software Engineer</p>

        <h1 className={styles.heading}>
          Hi, I’m <span className={styles.highlight}>Phuc</span> 👋
        </h1>

        <p className={styles.desc}>
          I build Android and full-stack apps with clean code and great UX.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnGhost}>Contact Me</a>
        </div>
      </motion.div>
    </div>
  );
}
