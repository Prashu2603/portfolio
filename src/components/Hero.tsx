import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { useTypingAnimation, useMagnetic, useMouseParallax } from '../hooks/useAnimations';
import CyberIllustration from './CyberIllustration';

const roles = [
  'SOC Analyst Aspirant',
  'Cyber Security Enthusiast',
  'Splunk & SIEM Learner',
  'Threat Detection Explorer',
  'AI & Machine Learning Student',
];

const easeOut = [0.25, 0.1, 0.25, 1] as const;

function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  strength = 0.3,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'glass';
  strength?: number;
  ariaLabel: string;
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLAnchorElement>(strength);

  return (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      href="#"
      aria-label={ariaLabel}
      style={{ transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      className={
        variant === 'primary'
          ? 'group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyber-500 to-blue-500 text-white font-semibold overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.35)]'
          : 'group relative px-7 py-3.5 rounded-xl glass text-cyber-300 font-semibold hover:bg-white/10 transition-all border border-cyber-500/20'
      }
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

export default function Hero() {
  const typedText = useTypingAnimation(roles, { typeSpeed: 70, deleteSpeed: 35, pauseTime: 1800 });
  const mouse = useMouseParallax();

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 pb-20 md:pt-36 md:pb-24"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          className="flex flex-col gap-6 md:gap-7 order-2 lg:order-1"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeOut }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit shadow-glass"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
            </span>
            <span className="font-mono text-xs text-dark-300">
              Available for Cyber Security Internships • 2027
            </span>
          </motion.div>

          {/* Title with parallax */}
          <motion.div style={{ x: mouse.x * 12, y: mouse.y * 12 }}>
         <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
  className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
>
  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(34,211,238,0.9)]">
    Prasanth Veluri
  </span>
</motion.h1>
          </motion.div>

          {/* Typing subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: easeOut }}
            className="flex items-center gap-3 h-7"
            aria-live="polite"
          >
            <Terminal className="w-5 h-5 text-cyber-400 flex-shrink-0" aria-hidden="true" />
            <div className="font-mono text-base md:text-lg lg:text-xl text-cyber-300">
              <span>{typedText}</span>
              <span className="animate-blink text-cyber-400" aria-hidden="true">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: easeOut }}
            className="text-dark-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Building a career in Cyber Security with a strong focus on SOC Operations, SIEM, Splunk, Threat Detection, and Incident Response. Passionate about securing modern systems, solving real-world security challenges, and continuously learning emerging technologies.{' '}
            <span className="text-cyber-300">Cyber Security</span>,{' '}
            <span className="text-cyber-300">AI & Machine Learning</span>, and{' '}
            <span className="text-cyber-300">SOC Operations</span>. Focused on SIEM,
            Splunk, threat detection, and incident response.
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95, ease: easeOut }}
            className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-dark-400 font-mono"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyber-400" aria-hidden="true" /> Nellore, AP, India
            </span>
            <span className="text-dark-700" aria-hidden="true">|</span>
            <span>Graduating 2027</span>
           
          </motion.div>

          {/* CTA buttons — magnetic */}
         <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.05, ease: easeOut }}
  className="flex flex-wrap items-center gap-3 md:gap-4"
>
  <MagneticButton
    variant="primary"
    strength={0.35}
    ariaLabel="Navigate to contact section"
    onClick={() =>
      document.querySelector("#contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    Hire Me
  </MagneticButton>

  <a
    href="/resume/Veluri_Prasanth_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-7 py-3.5 rounded-xl glass text-cyan-300 font-semibold border border-cyan-500/20 hover:bg-white/10 transition-all">
      View Resume
    </button>
  </a>
</motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15, ease: easeOut }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Github, href: 'https://github.com/prashu2603', label: 'GitHub profile' },
              { icon: Linkedin, href: 'https://linkedin.com/in/prasanth-veluri', label: 'LinkedIn profile' },
              { icon: Mail, href: 'mailto:prasanthveluri03@gmail.com', label: 'Send email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-cyber-300 hover:border-cyber-500/30 transition-colors"
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Cyber Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
         className="relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[680px] xl:h-[720px] order-1 lg:order-2"
        >
          <CyberIllustration />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] md:text-xs text-dark-500 tracking-widest">EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-cyber-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
