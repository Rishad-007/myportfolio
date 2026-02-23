import { useState, useEffect, useRef } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    // Create Intersection Observer with flexible thresholds for smoother sync
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        let bestSection = "";
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestSection = id;
          }
        });

        if (bestSection) {
          setActiveSection(bestSection);
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
}
