'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const PILLS = [
  { label: 'Zanava', icon: '🛒', href: '/zanava' },
  { label: 'Medico', icon: '🏥', href: '/medico' },
  { label: 'Guluva', icon: '🚚', href: '/guluva' },
  { label: 'Professional Services', icon: '💼', href: '/professional-services' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white/90 border border-white/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
            Business Management Software
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          One platform.{' '}
          <span className="text-[#4ade80]">Four industries.</span>
          <br />
          Built for Africa.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fade(0.2)}
          className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
        >
          Leamah gives South African SMEs enterprise-grade tools without the enterprise price tag.
          Manage retail, healthcare, logistics and professional services from a single platform.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link
            href="/solutions"
            className="px-8 py-4 rounded-xl font-semibold text-[#0a1e3a] bg-white hover:bg-white/90 transition-all hover:scale-[1.02] shadow-lg"
          >
            See Our Solutions
          </Link>
          <motion.div {...fade(0.35)}>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Product pills — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-3 flex-wrap justify-center">
          {PILLS.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={pill.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 hover:bg-white/20 hover:text-white text-sm font-medium transition-all"
              >
                <span>{pill.icon}</span>
                {pill.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
