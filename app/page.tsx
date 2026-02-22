import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1a0f0a]">
        <Hero />
        <Skills />
        <Experience />

        {/* Projects Section Placeholder */}
        <section
          id="projects"
          className="min-h-screen bg-[#1a0f0a] flex items-center justify-center px-6"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
            <p className="text-white/60 text-lg">Coming soon...</p>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section
          id="contact"
          className="min-h-screen bg-[#1a0f0a] flex items-center justify-center px-6"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Contact</h2>
            <p className="text-white/60 text-lg">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
