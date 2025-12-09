import styles from "../styles/Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <a href="#hero" className={styles.logo}>Phuc.dev</a>

      <nav className={styles.links}>
        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}

        <a href="https://github.com/your-username" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank">
          <FaLinkedin />
        </a>
      </nav>
    </header>
  );
}
