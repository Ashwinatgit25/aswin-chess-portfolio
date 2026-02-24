"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useSectionObserver } from "../hooks/useSectionObserver";
import DialogueBubble from "./ui/DialogueBubble";

const sectionIds = ["home", "skills", "projects", "strategy", "achievements", "contact"];

const dialogues: Record<string, string> = {
    home: "Enter the battlefield. Every line of code is a move.",
    skills: "This is how I design scalable systems.",
    projects: "Every project is a calculated move.",
    strategy: "Architecture defines victory.",
    achievements: "Trophies earned through strategy.",
    contact: "Let's plan our next move together."
};

export default function KingAvatar() {
    const { activeSection } = useSectionObserver(sectionIds);
    const avatarRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();

    // Map scroll progress to horizontal movement (0 to window width - avatar width)
    const x = useTransform(scrollYProgress, [0, 1], [0, typeof window !== 'undefined' ? window.innerWidth - 100 : 0]);

    // Animate to the active section's position (alternative: use scroll-driven movement)
    useEffect(() => {
        if (activeSection && avatarRef.current) {
            const sectionElement = document.getElementById(activeSection);
            if (sectionElement) {
                const sectionRect = sectionElement.getBoundingClientRect();
                const avatarRect = avatarRef.current.getBoundingClientRect();
                const targetX = sectionRect.left + window.scrollX - 50; // place near left side
                controls.start({
                    x: targetX,
                    transition: { type: "spring", stiffness: 50, damping: 20 }
                });
            }
        }
    }, [activeSection, controls]);

    // Also update dialogue based on active section
    const dialogue = dialogues[activeSection] || "Let's play.";

    return (
        <motion.div
            ref={avatarRef}
            className="fixed bottom-10 left-0 z-40 flex items-end gap-4 pointer-events-none"
            animate={controls}
            initial={{ x: 0 }}
        >
            {/* 3D or SVG King (here we use an animated SVG for simplicity) */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 md:w-24 md:h-24"
            >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="40" r="18" fill="#D4AF37" stroke="#C0C0C0" strokeWidth="2" />
                    <rect x="42" y="58" width="16" height="30" fill="#D4AF37" stroke="#C0C0C0" strokeWidth="2" />
                    <circle cx="50" cy="30" r="6" fill="#C0C0C0" />
                    <path d="M50 10 L45 20 L55 20 Z" fill="#D4AF37" />
                    <path d="M30 40 L20 30 L20 50 Z" fill="#D4AF37" />
                    <path d="M70 40 L80 30 L80 50 Z" fill="#D4AF37" />
                </svg>
            </motion.div>

            {/* Dialogue bubble */}
            <DialogueBubble text={dialogue} />
        </motion.div>
    );
}