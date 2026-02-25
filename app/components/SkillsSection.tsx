"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChessPiece from "./ui/ChessPiece";
import SkillDashboard from "./SkillDashboard";

const pieceSkills = [

    {

        type: "king",

        label: "Leadership Skills",

        description:

            "I am the Active Place-Coordinator & Overall Coordinator of BE-ECE (2023-2027).",

        progress: 95

    },

    {

        type: "queen",

        label: "Full Stack Development",

        description:

            "End-to-end product development. Currently working on AI assistant Jarvis.",

        progress: 70

    },

    {

        type: "knight",

        label: "Problem Solving",

        description:

            "Creative solutions to complex challenges.",

        progress: 70

    },

    {

        type: "rook",

        label: "Backend Development",

        description:

            "Learning & building robust APIs and database systems.",

        progress: 60

    },

    {

        type: "bishop",

        label: "Logic & Algorithms",

        description:

            "Daily coding practice with strong logical thinking ability.",

        progress: 70

    },

    {

        type: "pawn",

        label: "Learning Skills",

        description:

            "Currently learning FSD, React, Next.js, REST APIs and Git collaboration.",

        progress: 60

    },

];



export default function SkillsSection() {

    const [selectedPiece, setSelectedPiece] =

        useState<null | typeof pieceSkills[0]>(null);



    return (

        <section

            id="skills"

            className="min-h-screen py-20 px-4 md:px-12"

        >

            {/* TITLE */}

            <h2

                className="text-5xl font-serif text-royal-gold

drop-shadow-[0_0_15px_#D4AF37]

text-center mb-12"

            >

                The Armory — Skills & Pieces

            </h2>



            {/* CHESS PIECES */}

            <div

                className="flex flex-wrap

justify-center gap-8 mb-20"

            >

                {pieceSkills.map(piece => (

                    <ChessPiece

                        key={piece.type}

                        type={piece.type}

                        label={piece.label}

                        onClick={() => setSelectedPiece(piece)}

                    />

                ))}

            </div>



            {/* POPUP */}

            <AnimatePresence>

                {selectedPiece && (

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        className="fixed inset-0

z-50 flex items-center

justify-center

bg-black/85 backdrop-blur-md"

                        onClick={() => setSelectedPiece(null)}

                    >

                        <motion.div

                            initial={{ scale: 0.85, y: 60 }}

                            animate={{ scale: 1, y: 0 }}

                            exit={{ scale: 0.85, y: 60 }}

                            transition={{ duration: .4 }}

                            className="

bg-black/80

backdrop-blur-xl

p-8 rounded-xl

max-w-md w-full

border border-royal-gold

shadow-[0_0_35px_rgba(212,175,55,.6)]

"

                            onClick={(e) => e.stopPropagation()}

                        >

                            {/* TITLE */}

                            <h3

                                className="font-serif

text-3xl text-royal-gold mb-4"

                            >

                                {selectedPiece.label}

                            </h3>



                            <p

                                className="text-royal-silver mb-6"

                            >

                                {selectedPiece.description}

                            </p>



                            {/* 👑 PREMIUM PROGRESS BAR */}

                            <div>

                                <div

                                    className="flex

justify-between text-sm

text-royal-gold mb-2"

                                >

                                    <span>Mastery</span>

                                </div>



                                {/* BACKGROUND BAR */}

                                <div

                                    className="

h-3 w-full

bg-black/80

rounded-full

overflow-hidden

border border-green-500/40

"

                                >

                                    {/* GREEN FILL */}

                                    <motion.div

                                        initial={{ width: 0 }}

                                        animate={{

                                            width:

                                                `${selectedPiece.progress}%`

                                        }}

                                        transition={{

                                            duration: 1.6,

                                            ease: "easeOut"

                                        }}

                                        className="

h-full rounded-full

bg-gradient-to-r

from-green-400

via-green-500

to-emerald-600

shadow-[0_0_18px_#22c55e,

0_0_35px_#22c55e]

"

                                    />

                                </div>

                            </div>



                            <button

                                onClick={() =>

                                    setSelectedPiece(null)

                                }

                                className="

mt-6 text-royal-gold

underline

hover:text-white

transition"

                            >

                                Close

                            </button>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>



            {/* DASHBOARD */}

            <SkillDashboard />

        </section>

    );

}