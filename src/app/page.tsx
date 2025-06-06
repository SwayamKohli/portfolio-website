import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  );
}