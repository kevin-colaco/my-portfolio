import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
