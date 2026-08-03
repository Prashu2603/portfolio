import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const hasLoaded = sessionStorage.getItem('portfolio-loaded') === 'true';
    return !isMobile && !hasLoaded;
  });

  const completeLoading = () => {
    sessionStorage.setItem('portfolio-loaded', 'true');
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={completeLoading} />}
      </AnimatePresence>

      <Background />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
