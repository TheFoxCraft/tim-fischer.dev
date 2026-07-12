import About from "../components/About/About";
import Socials from "../components/Socials/Socials";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Hero from "../components/Hero/Hero";
import Projects from "../components/projects/Projects";
import TechStack from "../components/TechStack/TechStack";
import Terminal from "../components/Terminal/Terminal";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />

      <main>
        <Terminal />
        <About />
        <FeaturedProject />
        <Projects />
        <TechStack />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
