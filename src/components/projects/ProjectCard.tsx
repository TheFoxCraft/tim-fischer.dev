import { Project } from "@/utils/types";
import styles from "./ProjectCard.module.css";
import { ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { statusInfo } from "@/utils/projectsInfo";

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusInfo[project.status];

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{project.title}</h3>

        <div className={styles.headerRight}>
          {project.private && (
            <span className={styles.private}>
              <Lock size={14} />
              Private
            </span>
          )}

          <div className={styles.status}>
            <span className={`${styles.dot} ${styles[project.status]}`} />

            {status.label}

            <div className={styles.tooltip}>
              <strong>{status.label}</strong>
              <p>{status.description}</p>
            </div>
          </div>

          {project.href && (
            <Link href={project.href} className={styles.projectLink}>
              View Project
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>

      <p>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className={styles.tech}>
        {project.tech.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
