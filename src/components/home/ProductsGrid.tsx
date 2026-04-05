'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    name: 'Zanava',
    tagline: 'Retail and inventory management',
    desc: 'Track stock in real time across every location. Automate purchase orders, manage suppliers and schedule staff from one place.',
    href: '/zanava',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
    bg: '#0f0a00',
    span: 'lg:col-span-2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    name: 'Medico',
    tagline: 'Medical practice management',
    desc: 'Appointments, claims and patient records, all handled in one place.',
    href: '/medico',
    accent: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
    bg: '#00080f',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: 'Guluva',
    tagline: 'Equipment hire and logistics',
    desc: 'Book, manage and track equipment and transport jobs in real time.',
    href: '/guluva',
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.15)',
    bg: '#06030f',
    span: 'lg:col-span-1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: 'Professional Services',
    tagline: 'Invoicing, billing and CRM',
    desc: 'Track every billable hour. Generate invoices in one click. Manage clients, documents and revenue all from one dashboard.',
    href: '/professional-services',
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.15)',
    bg: '#000f08',
    span: 'lg:col-span-2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function ProductsGrid() {
  return (
    <section
      className="py-28 px-6 noise"
      style={{ background: '#050b14' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-2 rounded-full"
              style={{
                color: '#4ade80',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.15)',
                letterSpacing: '0.14em',
              }}
            >
              Our Products
            </span>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Purpose-built for{' '}
              <span className="gradient-text">multiple industries.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
              Each platform is built to manage how your business actually works.
            </p>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              className={`${p.span}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={p.href} className="group bento-card block h-full" style={{ background: p.bg }}>
                {/* Glow accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-[20px] opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
                />
                <div className="relative p-8 flex flex-col h-full min-h-[220px]">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${p.glow}`,
                      color: p.accent,
                      border: `1px solid ${p.accent}22`,
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Text */}
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: p.accent, letterSpacing: '0.12em' }}
                  >
                    {p.tagline}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{p.desc}</p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: p.accent }}>
                    Explore {p.name}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
