import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1a0f0a]">
        <Hero />

        {/* Skills Section Placeholder */}
        <section
          id="skills"
          className="min-h-screen bg-[#1a0f0a] flex items-center justify-center px-6"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Skills</h2>
            <p className="text-white/60 text-lg">Coming soon...</p>
          </div>
        </section>

        {/* Experience Section Placeholder */}
        <section
          id="experience"
          className="min-h-screen bg-[#1a0f0a] flex items-center justify-center px-6"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>
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
