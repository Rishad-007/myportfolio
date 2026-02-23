"use client";

import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import Image from "next/image";

const projects = [
  {
    title: "AP-BP Debate Timer",
    summary: "A debate timer for academic and professional settings.",
    stack: ["React Native", "Expo", "Sync", "Notifications"],
    image: "/AP-BP.png",
  },
  {
    title:
      "University Convocation Registration, payment and certificate generation system",
    summary:
      "A comprehensive system for managing convocation registrations, payments, and certificate generation for universities.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/Convocations.jpg",
  },
  {
    title: "Personal promotion website",
    summary:
      "A personal website to campaign for a political candidate, showcasing their platform, achievements, and upcoming events.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/Vote.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#1a0f0a] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-12 top-8 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-[120px]"
          animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#FFA500]/10 blur-[130px]"
          animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-2 text-sm font-medium text-[#FFA500]">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Selected Work & Case Studies
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            A mix of AI-driven products, scalable platforms, and mobile
            experiences. Screenshots can be swapped in when ready.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group glass-dark rounded-2xl p-5"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-[#FF6B00]/20 bg-[#2b160f]/70">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={450}
                  className="h-44 w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-[#FF6B00]/25 bg-[#2b160f]/70 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
