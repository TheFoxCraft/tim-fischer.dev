import Image from "next/image";
import styles from "./TechStack.module.css";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Wrench,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

const techGroups: {
  title: string;
  icon: LucideIcon;
  items: {
    name: string;
    color: string;
    logo: string;
    website: string;
  }[];
}[] = [
  {
    title: "Core Languages",
    icon: Code2,
    items: [
      {
        name: "TypeScript",
        color: "#3178C6",
        logo: "/logos/typescript.svg",
        website: "https://www.typescriptlang.org/",
      },
      {
        name: "Kotlin",
        color: "#7F52FF",
        logo: "/logos/kotlin.svg",
        website: "https://kotlinlang.org/",
      },
      {
        name: "Java",
        color: "#b07219",
        logo: "/logos/java.svg",
        website: "https://www.java.com",
      },
      {
        name: "HTML",
        color: "#E34F26",
        logo: "/logos/html.svg",
        website: "https://developer.mozilla.org/de/docs/Web/HTML",
      },
      {
        name: "JavaScript",
        color: "#F7DF1E",
        logo: "/logos/javascript.svg",
        website: "https://developer.mozilla.org/de/docs/Web/JavaScript",
      },
      {
        name: "Python",
        color: "#3776AB",
        logo: "/logos/python.svg",
        website: "https://www.python.org/",
      },
      {
        name: "MCFunction",
        color: "#55FF55",
        logo: "/logos/mcfunction.svg",
        website: "https://minecraft.wiki/w/Function_(Java_Edition)",
      },
    ],
  },
  {
    title: "Frontend & Styling",
    icon: Palette,
    items: [
      {
        name: "React",
        color: "#61DBFB",
        logo: "/logos/react.svg",
        website: "https://react.dev/",
      },
      {
        name: "React Native",
        color: "#61DBFB",
        logo: "/logos/react.svg",
        website: "https://reactnative.dev/",
      },
      {
        name: "Next.js",
        color: "#ffffff",
        logo: "/logos/next-js.svg",
        website: "https://nextjs.org/",
      },
      {
        name: "React Router",
        color: "#CA4245",
        logo: "/logos/react-router.svg",
        website: "https://reactrouter.com/",
      },
      {
        name: "CSS",
        color: "#264de4",
        logo: "/logos/css.svg",
        website: "https://developer.mozilla.org/de/docs/Web/CSS",
      },
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Server,
    items: [
      {
        name: "Node.js",
        color: "#3C873A",
        logo: "/logos/node-js.svg",
        website: "https://nodejs.org/",
      },
      {
        name: "Express",
        color: "#ffffff",
        logo: "/logos/express-js.svg",
        website: "https://expressjs.com",
      },
      {
        name: "Socket.IO",
        color: "#ffffff",
        logo: "/logos/socket-io.svg",
        website: "https://socket.io/",
      },
      {
        name: "Discord.py",
        color: "#5865F2",
        logo: "/logos/discord.svg",
        website: "https://docs.discord.com/developers/intro",
      },
      {
        name: "NGINX",
        color: "#009639",
        logo: "/logos/nginx.svg",
        website: "https://nginx.org",
      },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    items: [
      {
        name: "Prisma",
        color: "#0C344B",
        logo: "/logos/prisma.svg",
        website: "https://www.prisma.io/",
      },
      {
        name: "PostgreSQL",
        color: "#336791",
        logo: "/logos/postgresql.svg",
        website: "https://www.postgresql.org/",
      },
      {
        name: "Redis",
        color: "#DC382D",
        logo: "/logos/redis.svg",
        website: "https://redis.io/",
      },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    items: [
      {
        name: "Git",
        color: "#F05032",
        logo: "/logos/git.svg",
        website: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        color: "#ffffff",
        logo: "/logos/github.svg",
        website: "https://github.com/",
      },
      {
        name: "Docker",
        color: "#2496ED",
        logo: "/logos/docker.svg",
        website: "https://www.docker.com/",
      },
      {
        name: "Linux",
        color: "#FCC624",
        logo: "/logos/linux.svg",
        website: "https://www.linux.org/",
      },
      {
        name: "Vercel",
        color: "#ffffff",
        logo: "/logos/vercel.svg",
        website: "https://vercel.com",
      },
      {
        name: "Netlify",
        color: "#00C7B7",
        logo: "/logos/netlify.svg",
        website: "https://www.netlify.com/",
      },
      {
        name: "Cloudflare",
        color: "#F38020",
        logo: "/logos/cloudflare.svg",
        website: "https://www.cloudflare.com/",
      },
      {
        name: "NPM",
        color: "#CB3837",
        logo: "/logos/npm.svg",
        website: "https://www.npmjs.com/",
      },
      {
        name: "Expo",
        color: "#ffffff",
        logo: "/logos/expo.svg",
        website: "https://expo.dev",
      },
    ],
  },
  {
    title: "Tooling & API Development",
    icon: Wrench,
    items: [
      {
        name: "Insomnia",
        color: "#4000BF",
        logo: "/logos/insomnia.svg",
        website: "https://insomnia.rest/",
      },
      {
        name: "Mockoon",
        color: "#FF6B6B",
        logo: "/logos/mockoon.svg",
        website: "https://mockoon.com/",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className={styles.section} id="techstack">
      <div className={styles.inner}>
        <span className={styles.label}>TECH STACK</span>

        <div className={styles.groups}>
          {techGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div key={group.title} className={styles.group}>
                <div className={styles.groupHeader}>
                  <div className={styles.groupIcon}>
                    <Icon size={22} />
                  </div>
                  <h3>{group.title}</h3>
                </div>

                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.website}
                      className={styles.tag}
                      style={
                        {
                          "--accent": item.color,
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className={styles.accentBg}
                        style={{ backgroundColor: item.color }}
                      />

                      <div className={styles.logo}>
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={20}
                          height={20}
                        />
                      </div>

                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
