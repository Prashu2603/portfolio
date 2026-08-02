import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useMagnetic } from '../hooks/useAnimations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prasanthveluri03@gmail.com',
    href: 'mailto:prasanthveluri03@gmail.com',
    color: 'text-cyber-400',
    bgColor: 'bg-cyber-500/10',
    borderColor: 'border-cyber-500/25',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9441759500',
    href: 'tel:+919441759500',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/25',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nellore, Andhra Pradesh, India',
    href: null,
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
    borderColor: 'border-neon-purple/25',
  },
];

const socials = [
  { icon: Github, href: 'https://github.com/prashu2603', label: 'GitHub', color: 'hover:text-cyber-400' },
  { icon: Linkedin, href: 'https://linkedin.com/in/prasanth-veluri', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Mail, href: 'mailto:prasanthveluri03@gmail.com', label: 'Email', color: 'hover:text-neon-green' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const submitMagnetic = useMagnetic<HTMLButtonElement>(0.15);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/prasanthveluri03@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New portfolio message from ${formData.name}`,
          _template: 'table',
          _honey: '',
        }),
      });

      if (!response.ok) throw new Error('Message submission failed');

      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="relative section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title={
            <>
              Let's <span className="gradient-text">Connect</span>
            </>
          }
          subtitle="Open to internship opportunities, collaborations, and conversations about cyber security."
          icon={<Send className="w-3.5 h-3.5 text-cyber-400" />}
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => {
              const Wrapper = info.href ? 'a' : 'div';
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <Wrapper
                    {...(info.href ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group glass-card p-5 flex items-center gap-4 transition-all hover:border-white/15 cursor-pointer block"
                  >
                    <div className={`w-12 h-12 rounded-xl ${info.bgColor} ${info.borderColor} border flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-dark-500 mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-sm text-dark-200 truncate">{info.value}</div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass-card p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-dark-500 mb-3">
                Follow Me
              </div>
              <div className="flex items-center gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-dark-300 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="glass-card p-5 flex items-center gap-3"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green" />
              </div>
              <span className="text-sm text-dark-300">
                Currently available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cyber-500/10 blur-3xl opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-cyber-400" />
                  <h3 className="font-display font-semibold text-lg text-dark-100">
                    Send a Message
                  </h3>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-wider text-dark-500">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-600" />
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-dark-100 placeholder:text-dark-600 focus:outline-none focus:border-cyber-500/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-wider text-dark-500">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-600" />
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-dark-100 placeholder:text-dark-600 focus:outline-none focus:border-cyber-500/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-wider text-dark-500">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-dark-600" />
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="I'd like to discuss an opportunity..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-dark-100 placeholder:text-dark-600 focus:outline-none focus:border-cyber-500/40 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  ref={submitMagnetic.ref}
                  onMouseMove={submitMagnetic.handleMouseMove}
                  onMouseLeave={submitMagnetic.handleMouseLeave}
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-500 to-blue-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-shadow disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <div aria-live="polite" className="min-h-5 text-center text-xs font-mono">
                  {submitStatus === 'success' && (
                    <p className="inline-flex items-center gap-1.5 text-neon-green">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Message sent successfully. I'll get back to you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="inline-flex items-center gap-1.5 text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Message could not be sent. Please try again or email me directly.
                    </p>
                  )}
                  {submitStatus === 'idle' && (
                    <p className="text-dark-600">Your message will be delivered directly to my inbox.</p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
