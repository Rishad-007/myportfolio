"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Smartphone, Code2 } from "lucide-react";

const webSkills = [
  {
    title: "React.js / Next.js",
    description:
      "Build SEO-friendly, fast web apps with reusable component architecture.",
  },
  {
    title: "JavaScript (ES6+) / TypeScript",
    description:
      "Write maintainable, strongly typed logic for scalable frontend and backend systems.",
  },
  {
    title: "Node.js / Express",
    description:
      "Create robust server-side services, middleware, and business logic APIs.",
  },
  {
    title: "REST & GraphQL APIs",
    description:
      "Design and integrate reliable APIs for complex data-driven experiences.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Craft responsive, modern interfaces with utility-first design systems.",
  },
  {
    title: "Firebase / Supabase",
    description:
      "Implement authentication, realtime data, and backend services for rapid delivery.",
  },
];

const mobileSkills = [
  {
    title: "React Native",
    description:
      "Deliver cross-platform mobile apps with a single high-quality codebase.",
  },
  {
    title: "Cross-platform App Architecture",
    description:
      "Structure modules, navigation, and shared logic for long-term maintainability.",
  },
  {
    title: "State Management (Redux/Zustand)",
    description:
      "Manage predictable app state for smooth, scalable user experiences.",
  },
  {
    title: "API Integration & Authentication",
    description:
      "Connect secure backends, handle tokens, and build reliable data flows.",
  },
  {
    title: "Performance-focused UI",
    description:
      "Optimize rendering, interactions, and load times for responsive apps.",
  },
  {
    title: "MVP to Production Delivery",
    description:
      "Ship quickly, then harden features with testing, monitoring, and iteration.",
  },
];

const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#1a0f0a] px-5 py-20 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-[100px] md:h-80 md:w-80 md:blur-[120px]"
          animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#FFA500]/10 blur-[100px] md:h-96 md:w-96 md:blur-[130px]"
          animate={{ x: [0, -30, 0], y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 rounded-full border border-[#FFA500]/20 bg-[#FF6B00]/5 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-14"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-2 text-sm font-medium text-[#FFA500]">
            <Sparkles className="h-4 w-4" />
            Skills & Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Building modern <span className="text-[#FFA500]">Web</span> and{" "}
            <span className="text-[#FF6B00]">Mobile</span> applications
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            I design and develop scalable products with clean architecture,
            responsive interfaces, and robust backend integrations from MVP to
            production.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Responsive Web Apps",
              "Cross-platform Mobile Apps",
              "Backend APIs",
              "Production-ready Delivery",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#FF6B00]/30 bg-[#2b160f]/70 px-3 py-1.5 text-xs font-medium text-white/80 sm:px-4 sm:text-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-dark rounded-3xl"
          >
            <motion.div
              animate={{ y: [0, -10, 0, 8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="p-6 sm:p-7 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#FF6B00]/20 p-2">
                  <Globe className="h-6 w-6 text-[#FFA500]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Web Development
                  </h3>
                  <p className="text-sm text-white/60">
                    Frontend + backend foundations
                  </p>
                </div>
              </div>

              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-3"
              >
                {webSkills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={cardItem}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group rounded-xl border border-[#FF6B00]/20 bg-[#2b160f]/70 px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFA500] transition-colors group-hover:text-[#FF6B00]" />
                      <div>
                        <p className="font-medium text-white/90">
                          {skill.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="glass-dark rounded-3xl"
          >
            <motion.div
              animate={{ y: [0, 8, 0, -10, 0] }}
              transition={{
                duration: 9.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-6 sm:p-7 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#FF6B00]/20 p-2">
                  <Smartphone className="h-6 w-6 text-[#FFA500]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Mobile Development
                  </h3>
                  <p className="text-sm text-white/60">
                    Cross-platform apps with React Native
                  </p>
                </div>
              </div>

              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-3"
              >
                {mobileSkills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={cardItem}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group rounded-xl border border-[#FF6B00]/20 bg-[#2b160f]/70 px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFA500] transition-colors group-hover:text-[#FF6B00]" />
                      <div>
                        <p className="font-medium text-white/90">
                          {skill.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
