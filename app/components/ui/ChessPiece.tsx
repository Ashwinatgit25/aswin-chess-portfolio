"use client";

import { motion } from "framer-motion";

interface Props {

  type: string;

  label: string;

  onClick: () => void;

}


export default function ChessPiece({

  type,

  label,

  onClick

}: Props) {

  return (

    <motion.div

      onClick={onClick}

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      whileHover={{

        scale: 1.08,

        rotateX: 6,

        rotateY: -6,

        boxShadow:

          "0 0 40px rgba(212,175,55,.7)"

      }}

      transition={{ duration: .35 }}

      className="

cursor-pointer

p-4

w-[140px]

text-center

rounded-xl


bg-black/80

backdrop-blur-xl


border border-royal-gold/60


shadow-[0_0_20px_rgba(0,0,0,0.9)]


hover:border-royal-gold

"

    >


      {/* PIECE ICON */}

      <div

        className="

text-6xl

mb-4

text-royal-gold

drop-shadow-[0_0_15px_#D4AF37]

"

      >

        {getIcon(type)}

      </div>



      {/* LABEL */}

      <h3

        className="

font-serif

text-lg

text-royal-gold

"

      >

        {label}

      </h3>

    </motion.div>

  );

}



// PIECE ICONS

function getIcon(type: string) {

  switch (type) {

    case "king":

      return "♔";

    case "queen":

      return "♕";

    case "rook":

      return "♖";

    case "bishop":

      return "♗";

    case "knight":

      return "♘";

    default:

      return "♙";

  }

}