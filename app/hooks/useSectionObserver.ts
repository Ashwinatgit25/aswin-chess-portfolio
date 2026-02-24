import { useEffect, useState, useRef } from "react";

export function useSectionObserver(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return { activeSection, sectionRefs };
}