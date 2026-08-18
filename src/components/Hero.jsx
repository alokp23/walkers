import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  
  const imgTranslateX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const imgTranslateY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 w-full perspective-1000 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating 3D Elements */}
      <motion.div 
        style={{ x: translateX, y: translateY, rotateX, rotateY }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-2xl glass-panel rotate-12 blur-[1px] opacity-70" />
        <div className="absolute bottom-[15%] left-[20%] w-40 h-40 rounded-full glass-panel -rotate-12 blur-[2px] opacity-60 bg-blue-500/10" />
        <div className="absolute top-[40%] right-[10%] w-24 h-24 rounded-lg glass-panel rotate-45 blur-[1px] opacity-50 bg-violet-500/10" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-[var(--color-secondary)] mb-8 cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Introducing Levitate Foam
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-gradient drop-shadow-2xl">
            Defy gravity.<br />
            Every step.
          </h1>

          <p className="text-xl text-[var(--color-secondary)] max-w-lg mb-12 font-light leading-relaxed">
            Engineered for all-day comfort. Our proprietary cell-structure midsole absorbs impact and returns energy instantly, giving you a visible lift.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-primary)] text-[var(--color-background)] px-8 py-4 rounded-xl font-semibold text-lg transition-colors hover:opacity-90"
            >
              Shop the Drop
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "var(--glass-bg)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Tech Specs
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Sneaker Photo */}
        <motion.div 
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden glass-panel pointer-events-none shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: imgTranslateX, y: imgTranslateY }}
        >
          <img 
            src="/sneaker.jpg" 
            alt="Walkers Sneaker"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
