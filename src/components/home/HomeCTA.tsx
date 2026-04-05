import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function HomeCTA() {
  return (
    <section className="py-24 px-6 bg-[#0a1e3a]">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to see Leamah in action?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Book a 30-minute demo and we will walk you through the right solution for your business.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-[#0a1e3a] bg-white hover:bg-white/90 transition-all hover:scale-[1.02] shadow-lg text-base"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
