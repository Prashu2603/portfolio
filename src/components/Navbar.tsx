import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { useMagnetic } from '../hooks/useAnimations';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctaMagnetic = useMagnetic<HTMLButtonElement>(0.25);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ x: '-50%' }}
        aria-label="Main navigation"
        className={`fixed top-4 left-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[94%] max-w-5xl' : 'w-[96%] max-w-6xl'
        }`}
      >
        <div className="glass-strong backdrop-blur-2xl rounded-2xl border border-cyan-500/20 px-4 md:px-6 py-3 flex items-center justify-between neon-border shadow-glass-lg">
          {/* Logo */}
          <button
            onClick={() => handleClick('#home')}
            aria-label="Go to home"
            className="flex items-center gap-2 group"
          >
            <div className="relative w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <Shield
  className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,1)]"
  strokeWidth={1.8}
/>
              <div className="absolute inset-0 rounded-lg bg-cyber-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-extrabold text-base tracking-wide hidden sm:block">
  <span className="text-white">Prasanth</span>{' '}
  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Veluri
  </span>
</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative px-3 py-1.5 text-sm font-medium text-dark-300 hover:text-cyber-300 transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-cyber-500/10 border border-cyber-500/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <button
            ref={ctaMagnetic.ref}
            onMouseMove={ctaMagnetic.handleMouseMove}
            onMouseLeave={ctaMagnetic.handleMouseLeave}
            onClick={() => handleClick('#contact')}
            style={{ transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-white text-sm font-semibold shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all duration-300"
          >
            Get in Touch
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-cyber-400"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{ x: '-50%' }}
            className="fixed top-20 left-1/2 z-50 w-[90%] max-w-sm md:hidden"
          >
            <div className="glass-strong backdrop-blur-2xl rounded-2xl border border-cyan-500/20 p-4 neon-border shadow-glass-lg">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyber-500/10 text-cyber-300 border border-cyber-500/20'
                        : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
