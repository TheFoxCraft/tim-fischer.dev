import { links } from "@/utils/const";
import styles from "./Socials.module.css";
type Social = {
  label: string;
  href: string;
  icon: string;
  color: string;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: links.github,
    icon: "/logos/github.svg",
    color: "#ffffff",
  },
  {
    label: "Discord",
    href: links.discord,
    icon: "/logos/discord.svg",
    color: "#5865F2",
  },
  {
    label: "Email",
    href: links.email,
    icon: "/logos/email.svg",
    color: "#ff6b6b",
  },

  {
    label: "X",
    href: links.x,
    icon: "/logos/x.svg",
    color: "#ffffff",
  },

  {
    label: "Modrinth",
    href: links.modrinth,
    icon: "/logos/modrinth.svg",
    color: "#1BD96A",
  },

  {
    label: "WakaTime",
    href: links.wakatime,
    icon: "/logos/wakatime.svg",
    color: "#5FAFFF",
  },

  {
    label: "Ko-fi",
    href: links.kofi,
    icon: "/logos/kofi.svg",
    color: "#ff5e5b",
  },

  {
    label: "Matrix",
    href: links.matrix,
    icon: "/logos/matrix.svg",
    color: "#7DE2FF",
  },
];

export default function Socials() {
  return (
    <section className={styles.section} id="socials">
      <div className={styles.inner}>
        <span>SOCIALS</span>

        <h2>My Profiles</h2>

        <p className={styles.subtitle}>
          Where you can find me, my projects and ways to contact me.
        </p>

        <div className={styles.grid}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className={styles.item}
              style={{ ["--accent" as any]: s.color }}
            >
              <img src={s.icon} alt="" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
