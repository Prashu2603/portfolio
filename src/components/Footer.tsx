import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { useMagnetic } from '../hooks/useAnimations';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/prashu2603', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/prasanth-veluri', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:prasanthveluri03@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const backToTopMagnetic = useMagnetic<HTMLButtonElement>(0.2);

  return (
    <footer className="relative section-padding py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyber-400" />
              </div>
              <span className="font-display font-bold text-sm tracking-wider">
                <span className="text-dark-100">VELURI</span>{' '}
                <span className="gradient-text">PRASANTH</span>
              </span>
            </div>
            <p className="font-mono text-xs text-dark-500">
              Future SOC Analyst · Cyber Security Enthusiast
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-xs text-dark-400 hover:text-cyber-300 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-400 hover:text-cyber-300 transition-colors"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1.5 text-xs text-dark-500 font-mono">
            © {new Date().getFullYear()} Veluri Prasanth. Crafted with
            <Heart className="w-3 h-3 text-neon-pink fill-neon-pink/30" />
            and code.
          </p>
          <motion.button
            ref={backToTopMagnetic.ref}
            onMouseMove={backToTopMagnetic.handleMouseMove}
            onMouseLeave={backToTopMagnetic.handleMouseLeave}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-cyber-300 text-xs font-medium hover:border-cyber-500/30 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
