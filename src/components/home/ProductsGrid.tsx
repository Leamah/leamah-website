import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

const PRODUCTS = [
  {
    icon: '🛒',
    name: 'Zanava',
    tagline: 'Retail and inventory management for growing businesses',
    href: '/zanava',
  },
  {
    icon: '🏥',
    name: 'Medico',
    tagline: 'Practice management and claims processing for clinics',
    href: '/medico',
  },
  {
    icon: '🚚',
    name: 'Guluva',
    tagline: 'Equipment hire and transport booking platform',
    href: '/guluva',
  },
  {
    icon: '💼',
    name: 'Professional Services',
    tagline: 'Invoicing, billing and CRM for service businesses',
    href: '/professional-services',
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#4ade80] bg-green-50 px-4 py-1.5 rounded-full mb-4 border border-green-100">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3a] mb-4">
              One platform. Purpose-built for four industries.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Each product is built from the ground up for its industry — not adapted from a generic tool.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.08}>
              <Link
                href={product.href}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-md h-full"
              >
                <span className="text-4xl mb-4">{product.icon}</span>
                <h3 className="text-lg font-bold text-[#0a1e3a] mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.tagline}</p>
                <span className="mt-4 text-sm font-semibold text-[#1e3a6f] group-hover:text-[#4ade80] transition-colors">
                  Learn more →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
