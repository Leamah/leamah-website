import type { Metadata } from 'next';
import ScrollReveal from '@/components/shared/ScrollReveal';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Leamah team. Book a demo, request a quote or ask a question. We respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1e3a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#4ade80] bg-white/10 px-4 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Get in touch
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you want to book a demo, get a quote or ask a question, we are here. Fill in the form below and a team member will respond within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div>
              <ScrollReveal delay={0.12}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sticky top-24">
                  <h3 className="font-bold text-[#0a1e3a] text-lg mb-6">Contact information</h3>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0a1e3a] mb-0.5">Email</p>
                        <a
                          href="mailto:info@leamah.co.za"
                          className="text-sm text-gray-500 hover:text-[#0a1e3a] transition-colors"
                        >
                          info@leamah.co.za
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0a1e3a] mb-0.5">Location</p>
                        <p className="text-sm text-gray-500">South Africa</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0a1e3a] mb-0.5">Response time</p>
                        <p className="text-sm text-gray-500">Within one business day</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Leamah serves businesses across South Africa. Our team is available Monday to Friday during business hours.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
