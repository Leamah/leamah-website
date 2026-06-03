'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const PRODUCTS = [
  { label: 'Zanava', desc: 'Inventory', color: '#f59e0b', href: '/zanava' },
  { label: 'AugHale', desc: 'Augmented Health', color: '#06b6d4', href: '/aughale' },
  { label: 'Guluva', desc: 'Logistics', color: '#8b5cf6', href: '/guluva' },
  { label: 'Professional Services', desc: 'Finance', color: '#10b981', href: '/professional-services' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden px-6 pt-28 pb-0 noise"
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

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">

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
            Tailored Business Solutions | South Africa
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.1)}
          className="font-black leading-[1.02] tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          One partner.{' '}
          <span className="gradient-text">Multiple industries.</span>
          <br />
          Built for Africa.
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fade(0.22)}
          className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Leamah is a South African IT solutions company partnering with individuals and SMEs to deliver purpose-built software that works for your industry and your business, built around the realities of doing business in Africa.
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

      {/* Dashboard image */}
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto mt-16 px-2 sm:px-6"
      >
        {/* Glow bloom */}
        <div
          className="absolute inset-x-16 -bottom-6 h-24 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(96,165,250,0.35) 0%, rgba(167,139,250,0.15) 50%, transparent 70%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Floating + tilt wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ perspective: 1200 }}
        >
          <motion.div
            ref={imgRef}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden cursor-default"
            whileHover={{ scale: 1.012 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shimmer border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none z-20"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.10), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(96,165,250,0.08)',
              }}
            />
            {/* Top-edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none z-20"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
            />

            <Image
              src="/images/dashboard-hero.png"
              alt="Leamah business dashboard"
              width={1400}
              height={875}
              className="w-full h-auto block"
              priority
            />

            {/* Subtle inner shine overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 55%)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to top, #050b14 20%, transparent)' }}
      />
    </section>
  );
}
