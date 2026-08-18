import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 px-4 w-full flex justify-center">
      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 sm:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20 pointer-events-none" />
          
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8 text-gradient relative z-10">
            Step Into<br />The Future.
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--color-primary)] text-[var(--color-background)] px-10 py-5 rounded-full font-bold text-lg transition-all relative z-10 overflow-hidden group"
          >
            <span className="relative z-10">Shop the Drop</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
