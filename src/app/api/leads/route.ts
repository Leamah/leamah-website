import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'leamah-admin-2026';

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
    const { name, email, phone, interest, intent, page, referrer, session } = body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Name is required' },
        { status: 400, headers: corsHeaders() }
      );
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const id = 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    const lead = {
      id,
      session: session ?? '',
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ?? '',
      interest: interest ?? '',
      intent: intent ?? '',
      page: page ?? '',
      referrer: referrer ?? '',
      ts: Date.now(),
      ua: req.headers.get('user-agent') ?? '',
    };

    await kv.lpush('leads', JSON.stringify(lead));
    await kv.incr('leads:count');

    if (interest) {
      await kv.hincrby('leads:by_interest', interest, 1);
    }
    if (intent) {
      await kv.hincrby('leads:by_intent', intent, 1);
    }

    return NextResponse.json({ ok: true, id }, { status: 201, headers: corsHeaders() });
  } catch (err) {
    console.error('[leads POST]', err);
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
    const rawLeads = await kv.lrange<string>('leads', 0, 499);
    const leads = rawLeads.map((l) => {
      try {
        return typeof l === 'string' ? JSON.parse(l) : l;
      } catch {
        return l;
      }
    });

    const count = (await kv.get<number>('leads:count')) ?? 0;
    const byInterest = (await kv.hgetall<Record<string, number>>('leads:by_interest')) ?? {};
    const byIntent = (await kv.hgetall<Record<string, number>>('leads:by_intent')) ?? {};

    return NextResponse.json(
      { ok: true, count, leads, byInterest, byIntent },
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error('[leads GET]', err);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}
