import { age } from "@/utils/const";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <span>ABOUT</span>

        <p>
          I’m a {age.int}-year-old student from Germany with a strong interest
          in software development.
        </p>

        <p>
          I mainly work with web technologies and game-related projects. Most of
          what I build comes from trying out ideas or solving small problems I
          run into.
        </p>
      </div>
    </section>
  );
}
