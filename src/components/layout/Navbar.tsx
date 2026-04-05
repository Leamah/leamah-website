'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  { name: 'Zanava', href: '/zanava', desc: 'Retail and inventory management', accent: '#f59e0b' },
  { name: 'Medico', href: '/medico', desc: 'Healthcare practice management', accent: '#06b6d4' },
  { name: 'Guluva', href: '/guluva', desc: 'Equipment hire and logistics', accent: '#8b5cf6' },
  { name: 'Professional Services', href: '/professional-services', desc: 'Invoicing, billing and CRM', accent: '#10b981' },
];

const NAV_LINKS = [
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeMobile = () => { setMobileOpen(false); setSolutionsOpen(false); };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,11,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" onClick={closeMobile} className="flex items-center gap-3 shrink-0">
          <Image src="/images/logo.png" alt="Leamah" width={32} height={32} className="rounded-lg" />
          <span className="text-white font-bold text-[1.05rem] tracking-[-0.02em]">Leamah</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              Solutions
              <svg
                className="w-3.5 h-3.5 opacity-50 transition-transform"
                style={{ transform: solutionsOpen ? 'rotate(180deg)' : 'none' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(8,16,32,0.97)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                  }}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="p-2">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: p.accent, boxShadow: `0 0 6px ${p.accent}80` }}
                        />
                        <div>
                          <span className="block font-semibold text-sm text-white group-hover:text-white">{p.name}</span>
                          <span className="block text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{p.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div
                    className="px-5 py-3 flex items-center justify-between"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-xs font-semibold text-white/40 hover:text-white/70 transition-colors"
                    >
                      View all solutions →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact-us"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white rounded-full transition-all origin-left ${mobileOpen ? 'rotate-45 translate-y-[-1px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all ${mobileOpen ? 'opacity-0 -translate-x-2' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all origin-left ${mobileOpen ? '-rotate-45 translate-y-[1px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(5,11,20,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest mb-2">Solutions</p>
              {PRODUCTS.map((p) => (
                <Link key={p.href} href={p.href} onClick={closeMobile}
                  className="flex items-center gap-3 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                  {p.name}
                </Link>
              ))}
              <div className="mt-3 pt-4 flex flex-col gap-1" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMobile}
                    className="py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact-us"
                  onClick={closeMobile}
                  className="mt-3 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
