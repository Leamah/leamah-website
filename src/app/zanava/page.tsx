import type { Metadata } from 'next';
import ProductHero from '@/components/shared/ProductHero';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Zanava | Retail and Inventory Management Software',
  description:
    'Zanava helps South African retailers manage multi-store stock, automate purchase orders, track staff and prevent losses. Real-time visibility for growing retail businesses.',
};

const FEATURES = [
  {
    title: 'Real-time multi-store stock tracking',
    desc: 'See exactly what is in stock across every location, updated in real time so you never oversell or run short.',
  },
  {
    title: 'Automated purchase order creation',
    desc: 'Set reorder points and let Zanava generate purchase orders automatically when stock drops below threshold.',
  },
  {
    title: 'Supplier relationship management',
    desc: 'Manage supplier contacts, pricing agreements and lead times in one place.',
  },
  {
    title: 'Staff scheduling and timesheet management',
    desc: 'Build shift schedules, track attendance and manage leave from within the platform.',
  },
  {
    title: 'Loss prevention and shrinkage reporting',
    desc: 'Identify discrepancies between sales and stock movement to reduce shrinkage and theft.',
  },
  {
    title: 'Sales analytics and margin tracking',
    desc: 'See which products drive profit, which are dead stock and where to focus your buying decisions.',
  },
];

export default function ZanavaPage() {
  return (
    <>
      <ProductHero
        badge="Retail and Inventory"
        headline="Run your retail business without the guesswork"
        intro="Zanava gives growing South African retailers the tools to manage stock, staff and suppliers from a single platform. No spreadsheets. No blind spots."
        features={FEATURES.map((f) => f.title)}
        variant="zanava"
        ctaText="Book a Zanava Demo"
        accentColor="#4ade80"
      />

      {/* Features grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">Everything you need to run a tight operation</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Zanava is built around the realities of South African retail, including multi-location complexity and tight margins.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0a1e3a] mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Text section */}
      <section className="py-20 px-6 bg-[#0a1e3a]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-6">Built for South African retailers</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Zanava is not an imported solution adapted for local conditions. It was built here, for the challenges you face every day: variable supplier reliability and customers who expect more than ever.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you run a single shop or a chain across multiple provinces, Zanava scales with you and keeps you in control.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
