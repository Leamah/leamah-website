'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { label: 'Zanava', desc: 'Retail', color: '#f59e0b', href: '/zanava' },
  { label: 'Medico', desc: 'Healthcare', color: '#06b6d4', href: '/medico' },
  { label: 'Guluva', desc: 'Logistics', color: '#8b5cf6', href: '/guluva' },
  { label: 'Professional Services', desc: 'Finance', color: '#10b981', href: '/professional-services' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-28 noise"
      style={{ background: '#050b14' }}
    >
      {/* Aurora orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.13) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-180px',
          left: '-120px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.11) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-80px',
          right: '-80px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
          bottom: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div {...fade(0)} className="mb-8">
          <span
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full text-white/70 border"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderColor: 'rgba(255,255,255,0.1)',
              letterSpacing: '0.12em',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
            Business Management Software — South Africa
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.1)}
          className="font-black leading-[1.02] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          One platform.{' '}
          <span className="gradient-text">Four industries.</span>
          <br />
          Built for Africa.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fade(0.22)}
          className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Leamah gives South African SMEs the tools to run retail stores, medical practices,
          logistics operations and professional service businesses — from one platform, at a price that makes sense.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.32)} className="flex flex-col sm:flex-row items-center gap-3 mb-20">
          <Link
            href="/solutions"
            className="glow-btn px-8 py-4 rounded-xl font-semibold text-[#050b14] bg-white text-[0.95rem]"
          >
            See Our Solutions
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-xl font-semibold text-white text-[0.95rem] transition-all hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            Book a Demo →
          </Link>
        </motion.div>

        {/* Product chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="hidden sm:flex items-center gap-2 flex-wrap justify-center"
        >
          <span className="text-xs text-white/25 mr-1 tracking-wider uppercase">Powered by</span>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
            >
              <Link
                href={p.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                />
                {p.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050b14, transparent)' }}
      />
    </section>
  );
}
