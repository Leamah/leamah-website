import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Leamah builds purpose-built software for retail, healthcare, logistics and professional services industries in South Africa.',
};

const INDUSTRIES = [
  {
    name: 'Retail',
    product: 'Zanava',
    href: '/zanava',
    image: '/images/warehouse.jpg',
    imageAlt: 'South African warehouse and retail storage',
    description:
      'South African retail faces unique pressures: tight margins and the challenge of managing stock across multiple locations. Zanava was built to handle these realities without expensive enterprise complexity.',
    points: [
      'Real-time stock visibility across all locations',
      'Designed for the South African supplier and logistics context',
    ],
    bgLight: true,
  },
  {
    name: 'Healthcare',
    product: 'Medico',
    href: '/medico',
    image: '/images/medical-clinic.jpg',
    imageAlt: 'South African medical clinic reception',
    description:
      'Private clinics and practices in South Africa deal with complex medical aid schemes, high admin burden and strict compliance requirements. Medico cuts through the complexity so your team can spend more time on patients.',
    points: [
      'Built around South African medical aid billing rules',
      'POPIA-compliant electronic health records',
      'Reduces claims rejections with pre-submission validation',
    ],
    bgLight: false,
  },
  {
    name: 'Logistics and Hire',
    product: 'Guluva',
    href: '/guluva',
    image: null,
    imageAlt: null,
    description:
      'Equipment hire and logistics is a high-demand, high-coordination business. Guluva digitises the entire workflow, from online booking to driver dispatch, so companies can take more work without adding overhead.',
    points: [
      'Online booking removes manual phone and email orders',
      'Automated availability prevents double-bookings',
      'Real-time tracking keeps customers informed',
    ],
    bgLight: true,
  },
  {
    name: 'Professional Services',
    product: 'Professional Services',
    href: '/professional-services',
    image: null,
    imageAlt: null,
    description:
      'Consultants, accountants, lawyers and agencies all share one problem: they do excellent work but often struggle to invoice promptly, track time accurately and get paid on time. The Leamah Professional Services module solves all three.',
    points: [
      'Automated invoicing and payment reminders',
      'Billable hours tracked automatically',
      'All client documents and communications in one place',
    ],
    bgLight: false,
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1e3a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#4ade80] bg-white/10 px-4 py-1.5 rounded-full mb-6">
              Industries
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Software built around your industry, not adapted for it
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Generic software forces you to work around the tool. Leamah builds around how your industry actually operates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry blocks */}
      {INDUSTRIES.map((industry) => (
        <section
          key={industry.name}
          className={`py-24 px-6 ${industry.bgLight ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <ScrollReveal>
                <span className="inline-block text-xs font-bold text-[#1e3a6f] bg-blue-50 px-3 py-1 rounded-full mb-4">
                  {industry.name}
                </span>
                <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">{industry.name}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{industry.description}</p>
                <ul className="space-y-3 mb-8">
                  {industry.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#4ade80] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a6f] hover:text-[#4ade80] transition-colors"
                >
                  Explore {industry.product} →
                </Link>
              </ScrollReveal>

              {/* Image or placeholder */}
              <ScrollReveal delay={0.12}>
                {industry.image ? (
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt!}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="rounded-3xl bg-gradient-to-br from-[#0a1e3a] to-[#1e3a6f] p-10 text-center aspect-video flex flex-col items-center justify-center">
                    <span className="text-6xl mb-4">
                      {industry.name.includes('Logistics') ? '🚚' : '💼'}
                    </span>
                    <p className="text-white font-bold text-xl">{industry.name}</p>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <HomeCTA />
    </>
  );
}
