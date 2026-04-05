export type LeadPayload = {
  session: string;
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  intent?: string;
  page?: string;
  referrer?: string;
};

/**
 * Fire-and-forget event tracker.
 * Silently swallows errors so it never breaks the UI.
 */
export function track(event: string, data?: Record<string, unknown>): void {
  try {
    const payload = {
      session: typeof window !== 'undefined' ? sessionStorage.getItem('leamah_session') ?? '' : '',
      event,
      data,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    };
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {
      // intentionally swallowed
    });
  } catch {
    // intentionally swallowed
  }
}

/**
 * Submit a lead to the /api/leads endpoint.
 */
export async function submitLead(
  payload: LeadPayload
): Promise<{ ok: boolean; id?: string }> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false };
    const json = await res.json();
    return { ok: true, id: json.id };
  } catch {
    return { ok: false };
  }
}
