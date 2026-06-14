import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Tim Fischer</span>

        <span>
          Built with Next.js and TypeScript. Source on{" "}
          <a
            href="https://github.com/TheFoxCraft/tim-fischer.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
