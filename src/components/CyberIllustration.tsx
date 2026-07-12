import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import {
  Shield,
  Globe,
  Cpu,
  Network,
  Lock,
  Activity,
  Terminal,
  Radar,
  Server,
  Fingerprint,
} from 'lucide-react';

interface FloatCard {
  icon: typeof Globe;
  label: string;
  color: string;
  glow: string;
  border: string;
  position: string;
  depth: number;
  delay: number;
}

const floatCards: FloatCard[] = [
  {
    icon: Globe,
    label: 'GLOBAL.NET',
    color: 'text-cyber-400',
    glow: 'bg-cyber-500/20',
    border: 'border-cyber-500/30',
    position: 'top-[8%] left-[2%]',
    depth: 40,
    delay: 0,
  },
  {
    icon: Cpu,
    label: 'AI.CORE',
    color: 'text-blue-400',
    glow: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    position: 'top-[12%] right-[2%]',
    depth: 60,
    delay: 1,
  },
  {
    icon: Network,
    label: 'SEC.NET',
    color: 'text-neon-green',
    glow: 'bg-neon-green/20',
    border: 'border-neon-green/30',
    position: 'bottom-[18%] left-[4%]',
    depth: 50,
    delay: 0.5,
  },
  {
    icon: Lock,
    label: 'ENCRYPT',
    color: 'text-neon-purple',
    glow: 'bg-neon-purple/20',
    border: 'border-neon-purple/30',
    position: 'bottom-[12%] right-[5%]',
    depth: 70,
    delay: 1.5,
  },
  {
    icon: Activity,
    label: 'SECURE',
    color: 'text-neon-green',
    glow: 'bg-neon-green/20',
    border: 'border-neon-green/30',
    position: 'top-[42%] right-[-2%]',
    depth: 30,
    delay: 0.8,
  },
  {
    icon: Server,
    label: 'SIEM.LOG',
    color: 'text-cyber-400',
    glow: 'bg-cyber-500/20',
    border: 'border-cyber-500/30',
    position: 'top-[48%] left-[-3%]',
    depth: 55,
    delay: 1.2,
  },
];

const binaryStrings = ['10110', '01101', '11010', '00101', '11100', '01011'];

export default function CyberIllustration() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isTouchDevice]);

  return (
    <div className="relative w-full h-full flex items-center justify-center [perspective:1200px]" aria-hidden="true">
      {/* 3D tilt container */}
      <motion.div
        style={{ rotateX: isTouchDevice ? 0 : rotateX, rotateY: isTouchDevice ? 0 : rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* === Depth layers === */}

        {/* Far: ambient glow */}
        <motion.div
          animate={reducedMotion ? undefined : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square rounded-full bg-cyan-400/20 blur-[120px]"
          style={{ transform: 'translateZ(-100px)' }}
        />

        {/* Outer dashed ring with orbiting nodes */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] aspect-square rounded-full border border-cyber-500/15"
          style={{ borderStyle: 'dashed', transform: 'translateZ(-40px)' }}
        >
          {[0, 90, 180, 270].map((angle, i) => (
            <div
              key={i}
              className="absolute w-2.5 h-2.5 rounded-full bg-cyber-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateX(50%) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Middle ring — counter-rotating */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full border border-blue-500/15"
          style={{ transform: 'translateZ(-20px)' }}
        >
          {[45, 135, 225, 315].map((angle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateX(50%) translateY(-50%)`,
              }}
            />
          ))}
        </motion.div>

        {/* Inner ring */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] aspect-square rounded-full border border-neon-purple/15"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Hex grid overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full opacity-[0.06]"
          style={{
            transform: 'translateZ(-30px)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32V34.64L30 52L0 34.64V17.32Z' fill='none' stroke='%2322d3ee' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 52px',
          }}
        />

       {/* Profile Photo */}
<motion.div
  animate={reducedMotion ? undefined : { scale: [1, 1.03, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute top-[6%] left-[20%] "
>
  <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center">

    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[80px]" />

    {/* Animated Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 rounded-full border-4 border-cyan-400/40"
    />

    {/* Second Ring */}
    <div className="absolute inset-4 rounded-full border border-cyan-400/20" />

    {/* Image */}
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.45)] bg-slate-900">

      <img
        src="/Pic.png"
        alt="Prasanth Veluri"
        className="w-full h-full object-cover object-top"
      />

    </div>

  </div>
</motion.div>
       

        {/* Radar sweep */}
        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-[64%] -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 origin-bottom"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.08) 30deg, transparent 60deg)',
            }}
          />
        </motion.div>

        {/* Floating glass cards with depth parallax */}
        {floatCards.map((card, i) => (
          <motion.div
            key={card.label}
            animate={reducedMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
            className={`absolute ${card.position}`}
            style={{ transform: `translateZ(${card.depth}px)` }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -4 }}
              className={`glass-card px-3 py-2 flex items-center gap-2 ${card.border} border`}
            >
              <div className={`w-6 h-6 rounded-lg ${card.glow} flex items-center justify-center`}>
                <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
              </div>
              <span className="font-mono text-[10px] text-dark-300 tracking-wider">{card.label}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Terminal snippet — bottom center */}
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="glass-card px-3 py-2 flex items-center gap-2 border border-cyber-500/20">
            <Terminal className="w-3.5 h-3.5 text-cyber-400" />
            <span className="font-mono text-[9px] text-cyber-300">
              <span className="text-neon-green">$</span> monitor --threats
              <span className="animate-blink text-cyber-400">_</span>
            </span>
          </div>
        </motion.div>

        {/* Radar icon — top center */}
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute top-[2%] left-1/2 -translate-x-1/2"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="glass-card w-9 h-9 flex items-center justify-center border border-cyber-500/20">
            <Radar className="w-4 h-4 text-cyber-400" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
