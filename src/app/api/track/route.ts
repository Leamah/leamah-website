import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'leamah-admin-2026';

const VALID_EVENTS = [
  'cta_opened',
  'step1_selected',
  'step2_selected',
  'step3_viewed',
  'step_back',
  'lead_submitted',
  'cta_closed',
];

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { session, event, data, page } = body;

    if (!event || typeof event !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Event field is required' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const entry = {
      session: session ?? '',
      event,
      data: data ?? {},
      ts: Date.now(),
      page: page ?? '',
    };

    await kv.lpush('events', JSON.stringify(entry));
    await kv.ltrim('events', 0, 4999);

    if (VALID_EVENTS.includes(event)) {
      await kv.hincrby('events:count', event, 1);
    }

    return NextResponse.json({ ok: true }, { status: 200, headers: corsHeaders() });
  } catch (err) {
    console.error('[track POST]', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? '';
  const token = auth.replace('Bearer ', '').trim();

  if (token !== ADMIN_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401, headers: corsHeaders() }
    );
  }

  try {
    const counts = (await kv.hgetall<Record<string, number>>('events:count')) ?? {};
    const rawEvents = await kv.lrange<string>('events', 0, 199);
    const events = rawEvents.map((e) => {
      try {
        return typeof e === 'string' ? JSON.parse(e) : e;
      } catch {
        return e;
      }
    });

    const funnel = {
      opened: counts['cta_opened'] ?? 0,
      step1: counts['step1_selected'] ?? 0,
      step2: counts['step2_selected'] ?? 0,
      submitted: counts['lead_submitted'] ?? 0,
      closed: counts['cta_closed'] ?? 0,
    };

    return NextResponse.json(
      { ok: true, counts, funnel, events },
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error('[track GET]', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}
