"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrbitalAnimation from "./OrbitalAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#1a0f0a] pt-24"
    >
      {/* Ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#FF6B00]/20 blur-[120px]"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 z-10 flex flex-col space-y-8 text-center lg:order-1 lg:text-left"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-light tracking-wide text-white md:text-4xl lg:text-5xl"
            >
              Hey, I am
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl xl:text-9xl"
            >
              Rishad
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-3xl font-bold tracking-wide text-[#FF6B00] md:text-4xl lg:text-5xl"
            >
              Web & mobile app Developer
            </motion.h3>
          </div>
          Description
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-xl text-lg leading-relaxed text-white/70 lg:text-xl"
          >
            Passionate about creating stunning digital experiences that combine
            beautiful design with powerful functionality.
          </motion.p>
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden rounded-full bg-[#FF6B00] px-10 py-5 text-xl font-semibold text-white shadow-2xl shadow-[#FF6B00]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
            className="absolute inset-0 bg-linear-to-r from-[#FF6B00] to-[#FFA500]"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Character Placeholder & Orbital Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative order-1 -mt-2 flex h-[460px] -translate-y-6 items-center justify-center md:h-[560px] md:-translate-y-10 lg:order-2 lg:h-[700px] lg:-translate-y-16 lg:justify-end"
        >
          {/* Solar System Orbital Animation */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <OrbitalAnimation />
          </div>

          {/* Character - Bottom Half (Behind Orbit) */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-5 flex items-center justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src="/character.png"
                alt="Noah - 3D Character Bottom"
                fill
                className="object-contain"
                priority
                style={{ clipPath: "inset(50% 0 0 0)" }}
              />
            </div>
          </motion.div>

          {/* Character - Top Half (In Front of Orbit) */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src="/character.png"
                alt="Noah - 3D Character Top"
                fill
                className="object-contain"
                priority
                style={{ clipPath: "inset(0 0 50% 0)" }}
              />
              {/* Glowing effect behind character */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#FF6B00]/10 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/50">Scroll Down</span>
          <svg
            className="h-6 w-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
