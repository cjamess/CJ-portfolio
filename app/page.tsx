import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navigation />
      <main className="flex-1">
        <Home />
        <Experience />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}
