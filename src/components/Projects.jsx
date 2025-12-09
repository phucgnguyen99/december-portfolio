import Section from "./Section";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
