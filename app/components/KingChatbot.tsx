"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KingChatbot({

    open,
    onClose

}: { open: boolean, onClose: () => void }) {

    const [input, setInput] = useState("");

    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);


    const [messages, setMessages] = useState([

        {

            role: "king",

            text: "Welcome Challenger. Ask anything about Aswin's skills or projects."

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



    /* 👑 REAL AI */

    async function kingAIReply(question: string) {

        try {

            const res = await fetch(

                "https://api.groq.com/openai/v1/chat/completions",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json",

                        Authorization:
                            `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,

                        body: JSON.stringify({

                            model: "llama-3.3-70b-versatile",

                            messages: [

                                {

                                    role: "system",

                                    content:

                                        "You are King Aswin portfolio AI assistant. Answer professionally about skills projects achievements and resume."

                                },

                                {

                                    role: "user",

                                    content: question

                                }

                            ]

                        })

                    });

            const data = await res.json();

            console.log("AI RESPONSE", data);


            return (

                data?.choices?.[0]?.message?.content

                ?? "The King is silent for a moment."

            );

        }

        catch (error) {

            console.log(error);

            return "The king awaits another question.";

        }

    }



    /* SEND */

    async function sendMessage(text?: string) {

        const msg = text ?? input;

        if (!msg.trim()) return;


        setMessages(prev => [

            ...prev,

            { role: "user", text: msg }

        ]);


        setInput("");

        setLoading(true);


        const reply =

            await kingAIReply(msg);


        setLoading(false);


        setMessages(prev => [

            ...prev,

            {

                role: "king",

                text: reply

            }

        ]);

    }



    /* ENTER SEND */

    function handleKey(e: any) {

        if (e.key === "Enter") {

            e.preventDefault();

            sendMessage();

        }

    }



    const suggestions = [

        "Tell me about skills",

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

                            className="flex justify-between items-center

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



                            {loading && (

                                <p className="text-xs text-royal-gold">

                                    King is thinking...

                                </p>

                            )}



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

                            className="flex gap-2 p-3

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