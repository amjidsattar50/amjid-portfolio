import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Credentials from "@/components/credentials";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Journey from "@/components/journey";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Credentials />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
