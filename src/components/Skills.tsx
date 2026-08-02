import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Database,
  Shield,
  BarChart3,
  Wrench,
  Users,
  Cpu,
  Globe,
  Lock,
  Network,
  Brain,
  GitBranch,
  Terminal,
  LineChart,
  MessageSquare,
  Lightbulb,
  Target,
  GraduationCap,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; icon: LucideIcon }[];
}

const categories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/20',
    skills: [
      { name: 'Python', icon: Terminal },
      { name: 'Java', icon: Cpu },
      { name: 'C', icon: Code2 },
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Layers },
      { name: 'JavaScript', icon: Code2 },
    ],
  },
  {
    title: 'Frameworks',
    icon: Layers,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Django', icon: Layers },
      { name: 'Spring', icon: Layers },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/20',
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'DBMS', icon: Database },
    ],
  },
  {
    title: 'Cyber Security',
    icon: Shield,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/20',
    skills: [
      { name: 'Network Security', icon: Network },
      { name: 'Web Security', icon: Lock },
      { name: 'Threat Analysis', icon: Shield },
      { name: 'Risk Management', icon: Target },
      { name: 'Linux Basics', icon: Terminal },
      { name: 'Cloud Basics', icon: Globe },
    ],
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    color: 'text-neon-pink',
    bgColor: 'bg-neon-pink/10',
    borderColor: 'border-neon-pink/20',
    skills: [
      { name: 'Power BI', icon: LineChart },
      { name: 'Excel', icon: BarChart3 },
      { name: 'Data Analytics', icon: LineChart },
      { name: 'Data Visualization', icon: BarChart3 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/20',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'VS Code', icon: Code2 },
      { name: 'Google Colab', icon: Brain },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'Leadership', icon: Users },
      { name: 'Communication', icon: MessageSquare },
      { name: 'Problem Solving', icon: Lightbulb },
      { name: 'Analytical Thinking', icon: Brain },
      { name: 'Continuous Learning', icon: GraduationCap },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Skills"
          title={
            <>
              Technical <span className="gradient-text">Arsenal</span>
            </>
          }
          subtitle="Technologies and tools I'm working with on my journey into cyber security."
          icon={<Cpu className="w-3.5 h-3.5 text-cyber-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative glass-card p-6 overflow-hidden transition-all duration-300 hover:border-white/15"
            >
              {/* Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${category.bgColor} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-11 h-11 rounded-xl ${category.bgColor} ${category.borderColor} border flex items-center justify-center`}
                >
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-dark-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors"
                  >
                    <skill.icon className={`w-3.5 h-3.5 ${category.color}`} />
                    <span className="text-sm text-dark-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
