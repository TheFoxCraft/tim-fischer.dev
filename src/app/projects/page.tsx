import ProjectCard from "@/components/projects/ProjectCard";
import { projects, projectShowOrder, projectsLastUpdated } from "@/utils/const";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const projectMap = new Map(projects.map((p) => [p.id, p]));

  const projectsList = projectShowOrder
    .map((id) => projectMap.get(id))
    .filter((p) => !!p);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/#projects" className={styles.back}>
          ← Portfolio
        </Link>
      </header>
      <section className={styles.hero}>
        <div>
          <h1>My Projects</h1>
          <p>
            A collection of projects I've created over the years, from completed
            ones to ongoing projects.
          </p>
          <h6>
            Last updated: {new Date(projectsLastUpdated).toLocaleDateString()}
          </h6>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          {projectsList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
