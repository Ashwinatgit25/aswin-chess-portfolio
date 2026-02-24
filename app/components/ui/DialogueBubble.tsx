"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function DialogueBubble({ text }: { text: string }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={text}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass-gold px-6 py-3 rounded-lg max-w-xs text-royal-gold font-serif text-lg border border-royal-gold/50 shadow-2xl"
            >
                {text}
            </motion.div>
        </AnimatePresence>
    );
}