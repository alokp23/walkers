import { motion, useScroll, useTransform } from 'framer-motion';

export default function Background3D({ theme }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -350]);

  const isLight = theme === 'light';
  const blurAmount = isLight ? 'blur-[80px]' : 'blur-[120px]';

  const mesh1 = isLight ? 'bg-gray-200' : 'bg-blue-600/10';
  const mesh2 = isLight ? 'bg-gray-100' : 'bg-violet-600/10';
  const mesh3 = isLight ? 'bg-gray-300' : 'bg-cyan-600/10';

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Ambient Mesh Gradient */}
      <div className={`absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full ${mesh1} ${blurAmount} transition-all duration-700`} />
      <div className={`absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full ${mesh2} ${blurAmount} transition-all duration-700`} />
      <div className={`absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full ${mesh3} ${blurAmount} transition-all duration-700`} />

      {/* Floating Orbs for Spatial Depth */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 15, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, var(--orb-blue), transparent 80%)',
          boxShadow: 'inset -10px -10px 40px rgba(0,0,0,0.1)',
          filter: 'blur(4px)'
        }}
      />
      
      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          rotate: [0, -10, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle at 20% 20%, var(--orb-violet), transparent 80%)',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.1)',
          filter: 'blur(8px)'
        }}
      />
      
      <motion.div 
        style={{ y: y3 }}
        animate={{ 
          y: [0, -40, 0], 
          x: [0, 25, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[30%] w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle at 40% 40%, var(--orb-cyan), transparent 70%)',
          boxShadow: 'inset -15px -15px 50px rgba(0,0,0,0.1)',
          filter: 'blur(6px)'
        }}
      />
    </div>
  );
}
