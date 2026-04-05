import type { Metadata } from 'next';
import ProductHero from '@/components/shared/ProductHero';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Medico | Healthcare Practice Management Software',
  description:
    'Medico helps South African clinics and practices manage appointments, submit medical aid claims electronically and track inventory. Purpose-built for healthcare.',
};

const FEATURES = [
  {
    title: 'Intelligent appointment scheduling',
    desc: 'Reduce no-shows with automated reminders, manage practitioner availability and fill gaps in the schedule automatically.',
  },
  {
    title: 'Digital claims submission with validation',
    desc: 'Submit claims to medical aids electronically. Medico validates each claim before it goes out so you stop getting rejections.',
  },
  {
    title: 'Electronic health records',
    desc: 'Capture and access patient records securely from any device. POPIA-compliant by design.',
  },
  {
    title: 'Medical inventory tracking',
    desc: 'Track consumables, medication and equipment with expiry date alerts and automatic reorder triggers.',
  },
  {
    title: 'Staff roster optimisation',
    desc: 'Manage nurse and support staff schedules, shift swaps and leave in the same system as your clinical operations.',
  },
  {
    title: 'Practice performance reporting',
    desc: 'Track revenue per practitioner, claims success rate, patient throughput and collection performance in real time.',
  },
];

export default function MedicoPage() {
  return (
    <>
      <ProductHero
        badge="Healthcare"
        headline="Run your practice without the admin overhead"
        intro="Medico handles the paperwork so your team can focus on patients. From booking to billing, every step is streamlined and connected."
        features={FEATURES.map((f) => f.title)}
        variant="medico"
        ctaText="Book a Medico Demo"
        accentColor="#60a5fa"
      />

      {/* Features grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">Every clinical and admin function connected</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Medico removes the friction between your clinical team and your admin team so nothing falls through the cracks.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

      {/* Claims section */}
      <section className="py-20 px-6 bg-[#0a1e3a]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-6">Claims that do not come back rejected</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Medical aid rejections cost your practice time and money. Medico validates every claim against medical aid rules before submission, catching errors before they become problems.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              The result is a higher first-pass acceptance rate, faster payment cycles and less time spent on resubmissions and disputes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
