import Link from 'next/link';
import DashboardMockup from './DashboardMockup';

interface ProductHeroProps {
  badge: string;
  headline: string;
  intro: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  variant: 'zanava' | 'medico' | 'guluva' | 'proservices';
  accentColor?: string;
}

export default function ProductHero({
  badge,
  headline,
  intro,
  features,
  ctaText = 'Book a Demo',
  ctaHref = '/contact-us',
  variant,
  accentColor = '#4ade80',
}: ProductHeroProps) {
  return (
    <section className="bg-[var(--color-navy)] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ background: accentColor + '22', color: accentColor, border: `1px solid ${accentColor}44` }}
            >
              {badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">{headline}</h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">{intro}</p>

            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: accentColor, color: '#0a1e3a' }}
            >
              {ctaText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: mockup */}
          <div className="flex justify-center">
            <DashboardMockup variant={variant} />
          </div>
        </div>
      </div>
    </section>
  );
}
