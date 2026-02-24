import GlassCard from "./ui/GlassCard";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-12 flex items-center justify-center">
      <GlassCard className="max-w-2xl w-full p-8 border border-royal-gold">
        <h2 className="font-serif text-4xl text-royal-gold text-center mb-8">Plan Your Move</h2>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="mailto:aswin@example.com" className="text-royal-gold hover:underline">Email</a>
          <a href="https://github.com/" className="text-royal-gold hover:underline">GitHub</a>
          <a href="https://linkedin.com/" className="text-royal-gold hover:underline">LinkedIn</a>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-black/30 border border-royal-gold/30 text-royal-silver focus:border-royal-gold outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-black/30 border border-royal-gold/30 text-royal-silver focus:border-royal-gold outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 bg-black/30 border border-royal-gold/30 text-royal-silver focus:border-royal-gold outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 border-2 border-royal-gold text-royal-gold font-serif uppercase tracking-wider hover:bg-royal-gold hover:text-black transition"
          >
            Send Message
          </motion.button>
        </form>
      </GlassCard>
    </section>
  );
}