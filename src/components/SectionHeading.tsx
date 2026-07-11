import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SectionHeading({
  label,
  title,
  subtitle,
  icon,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center gap-4 mb-14 md:mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass shadow-glass">
        {icon}
        <span className="font-mono text-xs tracking-[0.2em] text-cyber-300 uppercase">
          {label}
        </span>
      </div>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-400 text-sm md:text-base max-w-2xl leading-relaxed text-balance">{subtitle}</p>
      )}
    </motion.div>
  );
}
