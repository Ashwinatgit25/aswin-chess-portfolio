"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KingChatbot({

    open,

    onClose

}: { open: boolean, onClose: () => void }) {


    const [input, setInput] = useState("");

    const messagesEndRef = useRef<HTMLDivElement>(null);


    const [messages, setMessages] = useState([

        {

            role: "king",

            text: "Welcome Challenger. Ask about my skills, projects or achievements."

        }

    ]);


    // AUTO SCROLL

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages]);



    // 🔊 SPEAK

    function speak(text: string) {

        window.speechSynthesis.cancel();

        const utter = new SpeechSynthesisUtterance(text);

        utter.lang = "en-US";

        utter.rate = .95;

        const voices = window.speechSynthesis.getVoices();

        const voice = voices.find(v => v.lang.includes("en"));

        if (voice) utter.voice = voice;

        window.speechSynthesis.speak(utter);

    }



    // KING AI REPLY

    function kingReply(q: string) {

        q = q.toLowerCase();


        if (q.includes("skill"))

            return "His armory includes Full Stack Development, Backend APIs and Logic mastery.";

        if (q.includes("project"))

            return "Jarvis AI, Real or Fake Detector and Examination Management System are his strongest moves.";

        if (q.includes("achievement"))

            return "COMNET First Prize and multiple industry certifications mark his victories.";

        if (q.includes("resume"))

            return "You may access the resume directly from the navigation bar.";

        if (q.includes("contact"))

            return "Proceed to the Contact section and begin collaboration.";

        if (q.includes("hire"))

            return "Because Aswin blends Electronics Engineering discipline with modern software innovation.";

        return "Interesting move. Explore the board further.";

    }



    // SEND MESSAGE

    function sendMessage(text?: string) {

        const msg = text ?? input;

        if (!msg.trim()) return;

        const user = {

            role: "user",

            text: msg

        };

        setMessages(prev => [...prev, user]);

        setInput("");


        // KING THINK

        setTimeout(() => {

            const replyText = kingReply(msg);

            setMessages(prev => [

                ...prev,

                {

                    role: "king",

                    text: replyText

                }

            ]);

        }, 600);

    }



    // ENTER SEND

    function handleKey(e: any) {

        if (e.key === "Enter") {

            e.preventDefault();

            sendMessage();

        }

    }



    // ⭐ Suggested Buttons

    const suggestions = [

        "Show Skills",

        "Projects",

        "Achievements",

        "Why hire Aswin?",

        "Resume"

    ];



    return (

        <AnimatePresence>

            {open && (

                <motion.div

                    initial={{ x: 350, opacity: 0 }}

                    animate={{ x: 0, opacity: 1 }}

                    exit={{ x: 350, opacity: 0 }}

                    transition={{ duration: .4 }}

                    className="fixed bottom-8 right-8 z-[200]"

                >

                    <div

                        className="

w-[340px]

h-[520px]

bg-black/85

backdrop-blur-xl

rounded-2xl

border border-royal-gold/40

shadow-[0_0_35px_rgba(212,175,55,.5)]

flex flex-col

overflow-hidden

"

                    >


                        {/* HEADER */}

                        <div

                            className="flex justify-between items-center

px-4 py-3

border-b border-royal-gold/30"

                        >

                            <h3

                                className="font-serif

text-royal-gold text-lg

drop-shadow-[0_0_10px_#D4AF37]"

                            >

                                ♔ King's Counsel

                            </h3>


                            <button

                                onClick={onClose}

                                className="text-royal-gold"

                            >

                                ✕

                            </button>

                        </div>



                        {/* CHAT */}

                        <div

                            className="flex-1 overflow-y-auto p-4 space-y-3"

                        >

                            {messages.map((m, i) => (

                                <div

                                    key={i}

                                    className={`flex

${m.role === "user"

                                            ? "justify-end"

                                            : "justify-start"

                                        }`}

                                >

                                    <div

                                        className={`

px-4 py-2

rounded-xl

text-sm

max-w-[85%]

leading-relaxed

flex gap-2

items-start

${m.role === "king"

                                                ?

                                                "bg-black/70 border border-royal-gold/30 text-royal-gold"

                                                :

                                                "bg-emerald-600 text-white"

                                            }

`}

                                    >

                                        <span>{m.text}</span>


                                        {/* 🔊 KING SPEAKER */}

                                        {m.role === "king" && (

                                            <button

                                                onClick={() => speak(m.text)}

                                                title="Speak"

                                            >

                                                🔊

                                            </button>

                                        )}

                                    </div>

                                </div>

                            ))}



                            {/* ⭐ Suggested Questions */}

                            <div className="flex flex-wrap gap-2 mt-2">

                                {suggestions.map((s) => (

                                    <button

                                        key={s}

                                        onClick={() => sendMessage(s)}

                                        className="

text-xs

border border-royal-gold/40

text-royal-gold

px-2 py-1

rounded-md

hover:bg-royal-gold

hover:text-black

transition

"

                                    >

                                        {s}

                                    </button>

                                ))}

                            </div>


                            <div ref={messagesEndRef} />

                        </div>



                        {/* INPUT */}

                        <div

                            className="flex gap-2 p-3

border-t border-royal-gold/30"

                        >

                            <input

                                value={input}

                                onChange={(e) => setInput(e.target.value)}

                                onKeyDown={handleKey}

                                placeholder="Ask the King..."

                                className="flex-1 bg-black/70

border border-royal-gold/40

rounded-lg px-3 py-2

text-white outline-none"

                            />


                            <button

                                onClick={() => sendMessage()}

                                className="px-4

border border-royal-gold

text-royal-gold

rounded-lg

hover:bg-royal-gold

hover:text-black

transition"

                            >

                                Send

                            </button>

                        </div>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}