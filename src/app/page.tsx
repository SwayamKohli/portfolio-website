import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <FadeUp><About /></FadeUp>
      <FadeUp delay={0.2}><Projects /></FadeUp>
      <FadeUp delay={0.4}><GitHubStats /></FadeUp>
      <FadeUp delay={0.6}><Contact /></FadeUp>
      <Footer />
    </main>
  );
}