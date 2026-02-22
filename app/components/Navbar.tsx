"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Award } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "skills", label: "Skills", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`glass flex items-center gap-2 rounded-full px-6 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative px-4 py-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFA500] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"
                initial={false}
                animate={{
                  opacity: isActive ? 0.5 : 0,
                }}
              />

              {/* Content */}
              <div className="relative flex items-center gap-2">
                <Icon
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isActive
                      ? "text-[#FF6B00]"
                      : "text-white/70 group-hover:text-[#FF6B00]"
                  }`}
                />
                <span
                  className={`hidden text-sm font-medium transition-colors duration-300 sm:inline ${
                    isActive
                      ? "text-[#FF6B00]"
                      : "text-white/90 group-hover:text-[#FF6B00]"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#FF6B00]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
