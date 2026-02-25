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


    /* AUTO SCROLL */

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages]);



    /* 🔊 SPEAK */

    function speak(text: string) {

        window.speechSynthesis.cancel();

        const utter = new SpeechSynthesisUtterance(text);

        utter.lang = "en-US";

        utter.rate = .95;

        window.speechSynthesis.speak(utter);

    }



    /* 🎤 MIC */

    function startMic() {

        const SpeechRecognition =

            (window as any).SpeechRecognition ||

            (window as any).webkitSpeechRecognition;


        if (!SpeechRecognition) {

            alert("Mic not supported");

            return;

        }

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";

        recognition.start();

        recognition.onresult = (e: any) => {

            setInput(

                e.results[0][0].transcript

            );

        };

    }



    /* 👑 KING LOCAL BRAIN */

    function kingReply(q: string) {

        q = q.toLowerCase();


        if (q.includes("skill"))

            return "Aswin specialises in Java, Python, C/C++, Full Stack Development, MySQL databases and modern AI tools. He focuses on scalable backend systems and clean UI development.";


        if (q.includes("project"))

            return "Major projects include Jarvis AI Assistant, Real or Fake Detector AI and Examination Management System built using Java and MySQL. Frontend works include Portfolio, Calculator and Web Games.";


        if (q.includes("achievement"))

            return "Achievements include COMNET 25.0 First Prize for Fire Fighting Robot, Elite Performer Award and multiple certifications from Infosys, Accenture and Udemy.";


        if (q.includes("resume"))

            return "You may open the Resume directly from the navigation bar to explore academic and technical experience.";


        if (q.includes("hire"))

            return "Aswin combines Electronics Engineering fundamentals with modern software development and AI innovation — making him a strong IT candidate.";


        if (q.includes("contact"))

            return "Scroll to the Contact section and send a message to begin collaboration.";


        return "Interesting move. Explore the portfolio further.";
    }



    /* SEND */

    function sendMessage(text?: string) {

        const msg = text ?? input;

        if (!msg.trim()) return;


        setMessages(prev => [

            ...prev,

            {

                role: "user",

                text: msg

            }

        ]);


        setInput("");


        setTimeout(() => {

            const reply =

                kingReply(msg);


            setMessages(prev => [

                ...prev,

                {

                    role: "king",

                    text: reply

                }

            ]);

        }, 600);

    }



    /* ENTER */

    function handleKey(e: any) {

        if (e.key === "Enter") {

            e.preventDefault();

            sendMessage();

        }

    }


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

bg-black/90

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

                            className="flex justify-between

px-4 py-3

border-b border-royal-gold/30"

                        >

                            <h3

                                className="font-serif text-royal-gold"

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

                            className="flex-1 overflow-y-auto

p-4 space-y-3"

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

flex gap-2

items-start

${m.role === "king"

                                                ?

                                                "bg-black/70 border border-royal-gold/40 text-royal-gold"

                                                :

                                                "bg-emerald-600 text-white"

                                            }

`}

                                    >

                                        <span>{m.text}</span>


                                        {m.role === "king" && (

                                            <button

                                                onClick={() => speak(m.text)}

                                            >

                                                🔊

                                            </button>

                                        )}

                                    </div>

                                </div>

                            ))}


                            {/* Suggestions */}

                            <div className="flex flex-wrap gap-2">

                                {suggestions.map(s => (

                                    <button

                                        key={s}

                                        onClick={() => sendMessage(s)}

                                        className="

text-xs

border border-royal-gold

px-2 py-1

rounded

text-royal-gold

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

                            className="flex gap-2

p-3

border-t border-royal-gold/30"

                        >

                            <button

                                onClick={startMic}

                                className="text-royal-gold"

                            >

                                🎤

                            </button>


                            <input

                                value={input}

                                onChange={(e) => setInput(e.target.value)}

                                onKeyDown={handleKey}

                                placeholder="Ask the King..."

                                className="flex-1

bg-black/70

border border-royal-gold/40

rounded-lg

px-3 py-2

text-white outline-none"

                            />


                            <button

                                onClick={() => sendMessage()}

                                className="px-4

border border-royal-gold

text-royal-gold

rounded-lg

hover:bg-royal-gold

hover:text-black"

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