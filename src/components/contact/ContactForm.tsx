'use client';

import { useState } from 'react';
import { getSessionId } from '@/lib/session';
import { submitLead } from '@/lib/track';

const SUBJECTS = [
  { value: 'demo', label: 'Book a Demo' },
  { value: 'quote', label: 'Get a Quote' },
  { value: 'general', label: 'General Enquiry' },
  { value: 'partnership', label: 'Partnership' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('demo');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email address.');
      return;
    }
    setSubmitting(true);
    const session = getSessionId();
    const result = await submitLead({
      session,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest: 'contact',
      intent: subject,
      page: '/contact-us',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    });
    setSubmitting(false);
    if (result.ok) {
      setSuccess(true);
    } else {
      setError('Something went wrong. Please try again or email us directly at info@leamah.co.za.');
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0a1e3a] mb-2">Message received!</h3>
        <p className="text-gray-500">
          Thank you for getting in touch. A team member will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0a1e3a] mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a1e3a] mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@company.co.za"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0a1e3a] mb-1.5">Phone (optional)</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+27 xx xxx xxxx"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a1e3a] mb-1.5">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors bg-white"
          >
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0a1e3a] mb-1.5">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us a bit about your business and what you need..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl font-semibold text-[#0a1e3a] bg-[#4ade80] hover:opacity-90 transition-all disabled:opacity-50 text-sm"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
