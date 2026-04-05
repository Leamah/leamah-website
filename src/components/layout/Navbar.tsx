'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  { name: 'Zanava', href: '/zanava', desc: 'Retail and inventory management' },
  { name: 'Medico', href: '/medico', desc: 'Healthcare practice management' },
  { name: 'Guluva', href: '/guluva', desc: 'Equipment hire and logistics' },
  { name: 'Professional Services', href: '/professional-services', desc: 'Invoicing, billing and CRM' },
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
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile on route change
  function handleMobileLink() {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }

  return (
    <nav
      className="sticky top-0 z-40 w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,30,58,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={handleMobileLink}>
          <Image src="/images/logo.png" alt="Leamah" width={36} height={36} className="rounded-md" />
          <span className="text-white font-bold text-lg tracking-tight">Leamah</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <svg
                className="w-3.5 h-3.5 transition-transform"
                style={{ transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  key="dropdown"
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="py-2">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex flex-col px-4 py-3 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-semibold text-[#0a1e3a] text-sm group-hover:text-[#1e3a6f]">{p.name}</span>
                        <span className="text-xs text-gray-400 mt-0.5">{p.desc}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact-us"
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-[#0a1e3a] border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">Solutions</p>
              {PRODUCTS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={handleMobileLink}
                  className="text-white/80 hover:text-white py-2 text-sm font-medium transition-colors"
                >
                  {p.name}
                </Link>
              ))}
              <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleMobileLink}
                    className="text-white/80 hover:text-white py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact-us"
                  onClick={handleMobileLink}
                  className="mt-2 w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
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
