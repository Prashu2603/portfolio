import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Database,
  Search,
  AlertTriangle,
  Cloud,
  Terminal,
  Lock,
  Sparkles,
  ArrowUpRight,
  Hourglass,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'SOC Dashboard',
    description: 'Planned real-time Security Operations Center dashboard for monitoring threats, alerts, and security events.',
    icon: LayoutDashboard,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/25',
    tags: ['SOC', 'Monitoring', 'Real-time'],
  },
  {
    title: 'Splunk SIEM Lab',
    description: 'Planned Splunk SIEM environment for log analysis, correlation rules, and security event management.',
    icon: Database,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/25',
    tags: ['Splunk', 'SIEM', 'Log Analysis'],
  },
  {
    title: 'Threat Detection Dashboard',
    description: 'Planned dashboard for detecting and visualizing cyber threats with ML-driven anomaly detection.',
    icon: Search,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/25',
    tags: ['Threat Detection', 'ML', 'Visualization'],
  },
  {
    title: 'Incident Response Tracker',
    description: 'Planned incident response tracking system for managing security incidents from detection to resolution.',
    icon: AlertTriangle,
    color: 'text-neon-pink',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/25',
    tags: ['IR', 'Tracking', 'Response'],
  },
  {
    title: 'Cloud Security Lab',
    description: 'Planned cloud security laboratory for exploring IAM, network security, and compliance in cloud environments.',
    icon: Cloud,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/25',
    tags: ['Cloud', 'IAM', 'Compliance'],
  },
  {
    title: 'Python Security Toolkit',
    description: 'Planned collection of Python-based security tools for scanning, analysis, and automation of security tasks.',
    icon: Terminal,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/25',
    tags: ['Python', 'Automation', 'Security'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Projects"
          title={
            <>
              Building My <span className="gradient-text">Cyber Arsenal</span>
            </>
          }
          subtitle="No completed projects yet — but six real-world security tools are in development. Each one is crafted to demonstrate hands-on SOC, SIEM, and threat detection skills."
          icon={<Lock className="w-3.5 h-3.5 text-cyber-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass-card overflow-hidden transition-all duration-300 hover:border-white/15"
            >
              {/* Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${project.bgColor} blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />

              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl ${project.borderColor} border`} />
              </div>

              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <motion.div
                  animate={{ y: ['-100%', '300%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  className={`absolute inset-x-0 h-20 ${project.bgColor} blur-xl opacity-30`}
                />
              </div>

              {/* Locked overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-16 h-16 rounded-full ${project.bgColor} ${project.borderColor} border-2 backdrop-blur-md flex items-center justify-center`}>
                  <Lock className={`w-7 h-7 ${project.color}`} />
                </div>
              </div>

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl ${project.bgColor} ${project.borderColor} border flex items-center justify-center`}
                  >
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </motion.div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-amber-400"
                    />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-dark-100 mb-2 group-hover:text-cyber-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-md ${project.bgColor} ${project.borderColor} border text-[10px] font-mono ${project.color}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-dark-500">
                    <Hourglass className="w-3 h-3" />
                    <span className="font-mono text-[10px]">Planned</span>
                  </div>
                  <div className="flex items-center gap-1 text-dark-600 group-hover:text-cyber-400 transition-colors">
                    <Sparkles className="w-3 h-3" />
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
