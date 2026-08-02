import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Users,
  Target,
  BookOpen,
  Heart,
  Shield,
  Cpu,
  Network,
  Brain,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const bentoCards = [
  {
    title: 'Education',
    icon: GraduationCap,
    span: 'md:col-span-2 md:row-span-2',
    content: [
  { label: 'Degree', value: 'B.Tech Information Technology' },
  { label: 'College', value: 'NBKR Institute of Science and Technology' },
  { label: 'Graduation', value: '2027' },
  { label: 'Status', value: 'Final Year Student' },
],
    accent: 'cyber',
  },
  {
    title: 'Experience',
    icon: Briefcase,
    span: 'md:col-span-2',
   content: [
  {
    label: 'Current Internship',
    value: 'AI & ML Intern • AENEXZ TECH Pvt. Ltd.',
  },
  {
    label: 'Previous Internship',
    value: 'Cyber Security Intern • Supraja Technologies',
  },
],
    accent: 'blue',
  },
  {
    title: 'Leadership',
    icon: Users,
    span: 'md:col-span-2',
   content: [
  {
    label: 'Position',
    value: 'Finance Lead',
  },
  {
    label: 'Organization',
    value: 'IEEE Student Branch NBKRIST',
  },
],
    accent: 'green',
  },
  {
    title: 'Career Goal',
    icon: Target,
    span: 'md:col-span-2',
    content: [
  {
    label: 'Career Vision',
    value:
      'To become a SOC Analyst specializing in SIEM, Splunk, Threat Detection, Incident Response, and Security Monitoring.',
  },
],
    accent: 'purple',
  },
  {
    title: 'Learning Journey',
    icon: BookOpen,
    span: 'md:col-span-4',
    content: [
  {
    label: 'Currently Learning',
    value: 'Artificial Intelligence & Machine Learning',
  },
  {
    label: 'Upcoming Focus',
    value:
      'Splunk Enterprise • SIEM • SOC Operations • Cloud Security',
  },
],
    accent: 'cyber',
  },
  {
    title: 'Interests',
    icon: Heart,
    span: 'md:col-span-4',
   content: [
  {
    label: 'Core Interests',
    value:
      'Cyber Security • SOC Operations • Splunk • SIEM • Threat Hunting • Incident Response • Linux • Networking • AI Security',
  },
],
    accent: 'pink',
  },
];

const accentColors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  cyber: {
    text: 'text-cyber-400',
    bg: 'bg-cyber-500/10',
    border: 'border-cyber-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  green: {
    text: 'text-neon-green',
    bg: 'bg-neon-green/10',
    border: 'border-neon-green/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  purple: {
    text: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    border: 'border-neon-purple/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  },
  pink: {
    text: 'text-neon-pink',
    bg: 'bg-neon-pink/10',
    border: 'border-neon-pink/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
  },
};

const floatingIcons = [
  { Icon: Shield, className: 'top-4 right-4 text-cyber-400/30', delay: 0 },
  { Icon: Cpu, className: 'bottom-4 left-4 text-blue-400/30', delay: 1 },
  { Icon: Network, className: 'top-1/2 right-8 text-neon-green/30', delay: 0.5 },
  { Icon: Brain, className: 'bottom-1/3 right-1/3 text-neon-purple/30', delay: 1.5 },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About"
  title={
  <>
    Who <span className="gradient-text">I Am</span>
  </>
}
subtitle="Cyber Security enthusiast passionate about SOC Operations, Splunk, AI & Machine Learning, and building secure digital systems."
          icon={<Shield className="w-3.5 h-3.5 text-cyber-400" />}
        />
       <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-4xl mx-auto mb-12 text-center text-lg leading-8 text-slate-300"
>
  I'm <span className="text-cyan-400 font-semibold">Prasanth Veluri</span>, a
  final-year B.Tech Information Technology student with a strong passion for
  <span className="text-cyan-400"> Cyber Security</span>,
  <span className="text-cyan-400"> SOC Operations</span>,
  <span className="text-cyan-400"> Splunk</span>, and
  <span className="text-cyan-400"> AI & Machine Learning</span>.
  I enjoy solving real-world security challenges, continuously learning modern
  technologies, and building practical skills through internships and hands-on
  experience. My goal is to begin my career as a
  <span className="text-cyan-400 font-semibold"> SOC Analyst</span> and
  contribute to protecting organizations against evolving cyber threats.
</motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {bentoCards.map((card, index) => {
            const accent = accentColors[card.accent];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative glass-card p-6 overflow-hidden transition-all duration-300 hover:border-white/15 ${accent.glow} ${card.span}`}
              >
                {/* Accent glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${accent.bg} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />

                {/* Floating icons on large card */}
                {card.span.includes('row-span-2') &&
                  floatingIcons.map((float, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, delay: float.delay }}
                      className={`absolute ${float.className}`}
                    >
                      <float.Icon className="w-6 h-6" />
                    </motion.div>
                  ))}

                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${accent.bg} ${accent.border} border flex items-center justify-center`}>
                      <card.icon className={`w-5 h-5 ${accent.text}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-dark-100">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    {card.content.map((item, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-dark-500">
                          {item.label}
                        </span>
                        <span className="text-sm text-dark-200 leading-relaxed">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
