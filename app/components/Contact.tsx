"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, Send } from "lucide-react";
import { Linkedin } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "rishad.nur007@gmail.com",
    href: "mailto:rishad.nur007@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+8801770683027",
    href: "tel:+8801770683027",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Live in Bangladesh. Remote · Worldwide",
    href: "https://www.linkedin.com/in/rishad-nur/",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://www.linkedin.com/in/rishad-nur/",
    icon: Linkedin,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "e695d56b-8a20-437b-93e5-6d155fbf58d3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success!");
        event.currentTarget.reset();
        setIsSubmitting(false);
        return;
      }

      setResult("Error");
    } catch {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#1a0f0a] px-6 py-24 md:px-12 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-[120px]"
          animate={{ x: [0, 28, 0], y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-6 h-80 w-80 rounded-full bg-[#FFA500]/10 blur-[130px]"
          animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-2 text-sm font-medium text-[#FFA500]">
            <Sparkles className="h-4 w-4" />
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let’s build something with momentum
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            I design and ship full-stack products, integrate AI/LLM workflows,
            and deliver React Native apps that feel native and fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="grid gap-3"
            >
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <motion.a
                    key={channel.label}
                    variants={item}
                    href={channel.href}
                    className="group glass-dark flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(255,107,0,0.28)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-2 text-[#FFA500]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {channel.label}
                        </p>
                        <p className="text-xs text-white/70 sm:text-sm">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#FFA500]">
                      Connect
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {[
                "AI/LLM Product Builds",
                "Full-Stack Platforms",
                "React Native Apps",
                "Rapid MVP Delivery",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#FF6B00]/30 bg-[#2b160f]/70 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-dark relative rounded-3xl p-6 sm:p-8"
          >
            <div className="absolute -top-6 right-6 rounded-full border border-[#FF6B00]/30 bg-[#2b160f]/80 px-4 py-2 text-xs font-semibold text-[#FFA500]">
              Response under 24 hours
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-[#FF6B00]/20 bg-[#120a07] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF6B00]/50"
                  />
                </label>
                <label className="space-y-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="w-full rounded-xl border border-[#FF6B00]/20 bg-[#120a07] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF6B00]/50"
                  />
                </label>
              </div>

              <label className="space-y-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                Project Type
                <input
                  type="text"
                  name="projectType"
                  placeholder="AI product, mobile app, web platform"
                  className="w-full rounded-xl border border-[#FF6B00]/20 bg-[#120a07] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF6B00]/50"
                />
              </label>

              <label className="space-y-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your goals, timeline, and scope."
                  required
                  className="w-full rounded-xl border border-[#FF6B00]/20 bg-[#120a07] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF6B00]/50"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF6B00] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#FF6B00]/40 transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send inquiry"}
              </button>

              <p className="text-xs text-white/50">{result}</p>

              <p className="text-xs text-white/50">
                Prefer email? Reach out directly at rishad.nur007@gmail.com
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
