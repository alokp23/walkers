import { useState, useEffect } from 'react';
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
    <div className="min-h-screen text-[var(--color-primary)] font-sans selection:bg-cyan-500/20 flex flex-col">
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
    </div>
  );
}

export default App;
