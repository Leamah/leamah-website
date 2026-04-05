import type { Metadata } from 'next';
import ProductHero from '@/components/shared/ProductHero';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Guluva — Equipment Hire and Logistics Software',
  description:
    'Guluva connects equipment hire companies and customers. Online booking for generators, trucks, portable toilets and more. Real-time availability and automated pricing.',
};

const FEATURES = [
  {
    title: 'Instant price estimates',
    desc: 'Customers get a price estimate online in seconds based on equipment type, duration and delivery distance.',
  },
  {
    title: 'Online booking for equipment and transport',
    desc: 'Accept bookings 24/7 without manual back-and-forth. Availability is managed automatically.',
  },
  {
    title: 'Generator and sanitation hire',
    desc: 'Specialised tracking for generator hire including fuel management and scheduled maintenance.',
  },
  {
    title: 'Furniture removal and bulk delivery',
    desc: 'Manage vehicle allocation, routing and crew assignments for removal and delivery jobs.',
  },
  {
    title: 'Real-time job tracking',
    desc: 'See where every driver and piece of equipment is. Keep customers updated automatically.',
  },
  {
    title: 'Automated availability management',
    desc: 'Guluva prevents double-bookings and flags maintenance windows so your fleet is always ready.',
  },
];

export default function GuluvaPage() {
  return (
    <>
      <ProductHero
        badge="Equipment Hire and Logistics"
        headline="Book equipment and transport in minutes, not days"
        intro="Guluva connects hire companies with customers who need equipment fast. Online, automated and transparent from booking to delivery."
        features={FEATURES.map((f) => f.title)}
        variant="guluva"
        ctaText="Book a Guluva Demo"
        accentColor="#f97316"
      />

      {/* Features grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">From instant quote to completed job</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Guluva handles every step of the hire and logistics workflow so your team spends less time on admin and more time on operations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

      {/* Dual-sided platform section */}
      <section className="py-20 px-6 bg-[#0a1e3a]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">For hire companies and for customers</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Guluva is a dual-sided platform. Hire companies manage their fleet, pricing and bookings. Customers browse, book and pay — all in one place.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">For hire and logistics companies</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Manage your full fleet in one dashboard</li>
                  <li>Accept online bookings around the clock</li>
                  <li>Automate availability and prevent conflicts</li>
                  <li>Track driver locations and job status</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">For customers</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Get instant quotes without phone calls</li>
                  <li>Book equipment online 24/7</li>
                  <li>Track deliveries and pickups in real time</li>
                  <li>Pay securely and receive digital receipts</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
