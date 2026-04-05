'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSessionId } from '@/lib/session';
import { track, submitLead } from '@/lib/track';

type Step = 'idle' | 1 | 2 | 3 | 'success';

const INTERESTS = [
  { label: 'Retail & Inventory', value: 'zanava', sub: 'Zanava' },
  { label: 'Healthcare', value: 'medico', sub: 'Medico' },
  { label: 'Logistics & Hire', value: 'guluva', sub: 'Guluva' },
  { label: 'Professional Services', value: 'proservices', sub: 'Invoicing' },
  { label: 'Something else', value: 'other', sub: '' },
];

const INTENTS = [
  { label: 'Book a Demo', value: 'demo' },
  { label: 'Get a Quote', value: 'quote' },
  { label: 'Talk to Sales', value: 'sales' },
  { label: 'Partnership', value: 'partnership' },
];

export default function CTAWidget() {
  const [step, setStep] = useState<Step>('idle');
  const [interest, setInterest] = useState('');
  const [intent, setIntent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Prevent body scroll when modal open
  useEffect(() => {
    if (step !== 'idle') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [step]);

  function open() {
    setStep(1);
    track('cta_opened');
  }

  function close() {
    track('cta_closed');
    setStep('idle');
    setInterest('');
    setIntent('');
    setName('');
    setEmail('');
    setPhone('');
    setError('');
  }

  function selectInterest(val: string) {
    setInterest(val);
    track('step1_selected', { interest: val });
    setStep(2);
  }

  function selectIntent(val: string) {
    setIntent(val);
    track('step2_selected', { intent: val });
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }
    setSubmitting(true);
    const session = getSessionId();
    const result = await submitLead({
      session,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest,
      intent,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    });
    setSubmitting(false);
    if (result.ok) {
      track('lead_submitted', { interest, intent });
      setStep('success');
    } else {
      setError('Something went wrong. Please try again.');
    }
  }

  const progressStep = step === 1 ? 1 : step === 2 ? 2 : step === 3 || step === 'success' ? 3 : 0;

  return (
    <>
      {/* Fixed trigger button */}
      <button
        onClick={open}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl font-semibold text-white transition-all hover:scale-105 active:scale-95"
        style={{ background: '#0a1e3a', border: '1px solid rgba(255,255,255,0.15)' }}
        aria-label="Get in touch"
      >
        {/* Pulsing green dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="cta-pulse absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]" />
        </span>
        Get in Touch
      </button>

      {/* Modal */}
      <AnimatePresence>
        {step !== 'idle' && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Card */}
            <motion.div
              key="card"
              className="fixed z-50 inset-x-4 bottom-24 sm:inset-auto sm:right-6 sm:bottom-24 sm:w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                {/* Progress dots */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: progressStep >= dot ? '#4ade80' : '#e5e7eb',
                        transform: progressStep === dot ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={close}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-6 py-5">
                <AnimatePresence mode="wait">
                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.18 }}
                    >
                      <h2 className="text-lg font-bold text-[#0a1e3a] mb-1">What can we help you with?</h2>
                      <p className="text-sm text-gray-500 mb-5">Select the area that best matches your business.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {INTERESTS.slice(0, 4).map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => selectInterest(opt.value)}
                            className="flex flex-col items-start p-3 rounded-xl border border-gray-200 hover:border-[#4ade80] hover:bg-green-50 transition-all text-left group"
                          >
                            <span className="font-semibold text-sm text-[#0a1e3a] group-hover:text-[#0a1e3a]">{opt.label}</span>
                            {opt.sub && <span className="text-xs text-gray-400 mt-0.5">{opt.sub}</span>}
                          </button>
                        ))}
                        <button
                          onClick={() => selectInterest('other')}
                          className="col-span-2 flex items-center p-3 rounded-xl border border-gray-200 hover:border-[#4ade80] hover:bg-green-50 transition-all text-left group"
                        >
                          <span className="font-semibold text-sm text-[#0a1e3a]">Something else</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.18 }}
                    >
                      <h2 className="text-lg font-bold text-[#0a1e3a] mb-1">How can we help you today?</h2>
                      <p className="text-sm text-gray-500 mb-5">Choose what you would like to do.</p>
                      <div className="flex flex-col gap-2">
                        {INTENTS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => selectIntent(opt.value)}
                            className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-[#4ade80] hover:bg-green-50 transition-all text-left group"
                          >
                            <span className="font-semibold text-sm text-[#0a1e3a]">{opt.label}</span>
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => { track('step_back'); setStep(1); }}
                        className="mt-4 text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    </motion.div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.18 }}
                    >
                      <h2 className="text-lg font-bold text-[#0a1e3a] mb-1">Almost there!</h2>
                      <p className="text-sm text-gray-500 mb-5">Leave your details and we will be in touch.</p>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Your name *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="Email address *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                        />
                        <input
                          type="tel"
                          placeholder="Phone number (optional)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                        />
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full py-3 rounded-xl font-semibold text-[#0a1e3a] bg-[#4ade80] hover:opacity-90 transition-all disabled:opacity-50"
                        >
                          {submitting ? 'Sending...' : 'Submit'}
                        </button>
                      </form>
                      <button
                        onClick={() => { track('step_back'); setStep(2); }}
                        className="mt-3 text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    </motion.div>
                  )}

                  {/* Success */}
                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-lg font-bold text-[#0a1e3a] mb-2">Thanks — we will be in touch!</h2>
                      <p className="text-sm text-gray-500">A team member will reach out within one business day.</p>
                      <button
                        onClick={close}
                        className="mt-5 px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
