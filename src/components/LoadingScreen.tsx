import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-cyber-600/20 blur-[100px] animate-glow-pulse" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Shield icon */}
            <div className="relative">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative w-20 h-20 rounded-2xl glass-strong flex items-center justify-center neon-border">
                  <Shield className="w-10 h-10 text-cyber-400" />
                </div>
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-cyber-500/20 blur-2xl animate-glow-pulse" />
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold gradient-text-animated tracking-wider">
                VELURI PRASANTH
              </h1>
              <p className="font-mono text-xs text-cyber-400/70 mt-2 tracking-[0.3em] uppercase">
                Cyber Security Portfolio
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-dark-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-400 to-blue-400"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="font-mono text-xs text-dark-400">
              {Math.min(Math.floor(progress), 100)}% — Initializing secure connection
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
