import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Lock,
  Search,
  Eye,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { LucideIcon } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
}

const certifications: Certification[] = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    icon: Shield,
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/25',
  },
  {
    title: 'Cyber Threat Analysis & Risk Management',
    issuer: 'Professional Certification',
    icon: Search,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/25',
  },
  {
    title: 'Privacy and Security on Online Social Media',
    issuer: 'NPTEL',
    icon: Eye,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/25',
  },
  {
    title: 'Cyber Security Internship Certification',
    issuer: 'Supraja Technologies',
    icon: Lock,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/25',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Certifications"
          title={
            <>
              Verified <span className="gradient-text">Credentials</span>
            </>
          }
          subtitle="Industry-recognized certifications that validate my commitment to cyber security."
          icon={<Award className="w-3.5 h-3.5 text-cyber-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glass-card p-6 overflow-hidden transition-all duration-300 hover:border-white/15"
            >
              {/* Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${cert.bgColor} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />

              {/* Scan line effect on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className={`absolute inset-x-0 h-px ${cert.bgColor} -translate-x-full group-hover:translate-x-full transition-transform duration-1000`} />
              </div>

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl ${cert.bgColor} ${cert.borderColor} border flex items-center justify-center`}
                >
                  <cert.icon className={`w-7 h-7 ${cert.color}`} />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className={`w-4 h-4 ${cert.color} flex-shrink-0`} />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-dark-500">
                      Certified
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-dark-100 mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-dark-400">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-dark-600 group-hover:text-cyber-400 transition-colors flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
