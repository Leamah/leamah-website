import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

const INDUSTRIES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    name: 'Retail',
    color: '#4ade80',
    bg: '#f0fdf4',
    href: '/zanava',
    product: 'Zanava',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    name: 'Healthcare',
    color: '#60a5fa',
    bg: '#eff6ff',
    href: '/medico',
    product: 'Medico',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    name: 'Logistics & Hire',
    color: '#f97316',
    bg: '#fff7ed',
    href: '/guluva',
    product: 'Guluva',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    name: 'Professional Services',
    color: '#a78bfa',
    bg: '#f5f3ff',
    href: '/professional-services',
    product: 'Professional Services',
  },
];

export default function IndustryStrip() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3a] mb-4">Built for your industry</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Not a generic platform with modules bolted on. Each vertical is designed from scratch for how your business actually works.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.08}>
              <Link
                href={ind.href}
                className="group flex flex-col items-start p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: ind.bg, color: ind.color }}
                >
                  {ind.icon}
                </div>
                <h3 className="font-bold text-[#0a1e3a] text-lg mb-1">{ind.name}</h3>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: ind.bg, color: ind.color }}
                >
                  {ind.product}
                </span>
                <span className="mt-auto text-sm font-semibold text-gray-400 group-hover:text-[#0a1e3a] transition-colors">
                  Explore →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
