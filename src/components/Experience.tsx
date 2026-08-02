import { motion } from 'framer-motion';
import {
  Briefcase,
  Shield,
  Users,
  Brain,
  Lock,
  Network,
  Search,
  DollarSign,
  Calendar,
  Building2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { LucideIcon } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  responsibilities: { text: string; icon: LucideIcon }[];
}

const experiences: Experience[] = [
  {
    role: 'AI & Machine Learning Intern',
    company: 'AENEXZ TECH Pvt. Ltd.',
    period: 'June 2026 – Present',
    current: true,
    icon: Brain,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/30',
    responsibilities: [
      { text: 'Learning AI & ML', icon: Brain },
      { text: 'Python Programming', icon: Briefcase },
      { text: 'AI Applications', icon: Brain },
      { text: 'Data Analysis', icon: Search },
    ],
  },
  {
    role: 'Cyber Security Intern',
    company: 'Supraja Technologies',
    period: 'June 2025 – September 2025',
    icon: Shield,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/30',
    responsibilities: [
      { text: 'Web Security', icon: Lock },
      { text: 'Vulnerability Assessment', icon: Search },
      { text: 'Network Security', icon: Network },
      { text: 'Threat Analysis', icon: Shield },
    ],
  },
  {
    role: 'Finance Team Lead',
    company: 'IEEE SB NBKRIST',
    period: 'Student Leadership',
    icon: Users,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
    responsibilities: [
      { text: 'Budget Planning', icon: DollarSign },
      { text: 'Event Management', icon: Calendar },
      { text: 'Team Leadership', icon: Users },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Experience"
          title={
            <>
              Professional <span className="gradient-text">Journey</span>
            </>
          }
          subtitle="Hands-on experience across AI/ML, cyber security, and leadership."
          icon={<Briefcase className="w-3.5 h-3.5 text-cyber-400" />}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-500/50 via-neon-purple/50 to-neon-green/50 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: 'spring' }}
                  className="relative"
                >
                  <div className={`w-12 h-12 rounded-full glass-strong border-2 ${exp.borderColor} flex items-center justify-center`}>
                    <exp.icon className={`w-5 h-5 ${exp.color}`} />
                  </div>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green" />
                    </span>
                  )}
                  <div className={`absolute inset-0 rounded-full ${exp.bgColor} blur-xl opacity-50`} />
                </motion.div>
              </div>

              {/* Card */}
              <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="group glass-card p-6 overflow-hidden transition-all duration-300 hover:border-white/15"
                >
                  {/* Glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${exp.bgColor} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Period badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${exp.bgColor} ${exp.borderColor} border mb-3 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      <Calendar className={`w-3 h-3 ${exp.color}`} />
                      <span className="font-mono text-[10px] tracking-wider text-dark-300">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-dark-100 mb-1">
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-1.5 text-sm text-dark-400 mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>

                    {/* Responsibilities */}
                    <div className={`flex flex-col gap-2 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: index % 2 !== 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.15 + i * 0.08 + 0.4 }}
                          className={`flex items-center gap-2 text-sm text-dark-200 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <resp.icon className={`w-3.5 h-3.5 ${exp.color} opacity-70`} />
                          <span>{resp.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
