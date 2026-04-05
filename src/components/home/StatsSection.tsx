'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const STATS = [
  { value: 500, suffix: '+', label: 'SMEs powered across South Africa', color: '#60a5fa' },
  { value: 4,   suffix: '',  label: 'Industries served by a single platform', color: '#a78bfa' },
  { value: 99,  suffix: '.9%', label: 'Platform uptime, month on month', color: '#34d399' },
  { value: 12,  suffix: '+', label: 'Cities with active Leamah customers', color: '#f59e0b' },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden noise"
      style={{ background: '#030710' }}
    >
      {/* Aurora */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.16em' }}
          >
            By the numbers
          </p>
          <h2
            className="font-black text-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Trusted by businesses{' '}
            <span className="gradient-text">across South Africa</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden' }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-10 text-center"
              style={{ background: 'rgba(255,255,255,0.02)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <p
                className="font-black mb-3 leading-none"
                style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-sm leading-snug max-w-[160px]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
