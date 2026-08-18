import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl glass-panel px-6 py-3 flex items-center justify-between"
    >
      <div className="font-bold text-xl tracking-tight text-[var(--color-primary)]">
        Walkers
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-secondary)]">
        <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">Philosophy</a>
        <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">Technology</a>
        <a href="#projects" className="hover:text-[var(--color-primary)] transition-colors">Models</a>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-[var(--color-primary)]"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="bg-[var(--color-primary)] text-[var(--color-background)] px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90">
          Shop
        </button>
      </div>
    </motion.nav>
  );
}
