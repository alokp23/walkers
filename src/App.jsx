import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Dynamic Background color mapped to scroll progress
  // We transition between dark themes (e.g., slate -> teal -> purple)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      theme === 'dark' ? 'rgba(15, 23, 42, 0)' : 'rgba(248, 250, 252, 0)', // Hero
      theme === 'dark' ? 'rgba(13, 148, 136, 0.1)' : 'rgba(45, 212, 191, 0.1)', // About/Features
      theme === 'dark' ? 'rgba(124, 58, 237, 0.1)' : 'rgba(139, 92, 246, 0.1)', // Projects
      theme === 'dark' ? 'rgba(225, 29, 72, 0.1)' : 'rgba(244, 63, 94, 0.1)', // Skills
      theme === 'dark' ? 'rgba(15, 23, 42, 0)' : 'rgba(248, 250, 252, 0)', // Footer
    ]
  );

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-screen text-[var(--color-primary)] font-sans selection:bg-cyan-500/20 flex flex-col transition-colors duration-500"
    >
      <Background3D theme={theme} />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="w-full">
          <Hero />
          <About />
          <Features />
          <Projects />
          <Skills />
          <CTA />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
