import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import styles from "./Projects.module.css";
import { projects, projectShowOrder } from "@/utils/const";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectMap = new Map(projects.map((p) => [p.id, p]));

  const projectsListPreview = projectShowOrder
    .slice(0, 4)
    .map((id) => projectMap.get(id))
    .filter((p) => !!p);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <span className={styles.label}>PROJECTS</span>

        <div className={styles.grid}>
          {projectsListPreview.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/projects" className={styles.viewAll}>
            View all projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
