"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChessBoardBackground from "./components/ChessBoardBackground";
import Navigation from "./components/Navigation";
import KingAvatar from "./components/KingAvatar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import StrategyRoom from "./components/StrategyRoom";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {

  const [matchStarted, setMatchStarted] = useState(false);

  return (

    <main className="relative min-h-screen bg-transparent text-white overflow-x-hidden">


      {/* Background chess board */}

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

              initial={{ scale: 0.8, y: 20 }}

              animate={{ scale: 1, y: 0 }}

              transition={{
                duration: 1,
                ease: "easeOut"
              }}

              className="text-center"
            >

              <h1 className="font-serif text-6xl md:text-8xl text-royal-gold mb-6 tracking-wide drop-shadow-[0_0_10px_black]">

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

                whileTap={{ scale: 0.95 }}

                onClick={() => setMatchStarted(true)}

                className="px-12 py-4 bg-transparent border-2 border-royal-gold text-royal-gold font-serif text-xl uppercase tracking-widest rounded-sm"

              >

                Start the Match

              </motion.button>

            </motion.div>


            {/* Landing Dust Particles */}

            <div className="absolute inset-0 pointer-events-none">

              {[...Array(20)].map((_, i) => (

                <motion.div

                  key={i}

                  className="absolute w-1 h-1 bg-royal-gold/30 rounded-full"

                  initial={{

                    x:
                      typeof window !== "undefined"
                        ? Math.random() * window.innerWidth
                        : 0,

                    y:
                      typeof window !== "undefined"
                        ? Math.random() * window.innerHeight
                        : 0,
                  }}

                  animate={{

                    y: [null, -30, 30, -20, 0],

                    x: [null, 20, -20, 10, 0],

                  }}

                  transition={{

                    duration: 10 + Math.random() * 10,

                    repeat: Infinity,

                    ease: "linear",

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

            <section id="home" className="h-screen flex flex-col items-center justify-center">

              <h2 className="font-serif text-5xl text-royal-gold drop-shadow-[0_0_15px_#D4AF37]">

                Aswinkumar Deivasigamani

              </h2>

              <p className="text-royal-silver mt-6 text-lg">

                ECE Engineer | Future Software Developer | AI Builder

              </p>

            </section>

            <SkillsSection />

            <ProjectsSection />

            <AchievementsSection />

            <ContactSection />

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  );

}