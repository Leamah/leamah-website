'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const INDUSTRIES = [
  {
    name: 'Retail',
    product: 'Zanava',
    desc: 'Real-time stock, supplier management and multi-store analytics for retailers of any size.',
    href: '/zanava',
    accent: '#f59e0b',
    num: '01',
  },
  {
    name: 'Healthcare',
    product: 'Medico',
    desc: 'Patient scheduling, electronic claims and records for clinics and solo practitioners.',
    href: '/medico',
    accent: '#06b6d4',
    num: '02',
  },
  {
    name: 'Logistics and Hire',
    product: 'Guluva',
    desc: 'Equipment availability, online booking and job tracking for hire businesses.',
    href: '/guluva',
    accent: '#8b5cf6',
    num: '03',
  },
  {
    name: 'Professional Services',
    product: 'Pro Services',
    desc: 'Invoicing, time tracking and CRM for consultants, agencies and law firms.',
    href: '/professional-services',
    accent: '#10b981',
    num: '04',
  },
];

export default function IndustryStrip() {
  return (
    <section className="py-28 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-2 rounded-full"
              style={{
                color: '#0a1e3a',
                background: 'rgba(10,30,58,0.06)',
                border: '1px solid rgba(10,30,58,0.1)',
                letterSpacing: '0.14em',
              }}
            >
              Industries
            </span>
            <h2
              className="font-black text-[#0a1e3a] leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Software built around your industry,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1e3a6f, #0a1e3a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                not adapted for it.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Industry rows */}
        <div className="flex flex-col divide-y" style={{ borderTop: '1px solid rgba(10,30,58,0.08)', borderBottom: '1px solid rgba(10,30,58,0.08)' }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={ind.href}
                className="group flex items-center justify-between py-7 gap-6 transition-all"
              >
                <div className="flex items-start gap-6 flex-1">
                  <span
                    className="text-xs font-bold tabular-nums mt-1 w-8 shrink-0"
                    style={{ color: 'rgba(10,30,58,0.25)' }}
                  >
                    {ind.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-xl font-bold text-[#0a1e3a]">{ind.name}</h3>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          color: ind.accent,
                          background: `${ind.accent}15`,
                          border: `1px solid ${ind.accent}25`,
                        }}
                      >
                        {ind.product}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,30,58,0.5)' }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{
                    background: `${ind.accent}12`,
                    color: ind.accent,
                    border: `1px solid ${ind.accent}20`,
                  }}
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
