"use client";
import { useState } from "react";
import { motion, AnimatePresence, progress } from "framer-motion";
import ChessPiece from "./ui/ChessPiece";
import SkillDashboard from "./SkillDashboard";
import GlassCard from "./ui/GlassCard";

const pieceSkills = [
    { type: "king", label: "Leadership skills", description: "I am the Active Place-Coordinator & Overrall Coordinator of BE-ECE(2023-2027)",progress:95},
    { type: "queen", label: "Full Stack Development", description: "End-to-end product development.currently working on a chatbot(Jarvis)",progress:70},
    { type: "knight", label: "Problem Solving", description: "Creative solutions to complex challenges.",progress:70},
    { type: "rook", label: "Backend Development", description: "Learning & Working On Robust APIs and databases.",progress:60},
    { type: "bishop", label: "Logic and Algorithms", description: "Solving puzzles and coding Challenge daily & have a good Logic building ability.",progress:70},
    { type: "pawn", label: "Learning Skills", description: "Currently Learning FSD,React & Next.js,REST API Development ,Git Collaboration.",progress:60},
];

export default function SkillsSection() {
    const [selectedPiece, setSelectedPiece] = useState<null | typeof pieceSkills[0]>(null);

    return (
        <section id="skills" className="min-h-screen py-20 px-4 md:px-12">
            <h2 className="font-serif text-5xl text-royal-gold text-center mb-12">The Armory – Skills & Pieces</h2>

            {/* Chess pieces grid */}
            <div className="flex flex-wrap justify-center gap-8 mb-20">
                {pieceSkills.map((piece) => (
                    <ChessPiece
                        key={piece.type}
                        type={piece.type}
                        label={piece.label}
                        onClick={() => setSelectedPiece(piece)}
                    />
                ))}
            </div>

            {/* Popup card for piece details */}
            <AnimatePresence>
                {selectedPiece && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedPiece(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            className="glass-gold p-8 rounded-xl max-w-md w-full border border-royal-gold"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="font-serif text-3xl text-royal-gold mb-4">{selectedPiece.label}</h3>
                            <p className="text-royal-silver mb-6">{selectedPiece.description}</p>
                            <div className="mb-4">
                                <div className="flex justify-between text-sm text-royal-gold mb-1">
                                    <span>Mastery</span>
                                    <span>{selectedPiece.progress}%</span>
                                </div>
                                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${selectedPiece.progress}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-royal-gold"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                {/* Tech logos – you can use SVGs or image tags */}
                            </div>
                            <button onClick={() => setSelectedPiece(null)} className="mt-6 text-royal-gold underline">Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Skills dashboard grid */}
            <SkillDashboard />
        </section>
    );
}