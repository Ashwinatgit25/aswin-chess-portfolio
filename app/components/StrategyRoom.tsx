"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/GlassCard";

const projects = [
  {
    title: "AQI Monitor",
    description: "Real-time air quality monitoring with IoT sensors and dashboard.",
    tech: ["React", "Node.js", "Arduino"],
    github: "https://github.com/",
  },
  {
    title: "Jarvis AI",
    description: "Voice-controlled personal assistant with NLP.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/",
  },
  {
    title: "Truth Detector AI",
    description: "Deception detection using micro-expressions and ML.",
    tech: ["Python", "OpenCV", "Keras"],
    github: "https://github.com/",
  },
  {
    title: "Examination Management System",
    description: "Full-stack platform for online exams and grading.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    github: "https://github.com/",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-12 bg-royal-dark/50">
      <h2 className="font-serif text-5xl text-royal-gold text-center mb-12">Battle Moves – Projects</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-royal-gold/30" />

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-16`}
          >
            <GlassCard
              className="w-5/12 p-6 cursor-pointer hover:border-royal-gold transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="font-serif text-2xl text-royal-gold mb-2">{project.title}</h3>
              <p className="text-royal-silver text-sm">{project.description}</p>
              <div className="flex gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-black/30 text-xs text-royal-silver rounded">{t}</span>
                ))}
              </div>
            </GlassCard>
            {/* Chess move marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-royal-gold border-4 border-black" />
          </motion.div>
        ))}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="glass-gold p-8 rounded-xl max-w-lg border border-royal-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-3xl text-royal-gold mb-4">{selectedProject.title}</h3>
              <p className="text-royal-silver mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <span className="text-royal-gold">Tech Stack:</span>
                <div className="flex gap-2 mt-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/50 text-royal-silver rounded">{t}</span>
                  ))}
                </div>
              </div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-black transition"
              >
                View on GitHub
              </a>
              <button onClick={() => setSelectedProject(null)} className="block mt-4 text-royal-gold underline">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}