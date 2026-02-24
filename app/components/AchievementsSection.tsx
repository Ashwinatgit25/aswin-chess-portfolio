"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

const achievements = [

  {
    title: "Full Stack Development Intern",

    issuer: "Novitech",

    year: "Feb 2025",

  },


  {

    title: "1st Prize – COMNET 25.0",

    issuer:
      "Government College of Engineering, Salem (Project: Fire Fighting Robot)",

    year: "2025",

  },


  {

    title: "Elite Performer Award – COMNET 24.0",

    issuer: "Technical Symposium Recognition",

    year: "2024",

  },


  {

    title: "Certificate of Participation – CreaTech",

    issuer: "Technical Innovation Event",

    year: "2024",

  },


  {

    title: "Basics of Python Certification",

    issuer: "Infosys Springboard",

    year: "2024",

  },


  {

    title: "Java Basics for Beginners",

    issuer: "Udemy",

    year: "2024",

  },


  {

    title: "SQL Fundamentals Certification",

    issuer: "Accenture",

    year: "2024",

  },

];



export default function AchievementsSection() {

  return (

    <section

      id="achievements"

      className="min-h-screen py-20 px-4 md:px-12 bg-royal-dark/30"

    >

      <h2 className="font-serif text-5xl text-royal-gold text-center mb-12">

        Trophy Hall

      </h2>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {achievements.map((ach, i) => (

          <motion.div

            key={ach.title}

            initial={{ opacity: 0, scale: 0.8 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            transition={{ delay: i * 0.1 }}

          >

            <GlassCard

              className="p-6 text-center border-2 border-royal-gold/50 hover:border-royal-gold transition-all"

            >

              {/* Trophy Icon */}

              <div className="text-5xl mb-4">

                🏆

              </div>



              <h3 className="font-serif text-2xl text-royal-gold">

                {ach.title}

              </h3>



              <p className="text-royal-silver mt-2">

                {ach.issuer}

              </p>



              <p className="text-royal-gold mt-1">

                {ach.year}

              </p>

            </GlassCard>

          </motion.div>

        ))}

      </div>

    </section>

  );

}