"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
    "Home",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
    "Resume",
];

export default function Navigation() {

    const [active, setActive] = useState("Home");

    const scrollTo = (id: string) => {

        const element = document.getElementById(id.toLowerCase());

        if (element) {

            element.scrollIntoView({ behavior: "smooth" });

            setActive(id);

        }

    };

    return (

        <motion.nav

            initial={{ y: -100 }}

            animate={{ y: 0 }}

            transition={{ duration: 0.8 }}

            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 glass"

        >

            <ul className="flex gap-8 font-serif text-lg">

                {sections.map((item) => (

                    <li key={item}>

                        {/* 👑 RESUME LINK */}

                        {item === "Resume" ? (

                            <a

                                href="/resume.pdf"

                                target="_blank"

                                className="hover:text-royal-gold transition-colors text-royal-silver"

                            >

                                Resume

                            </a>

                        ) : (

                            <button

                                onClick={() => scrollTo(item)}

                                className={`hover:text-royal-gold transition-colors ${active === item

                                        ? "text-royal-gold border-b-2 border-royal-gold"

                                        : "text-royal-silver"

                                    }`}

                            >

                                {item}

                            </button>

                        )}

                    </li>

                ))}

            </ul>

        </motion.nav>

    );

}