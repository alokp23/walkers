import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 w-full flex justify-center relative overflow-hidden">
      
      {/* Huge Background Typography (Fizzi-style) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-[12rem] md:text-[20rem] font-black tracking-tighter whitespace-nowrap text-primary uppercase leading-none mix-blend-overlay">
          Philosophy
        </h2>
      </motion.div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-10 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle inner gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4">The Philosophy</h2>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6 sm:mb-8 text-primary">
                We stripped away the fabric to show you exactly what you're stepping on. No air bubbles, no gimmicks.
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                Walkers is built on pure, engineered physics. Our Levitate Foam technology was designed to break the boundaries of what a modern lifestyle sneaker can be—bringing structural depth, extreme rebound, and forward motion into perfect harmony.
              </p>
            </div>
            
            <motion.div 
              className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/philosophy.webp" 
                alt="The Philosophy" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
