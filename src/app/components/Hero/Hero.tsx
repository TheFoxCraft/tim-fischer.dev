import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.links}>
          <a
            className={styles.iconButton}
            href="https://github.com/TheFoxCraft"
            target="_blank"
          >
            <img src="/icons/github.svg" alt="GitHub" />
          </a>

          <a
            className={styles.iconButton}
            href="https://discord.com/users/1068182029570691082"
            target="_blank"
          >
            <img src="/icons/discord.svg" alt="Discord" />
          </a>
        </div>

        <img src="/profile.png" className={styles.avatar} />

        <h1>Tim Fischer</h1>

        <p className={styles.subtitle}>Java, Kotlin and TypeScript Developer</p>
      </div>

      <div className={styles.scroll}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>

        <span>Scroll</span>
      </div>
    </section>
  );
}
