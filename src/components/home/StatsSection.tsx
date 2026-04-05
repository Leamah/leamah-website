'use client';

import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const STATS = [
  { value: 500, suffix: '+', label: 'SMEs powered' },
  { value: 4, suffix: '', label: 'Industries served' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 12, suffix: '+', label: 'Cities across SA' },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-[#0a1e3a]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Trusted by businesses across South Africa</h2>
          <p className="text-white/60">Numbers that speak for themselves.</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl lg:text-5xl font-extrabold text-[#4ade80] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
