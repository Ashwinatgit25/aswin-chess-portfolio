"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSectionObserver } from "../hooks/useSectionObserver";
import DialogueBubble from "./ui/DialogueBubble";
import KingChatbot from "./KingChatbot";


// Sections
const sectionIds = [

    "home",

    "skills",

    "projects",

    "achievements",

    "contact"

];


// King dialogues

const dialogues: Record<string, string> = {

    home: "Welcome Challenger.",

    skills: "Skills sharpen strategy.",

    projects: "Every project is a calculated move.",

    achievements: "Victories define experience.",

    contact: "Let's build something together."

};


// Board movement positions

const positions: Record<string, number> = {

    home: 0,

    skills: 180,

    projects: -180,

    achievements: 260,

    contact: -260

};


export default function KingAvatar() {

    const { activeSection } =

        useSectionObserver(sectionIds);


    const [xPos, setXPos] = useState(0);


    // 👑 CHATBOT STATE

    const [chatOpen, setChatOpen] =

        useState(false);


    // Section move

    useEffect(() => {

        if (activeSection) {

            setXPos(

                positions[activeSection] ?? 0

            );

        }

    }, [activeSection]);


    const dialogue =

        dialogues[activeSection] ||

        "Let's play.";



    return (

        <>

            <motion.div

                className="

fixed bottom-10 left-1/2

z-40 flex items-end gap-4

"

                animate={{ x: xPos }}

                transition={{

                    type: "spring",

                    stiffness: 60,

                    damping: 18

                }}

            >

                {/* 👑 KING */}

                <motion.div

                    onClick={() => setChatOpen(true)}

                    className="

w-20 h-20 md:w-24 md:h-24

cursor-pointer

drop-shadow-[0_0_25px_#D4AF37]

"

                    animate={{ y: [0, -8, 0] }}

                    transition={{

                        duration: 3,

                        repeat: Infinity,

                        ease: "easeInOut"

                    }}

                >

                    {/* KING SVG */}

                    <svg viewBox="0 0 100 100">

                        <circle

                            cx="50"

                            cy="40"

                            r="18"

                            fill="#D4AF37"

                        />

                        <rect

                            x="42"

                            y="58"

                            width="16"

                            height="30"

                            fill="#D4AF37"

                        />

                        <rect

                            x="48"

                            y="10"

                            width="4"

                            height="18"

                            fill="#E6C77A"

                        />

                        <rect

                            x="40"

                            y="18"

                            width="20"

                            height="4"

                            fill="#E6C77A"

                        />

                    </svg>

                </motion.div>



                {/* Dialogue bubble */}

                <div className="pointer-events-none">

                    <DialogueBubble text={dialogue} />

                </div>

            </motion.div>



            {/* 👑 CHATBOT */}

            <KingChatbot

                open={chatOpen}

                onClose={() => setChatOpen(false)}

            />

        </>

    );

}