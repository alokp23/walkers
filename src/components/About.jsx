import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-10 sm:p-16 relative overflow-hidden"
        >
          {/* Subtle inner gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4">The Philosophy</h2>
            <h3 className="text-3xl sm:text-5xl font-medium leading-tight mb-8 text-primary">
              We stripped away the fabric to show you exactly what you're stepping on. No air bubbles, no gimmicks.
            </h3>
            <p className="text-lg text-secondary leading-relaxed max-w-2xl">
              Walkers is built on pure, engineered physics. Our Levitate Foam technology was designed to break the boundaries of what a modern lifestyle sneaker can be—bringing structural depth, extreme rebound, and forward motion into perfect harmony.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
