import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/shared/ScrollReveal';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'About Leamah',
  description:
    'Leamah builds business management software for African SMEs. Rooted in South Africa, built by people who understand the challenges of running a business on the continent.',
};

const TEAM = [
  { name: 'Khumalo Dlamini', role: 'Chief Executive Officer', image: '/images/team/team-1.webp' },
  { name: 'Amara Nkosi', role: 'Chief Technology Officer', image: '/images/team/team-2.webp' },
  { name: 'Thabo Sithole', role: 'Head of Product', image: '/images/team/team-3.webp' },
  { name: 'Naledi Mokoena', role: 'Head of Customer Success', image: '/images/team/team-4.webp' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1e3a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#4ade80] bg-white/10 px-4 py-1.5 rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We build software for African businesses by people who understand African businesses
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission section with image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0a1e3a] mb-6">Built for Africa, from the ground up</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Leamah started from a simple observation: the business software available in South Africa was either too expensive for SMEs, designed for markets with different infrastructure, or so generic it required months of customisation before it became useful.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We set out to change that by building products that understand the reality of running a business in South Africa — the load shedding, the complexity of medical aid, the informal supply chains, the late payments. Every feature in every Leamah product was designed with these realities in mind.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-img.webp"
                  alt="Leamah team at work"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#0a1e3a] rounded-3xl p-10 text-center">
              <svg className="w-8 h-8 text-[#4ade80] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                Our mission is to give every African SME the tools that were previously only available to large corporations at a price that makes sense for the market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0a1e3a] mb-4">The team behind Leamah</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A team of builders and operators with deep experience in South African business.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4 bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#0a1e3a]">{member.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
