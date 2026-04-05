import type { Metadata } from 'next';
import ProductHero from '@/components/shared/ProductHero';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Professional Services | Invoicing, Billing and CRM Software',
  description:
    'Leamah Professional Services helps consultants, accountants, lawyers and agencies get paid faster with automated invoicing, time tracking and client management.',
};

const FEATURES = [
  {
    title: 'Invoice generation and automated billing',
    desc: 'Create professional invoices in seconds and automate recurring billing so no payment gets missed.',
  },
  {
    title: 'Client relationship management',
    desc: 'Keep track of every client interaction, project and document in one place.',
  },
  {
    title: 'Automated time tracking',
    desc: 'Track billable hours automatically and convert them into invoices with one click.',
  },
  {
    title: 'Document storage',
    desc: 'Store contracts, proposals and signed documents securely and link them to the relevant client and project.',
  },
  {
    title: 'Automated data capture',
    desc: 'Capture expenses, receipts and supplier invoices automatically to eliminate manual data entry.',
  },
  {
    title: 'Revenue analytics',
    desc: 'See which clients and projects are most profitable, track outstanding payments and forecast cash flow.',
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <ProductHero
        badge="Consulting and Services"
        headline="Get paid faster. Spend less time on admin."
        intro="The Professional Services module gives consultants, agencies and service businesses the tools to run a tight operation, from the first client meeting to the final invoice."
        features={FEATURES.map((f) => f.title)}
        variant="proservices"
        ctaText="Book a Demo"
        accentColor="#a78bfa"
      />

      {/* Features grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">Built for the way service businesses work</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every feature is designed around the workflow of a professional services business, from proposal to payment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
            <h2 className="text-3xl font-bold text-white mb-6">Every hour tracked. Every invoice sent.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Late or missed invoices are one of the biggest cash flow killers for service businesses. The Professional Services module automates the entire billing cycle so nothing slips through.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you bill by the hour, by project or on retainer, Leamah handles it and sends automated reminders when payment is overdue.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
