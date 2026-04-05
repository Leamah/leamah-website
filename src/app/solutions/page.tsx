import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Business Software Solutions for South African SMEs',
  description:
    'Leamah builds purpose-built business management software for South African SMEs across retail, healthcare, logistics and professional services.',
};

const PRODUCTS = [
  {
    name: 'Zanava',
    tag: 'Retail and Inventory',
    tagColor: '#4ade80',
    tagBg: '#f0fdf4',
    description:
      'Zanava gives retailers real-time visibility of stock across multiple locations, automates purchase orders and manages staff and suppliers in one platform.',
    features: [
      'Multi-store stock tracking in real time',
      'Automated purchase order creation',
      'Supplier relationship management',
      'Staff scheduling and timesheets',
      'Loss prevention reporting',
      'Sales analytics and margin tracking',
    ],
    href: '/zanava',
    reverse: false,
  },
  {
    name: 'Medico',
    tag: 'Healthcare',
    tagColor: '#60a5fa',
    tagBg: '#eff6ff',
    description:
      'Medico connects clinical operations and admin in one platform, from patient bookings to medical aid claims submission with built-in validation.',
    features: [
      'Intelligent appointment scheduling',
      'Digital claims submission with validation',
      'Electronic health records',
      'Medical inventory tracking',
      'Staff roster management',
      'Practice performance reporting',
    ],
    href: '/medico',
    reverse: true,
  },
  {
    name: 'Guluva',
    tag: 'Equipment Hire and Logistics',
    tagColor: '#f97316',
    tagBg: '#fff7ed',
    description:
      'Guluva is a dual-sided platform connecting equipment hire and logistics companies with customers who need fast, transparent online booking.',
    features: [
      'Instant online price estimates',
      'Automated equipment availability management',
      'Generator and sanitation hire',
      'Furniture removal and bulk delivery',
      'Real-time job and driver tracking',
      'Automated payment collection',
    ],
    href: '/guluva',
    reverse: false,
  },
  {
    name: 'Professional Services',
    tag: 'Consulting and Services',
    tagColor: '#a78bfa',
    tagBg: '#f5f3ff',
    description:
      'The Professional Services module helps consultants, agencies and service businesses invoice faster, track time automatically and manage client relationships.',
    features: [
      'Invoice generation and automated billing',
      'Client relationship management',
      'Automated time tracking',
      'Document storage',
      'Automated data capture',
      'Revenue analytics',
    ],
    href: '/professional-services',
    reverse: true,
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1e3a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#4ade80] bg-white/10 px-4 py-1.5 rounded-full mb-6">
              Our Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Business software that works for African markets
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Leamah was built to handle the realities of doing business in South Africa: late payments, complex compliance and a diverse customer base. Our solutions are not imported from other markets and adapted. They were built here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product sections */}
      {PRODUCTS.map((product, i) => (
        <section
          key={product.name}
          className={`py-24 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${product.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text */}
              <ScrollReveal className={product.reverse ? 'lg:order-2' : ''}>
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ background: product.tagBg, color: product.tagColor }}
                >
                  {product.tag}
                </span>
                <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">{product.name}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 shrink-0" style={{ color: product.tagColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:scale-[1.02]"
                  style={{ borderColor: product.tagColor, color: product.tagColor }}
                >
                  Explore {product.name} →
                </Link>
              </ScrollReveal>

              {/* Accent card */}
              <ScrollReveal delay={0.12} className={product.reverse ? 'lg:order-1' : ''}>
                <div
                  className="rounded-3xl p-8 text-center flex flex-col items-center justify-center aspect-square max-w-sm mx-auto"
                  style={{ background: product.tagBg }}
                >
                  <span className="text-7xl mb-4">
                    {product.name === 'Zanava' ? '🛒' :
                     product.name === 'Medico' ? '🏥' :
                     product.name === 'Guluva' ? '🚚' : '💼'}
                  </span>
                  <p className="text-2xl font-bold" style={{ color: '#0a1e3a' }}>{product.name}</p>
                  <p className="text-sm mt-2" style={{ color: product.tagColor, fontWeight: 600 }}>{product.tag}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <HomeCTA />
    </>
  );
}
