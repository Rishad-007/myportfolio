"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Award, FolderKanban } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
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
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
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
      className={`fixed left-1/2 top-6 z-50 w-[calc(100%-1.5rem)] max-w-max -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`glass flex items-center gap-1 overflow-x-auto rounded-full px-3 py-2 shadow-2xl backdrop-blur-md transition-all duration-300 sm:gap-2 sm:px-5 sm:py-3 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative shrink-0 px-3 py-1.5 transition-all duration-300 sm:px-4 sm:py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-linear-to-r from-[#FF6B00] to-[#FFA500] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70"
                initial={false}
                animate={{
                  opacity: isActive ? 0.5 : 0,
                }}
              />

              <div className="relative flex items-center gap-2">
                <Icon
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isActive
                      ? "text-[#FF6B00]"
                      : "text-white/70 group-hover:text-[#FF6B00]"
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-300 sm:text-sm ${
                    isActive
                      ? "inline text-[#FF6B00]"
                      : "hidden text-white/90 group-hover:text-[#FF6B00]"
                  } sm:inline`}
                >
                  {item.label}
                </span>
              </div>

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
