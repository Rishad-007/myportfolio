"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useState } from "react";

const experienceGroups = [
  {
    title: "Full-Stack Web",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "AI & LLM Integration",
    items: [
      "OpenAI API",
      "LangChain",
      "RAG Pipelines",
      "Prompt Engineering",
      "Function Calling",
      "Embeddings & Vector Search",
      "AI Chat Workflows",
      "LLM-Powered Features",
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      "React Native",
      "Expo",
      "Cross-platform Architecture",
      "Navigation & Deep Linking",
      "State Management",
      "Offline-first Patterns",
      "Push Notifications",
      "App Store Delivery",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "Python",
      "Go",
      "Rust",
      "Microservices",
      "Event-Driven",
      "WebSockets",
      "Message Queues",
      "Background Jobs",
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle ORM",
      "Query Optimization",
      "Data Modeling",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "Nginx",
      "AWS",
      "Google Cloud",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    title: "Security & Reliability",
    items: [
      "JWT/OAuth",
      "Encryption",
      "Key Management",
      "Rate Limiting",
      "Secure Secrets Handling",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Elasticsearch",
      "Kibana",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function WeightlessCard({ title, items }: { title: string; items: string[] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateY = ((event.clientX - centerX) / rect.width) * 10;
        const rotateX = ((centerY - event.clientY) / rect.height) * 10;
        setTilt({ x: rotateX, y: rotateY });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative glass-dark rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(255,107,0,0.28)] focus-within:shadow-[0_0_40px_rgba(255,107,0,0.34)]"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      tabIndex={0}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF6B00]/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-2.5">
          <Briefcase className="h-5 w-5 text-[#FFA500]" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((itemText, index) => (
          <span
            key={`${title}-${itemText}-${index}`}
            className="rounded-full border border-[#FF6B00]/25 bg-[#2b160f]/70 px-3 py-1.5 text-xs font-medium text-white/80"
          >
            {itemText}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#1a0f0a] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-10 top-16 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-[120px]"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-8 h-72 w-72 rounded-full bg-[#FFA500]/10 blur-[130px]"
          animate={{ x: [0, -22, 0], y: [0, 20, 0] }}
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
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Full-Stack, AI & Mobile Experience
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            Building modern web platforms, integrating AI/LLM capabilities, and
            delivering high-quality cross-platform apps with React Native.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {experienceGroups.map((group) => (
            <WeightlessCard
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
