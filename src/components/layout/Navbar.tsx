import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <nav className="relative container mx-auto px-6 h-16 flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
            <div className="w-3 h-3 rounded-sm bg-primary group-hover:shadow-[0_0_12px_2px_hsl(var(--glow-primary)/0.6)] transition-all duration-300" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            GlitchLabz
          </span>
        </Link>
      </nav>
    </motion.header>
  );
}
