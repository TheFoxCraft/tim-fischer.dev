import About from "./components/About/About";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <About />
        <FeaturedProject />
        WORK IN PROGRESS
        {/* <Projects /> */}
        {/* <Terminal /> */}
        {/* <TechStack /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
}
