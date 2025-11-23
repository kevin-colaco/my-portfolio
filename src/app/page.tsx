import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ContactForm />
    </div>
  );
}
