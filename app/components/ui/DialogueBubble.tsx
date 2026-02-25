"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function DialogueBubble({ text }: { text: string }) {

    const [displayedText, setDisplayedText] = useState("");


    // 👑 TYPEWRITER EFFECT

    useEffect(() => {

        let index = 0;

        setDisplayedText("");

        const interval = setInterval(() => {

            index++;

            setDisplayedText(text.slice(0, index));

            if (index >= text.length) {

                clearInterval(interval);

            }

        }, 28); // typing speed (lower = faster)


        return () => clearInterval(interval);

    }, [text]);


    return (

        <AnimatePresence mode="wait">

            <motion.div

                key={text}

                initial={{ opacity: 0, y: 20, scale: .92 }}

                animate={{ opacity: 1, y: 0, scale: 1 }}

                exit={{ opacity: 0, y: -20, scale: .92 }}

                transition={{ duration: .45, ease: "easeOut" }}

                className="

bg-black/85

backdrop-blur-lg

px-5 py-3

rounded-md

border border-royal-gold/40

shadow-[0_0_18px_rgba(212,175,55,.45)]

max-w-[240px]

"

            >

                <p

                    className="

text-sm md:text-base

font-semibold

tracking-wide

text-royal-gold

drop-shadow-[0_0_10px_#D4AF37]

font-serif

leading-relaxed

"

                >

                    {displayedText}

                    <span className="animate-pulse">|</span>

                </p>

            </motion.div>

        </AnimatePresence>

    );

}