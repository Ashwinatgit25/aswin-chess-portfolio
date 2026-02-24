"use client";

import GlassCard from "./ui/GlassCard";
import { motion } from "framer-motion";

const techSkills = [

    { name: "Java", percentage: 70 },

    { name: "Python", percentage: 75 },

    { name: "C/C++", percentage: 50 },

    { name: "Frontend(HTML,CSS,JS)", percentage: 70 },

    { name: "Mysql", percentage: 60 },

    { name: "AI Tools", percentage: 80 },

];

export default function SkillDashboard() {

    return (

        <section className="w-full">

            {/* 👑 GOLD GLOW HEADING */}

            <h2 className="text-5xl font-serif text-royal-gold drop-shadow-[0_0_15px_#D4AF37] text-center">

                Skills & Pieces

            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {techSkills.map((skill, index) => (

                    <motion.div

                        key={skill.name}

                        initial={{ opacity: 0, y: 40 }}

                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: index * 0.15 }}

                        whileHover={{

                            scale: 1.05,

                            boxShadow: "0 0 25px #D4AF37"

                        }}

                    >

                        <GlassCard className="p-6">

                            <h3 className="font-serif text-2xl text-royal-gold mb-2">

                                {skill.name}

                            </h3>

                            <div className="flex justify-between text-sm text-royal-silver mb-1">

                                <span>Proficiency</span>

                                <span>{skill.percentage}%</span>

                            </div>


                            {/* 👑 PROGRESS BAR */}

                            <div className="h-3 bg-black/60 rounded-full overflow-hidden">

                                <motion.div

                                    initial={{ width: 0 }}

                                    animate={{

                                        width: `${skill.percentage}%`,

                                        boxShadow: [

                                            "0 0 5px #0a7524",

                                            "0 0 25px #036e2c",

                                            "0 0 10px #008a49"

                                        ]

                                    }}

                                    transition={{

                                        duration: 1.5,

                                        ease: "easeOut"

                                    }}

                                    className="h-full bg-royal-gold shadow-[0_0_15px_#D4AF37]"

                                />

                            </div>

                        </GlassCard>

                    </motion.div>

                ))}

            </div>

        </section>

    );

}