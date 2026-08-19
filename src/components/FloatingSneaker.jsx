import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function FloatingSneaker() {
  const { scrollYProgress } = useScroll();
  
  // Apply a spring physics smoothing to the raw scroll value
  // This removes any jumpiness from the mouse wheel or trackpad
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Define the transformation paths based on smooth scroll progress (0 to 1)
  
  // X Position: Dances between the edges to avoid blocking center content
  const x = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['30vw', '-35vw', '35vw', '-35vw', '30vw']
  );

  // Y Position: Subtle bobbing across sections
  const y = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['5vh', '-15vh', '15vh', '-10vh', '10vh']
  );

  // Rotation: Sneaker spins dynamically as it moves side to side
  const rotateZ = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-10, 20, -25, 15, -15]
  );

  // Scale: Shrinks when passing through sections to be less intrusive
  const scale = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1.1, 0.6, 0.7, 0.6, 0.8]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{
          x,
          y,
          rotateZ,
          scale,
        }}
        className="relative w-[300px] sm:w-[400px] lg:w-[600px] aspect-square drop-shadow-2xl flex items-center justify-center"
      >
        {/* Inner motion div for the constant idle hovering/bobbing effect */}
        <motion.div
          animate={{ y: [0, -15, 0], rotateZ: [0, 2, -2, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full h-full"
        >
           <img 
              src="/sneaker.png" 
              alt="Floating Sneaker"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
        </motion.div>
      </motion.div>
    </div>
  );
}
