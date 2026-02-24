import { motion } from "framer-motion";

interface ChessPieceProps {
  type: string;
  label: string;
  onClick: () => void;
}

export default function ChessPiece({ type, label, onClick }: ChessPieceProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative w-28 h-28 glass-gold rounded-lg flex flex-col items-center justify-center cursor-pointer border border-royal-gold/50 hover:border-royal-gold transition-all"
    >
      {/* Simple chess piece icon (can use Unicode or SVG) */}
      <span className="text-5xl text-royal-gold">
        {type === "king" && "♔"}
        {type === "queen" && "♕"}
        {type === "knight" && "♘"}
        {type === "rook" && "♖"}
        {type === "bishop" && "♗"}
        {type === "pawn" && "♙"}
      </span>
      <span className="text-xs text-royal-silver mt-2 text-center">{label}</span>
    </motion.div>
  );
}