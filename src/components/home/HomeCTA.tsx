'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeCTA() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden noise"
      style={{ background: '#050b14' }}
    >
      {/* Aurora */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 65%)',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)',
          filter: 'blur(60px)',
          bottom: '-80px',
          right: '10%',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full"
          style={{
            color: 'rgba(255,255,255,0.4)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            letterSpacing: '0.14em',
          }}
        >
          Get started
        </span>

        <h2
          className="font-black text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
        >
          Ready to see{' '}
          <span className="gradient-text">Leamah</span>{' '}
          in action?
        </h2>

        <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Book a 30-minute demo and we will walk you through the right solution for your business.
          No pressure. No lengthy sales process.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="glow-btn px-9 py-4 rounded-xl font-semibold text-[#050b14] bg-white text-[0.95rem] inline-flex items-center gap-2"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/solutions"
            className="px-9 py-4 rounded-xl font-semibold text-white text-[0.95rem] transition-all hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            Explore Solutions
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
