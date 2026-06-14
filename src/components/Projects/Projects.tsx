import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import styles from "./Projects.module.css";

const projects: {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  href?: string;
  private?: boolean;
}[] = [
  {
    title: "Minecraft Elements",
    description:
      "A progression-focused Minecraft experience featuring custom bosses, puzzles and unique gameplay mechanics.",

    tags: ["Datapack", "Custom Bosses", "Adventure"],
    tech: ["Minecraft", "Datapacks"],

    //href: "/projects/minecraft-elements",
  },
  {
    title: "SchulHub",
    description:
      "School organization platform for students with schedules, substitutions, collaboration tools and more.",

    tags: ["School", "Organization", "Productivity"],
    tech: ["NextJS", "Prisma"],

    private: true,
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <span className={styles.label}>PROJECTS</span>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.header}>
                <h3>{project.title}</h3>

                <div className={styles.headerRight}>
                  {project.private && (
                    <span className={styles.private}>
                      <Lock size={14} />
                      Private
                    </span>
                  )}
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
