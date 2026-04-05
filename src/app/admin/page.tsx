'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  interest: string;
  intent: string;
  ts: number;
  page?: string;
  phone?: string;
}

interface LeadsData {
  ok: boolean;
  count: number;
  leads: Lead[];
  byInterest: Record<string, number>;
  byIntent: Record<string, number>;
}

interface TrackData {
  ok: boolean;
  funnel: {
    opened: number;
    step1: number;
    step2: number;
    submitted: number;
    closed: number;
  };
  counts: Record<string, number>;
}

interface DashData {
  leads: LeadsData | null;
  track: TrackData | null;
}

function StatTile({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-extrabold text-[#0a1e3a]">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function BarChart({ data, color = '#4ade80' }: { data: Record<string, number>; color?: string }) {
  const entries = Object.entries(data).sort(([, a], [, b]) => b - a);
  const max = Math.max(...entries.map(([, v]) => v), 1);
  return (
    <div className="space-y-3">
      {entries.map(([key, val]) => (
        <div key={key} className="flex items-center gap-3">
          <span className="w-32 text-xs text-gray-500 truncate shrink-0">{key}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${(val / max) * 100}%`, background: color }}
            />
          </div>
          <span className="text-xs font-bold text-[#0a1e3a] w-8 text-right shrink-0">{val}</span>
        </div>
      ))}
    </div>
  );
}

function FunnelBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-4">
      <span className="w-40 text-sm text-gray-600 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#1e3a6f] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-bold text-[#0a1e3a] w-16 text-right shrink-0">{value} ({pct}%)</span>
    </div>
  );
}

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [data, setData] = useState<DashData>({ leads: null, track: null });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!token.trim()) return;
    setLoading(true);
    setAuthError('');
    try {
      const [leadsRes, trackRes] = await Promise.all([
        fetch('/api/leads', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/track', { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      if (!leadsRes.ok) {
        setAuthError('Invalid token. Please try again.');
        setLoading(false);
        return;
      }
      const leadsData = await leadsRes.json();
      const trackData = await trackRes.json();
      setData({ leads: leadsData, track: trackData });
      sessionStorage.setItem('leamah_admin_token', token);
      setLoggedIn(true);
    } catch {
      setAuthError('Connection error. Please try again.');
    }
    setLoading(false);
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#0a1e3a] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[#0a1e3a]">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Enter your access token to continue.</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Access token"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
            />
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-[#0a1e3a] bg-[#4ade80] hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const leads = data.leads;
  const track = data.track;
  const totalLeads = leads?.count ?? 0;
  const ctaOpens = track?.funnel?.opened ?? 0;
  const convRate = ctaOpens > 0 ? ((totalLeads / ctaOpens) * 100).toFixed(1) : '0';

  // Avg daily leads (based on last 30 days as a rough estimate)
  const now = Date.now();
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
  const recentLeads = (leads?.leads ?? []).filter((l) => l.ts > thirtyDaysAgo);
  const avgDaily = recentLeads.length > 0 ? (recentLeads.length / 30).toFixed(1) : '0';

  const funnelMax = track?.funnel?.opened ?? 1;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0a1e3a]">Leamah Admin</h1>
            <p className="text-gray-400 text-sm mt-1">Lead and funnel analytics</p>
          </div>
          <button
            onClick={() => { setLoggedIn(false); setToken(''); setData({ leads: null, track: null }); }}
            className="text-sm text-gray-500 hover:text-[#0a1e3a] transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatTile label="Total Leads" value={totalLeads} />
          <StatTile label="CTA Opens" value={ctaOpens} />
          <StatTile label="Conversion Rate" value={`${convRate}%`} sub="leads / CTA opens" />
          <StatTile label="Avg Daily Leads" value={avgDaily} sub="last 30 days" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Funnel */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-[#0a1e3a] mb-6">CTA Funnel</h2>
            <div className="space-y-4">
              <FunnelBar label="CTA Opened" value={track?.funnel?.opened ?? 0} max={funnelMax} />
              <FunnelBar label="Step 1 selected" value={track?.funnel?.step1 ?? 0} max={funnelMax} />
              <FunnelBar label="Step 2 selected" value={track?.funnel?.step2 ?? 0} max={funnelMax} />
              <FunnelBar label="Lead submitted" value={track?.funnel?.submitted ?? 0} max={funnelMax} />
            </div>
          </div>

          {/* By Interest */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-[#0a1e3a] mb-6">Leads by Interest</h2>
            {leads?.byInterest && Object.keys(leads.byInterest).length > 0 ? (
              <BarChart data={leads.byInterest} color="#4ade80" />
            ) : (
              <p className="text-gray-400 text-sm">No data yet.</p>
            )}
          </div>
        </div>

        {/* By Intent */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
          <h2 className="font-bold text-[#0a1e3a] mb-6">Leads by Intent</h2>
          {leads?.byIntent && Object.keys(leads.byIntent).length > 0 ? (
            <BarChart data={leads.byIntent} color="#1e3a6f" />
          ) : (
            <p className="text-gray-400 text-sm">No data yet.</p>
          )}
        </div>

        {/* Recent leads table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-[#0a1e3a] mb-6">Recent Leads</h2>
          {leads?.leads && leads.leads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-400 pb-3 pr-4">Name</th>
                    <th className="text-left text-xs font-semibold text-gray-400 pb-3 pr-4">Email</th>
                    <th className="text-left text-xs font-semibold text-gray-400 pb-3 pr-4">Interest</th>
                    <th className="text-left text-xs font-semibold text-gray-400 pb-3 pr-4">Intent</th>
                    <th className="text-left text-xs font-semibold text-gray-400 pb-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.leads.slice(0, 50).map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-[#0a1e3a]">{lead.name}</td>
                      <td className="py-3 pr-4 text-gray-500">{lead.email}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          {lead.interest || '—'}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                          {lead.intent || '—'}
                        </span>
                      </td>
                      <td className="py-3 text-gray-400 text-xs">
                        {new Date(lead.ts).toLocaleDateString('en-ZA', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No leads yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
