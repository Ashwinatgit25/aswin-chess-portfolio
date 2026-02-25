"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChessBoardBackground from "./components/ChessBoardBackground";
import Navigation from "./components/Navigation";
import KingAvatar from "./components/KingAvatar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import JarvisAI from "./components/JarvisAI";

export default function Home() {

  const [matchStarted, setMatchStarted] = useState(false);


  // 👑 KING QUOTES

  const quotes = [

    "Every move defines destiny.",

    "Code like a strategist.",

    "Build. Break. Improve.",

    "Turning ideas into intelligent systems."

  ];

  const [quoteIndex, setQuoteIndex] = useState(0);


  // AUTO CHANGE

  useEffect(() => {

    const interval = setInterval(() => {

      setQuoteIndex(prev => (prev + 1) % quotes.length);

    }, 3500);

    return () => clearInterval(interval);

  }, []);



  return (

    <main className="relative min-h-screen bg-transparent text-white overflow-x-hidden">


      {/* Background */}

      <div className="fixed inset-0 -z-10">

        <ChessBoardBackground />

        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />

      </div>



      <AnimatePresence mode="wait">

        {!matchStarted ? (

          <motion.div

            key="landing"

            initial={{ opacity: 1 }}

            exit={{

              opacity: 0,

              transition: { duration: 1.5 }

            }}

            className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/80 backdrop-blur-sm"

          >

            <motion.div

              initial={{ scale: .8, y: 20 }}

              animate={{ scale: 1, y: 0 }}

              transition={{ duration: 1, ease: "easeOut" }}

              className="text-center"

            >

              <h1

                className="font-serif text-6xl md:text-8xl

text-royal-gold mb-6 tracking-wide

drop-shadow-[0_0_10px_black]"

              >

                Welcome Challenger.

              </h1>


              <p className="font-sans text-xl md:text-2xl text-royal-silver mb-12">

                I am

                <span className="text-royal-gold font-semibold">

                  {" "}Aswin Kumar

                </span>

                {" "}— Strategist & Developer.

              </p>



              <motion.button

                whileHover={{

                  scale: 1.05,

                  boxShadow: "0 0 30px #D4AF37"

                }}

                whileTap={{ scale: .95 }}

                onClick={() => setMatchStarted(true)}

                className="px-12 py-4 bg-transparent border-2 border-royal-gold text-royal-gold font-serif text-xl uppercase tracking-widest rounded-sm"

              >

                Start the Match

              </motion.button>

            </motion.div>



            {/* Particles */}

            <div className="absolute inset-0 pointer-events-none">

              {[...Array(20)].map((_, i) => (

                <motion.div

                  key={i}

                  className="absolute w-1 h-1 bg-royal-gold/30 rounded-full"

                  initial={{

                    x: typeof window !== "undefined"

                      ? Math.random() * window.innerWidth

                      : 0,

                    y: typeof window !== "undefined"

                      ? Math.random() * window.innerHeight

                      : 0

                  }}

                  animate={{

                    y: [null, -30, 30, -20, 0],

                    x: [null, 20, -20, 10, 0]

                  }}

                  transition={{

                    duration: 10 + Math.random() * 10,

                    repeat: Infinity,

                    ease: "linear"

                  }}

                />

              ))}

            </div>

          </motion.div>

        ) : (


          <motion.div

            key="portfolio"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 1 }}

            className="relative"

          >

            <Navigation />

            <KingAvatar />


            {/* HERO */}

            <section

              id="home"

              className="h-screen flex flex-col items-center justify-center"

            >

              <h2

                className="font-serif text-5xl text-royal-gold

drop-shadow-[0_0_15px_#D4AF37]"

              >

                Aswinkumar Deivasigamani

              </h2>



              {/* TAGLINE */}

              <div className="flex justify-center mt-6">

                <div

                  className="

bg-black/80

backdrop-blur-lg

px-8 py-4

rounded-lg

border border-royal-gold/40

shadow-[0_0_25px_rgba(212,175,55,.4)]

"

                >

                  <p

                    className="

text-lg md:text-2xl

font-semibold

tracking-wider

text-royal-gold

drop-shadow-[0_0_12px_#D4AF37]

text-center

"

                  >

                    ECE Engineer | Future Software Developer | AI Builder

                  </p>

                </div>

              </div>



              {/* 👑 FLOATING KING QUOTES */}

              <div className="flex justify-center mt-10">

                <AnimatePresence mode="wait">

                  <motion.div

                    key={quoteIndex}

                    initial={{ opacity: 0, y: 40, scale: .9 }}

                    animate={{ opacity: 1, y: 0, scale: 1 }}

                    exit={{ opacity: 0, y: -30, scale: .9 }}

                    transition={{ duration: .6 }}

                    className="

bg-black/80

backdrop-blur-lg

px-8 py-4

rounded-lg

border border-royal-gold/40

shadow-[0_0_25px_rgba(212,175,55,.4)]

"

                  >

                    <p

                      className="

text-lg md:text-2xl

font-semibold

tracking-wider

text-royal-gold

drop-shadow-[0_0_12px_#D4AF37]

text-center

"

                    >

                      {quotes[quoteIndex]}

                    </p>

                  </motion.div>

                </AnimatePresence>

              </div>

            </section>


            <SkillsSection />

            <ProjectsSection />

            <AchievementsSection />

            <ContactSection />

            <JarvisAI />

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  );

}