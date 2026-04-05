'use client';

import { motion } from 'framer-motion';

type Variant = 'zanava' | 'medico' | 'guluva' | 'proservices';

interface DashboardMockupProps {
  variant: Variant;
}

const navItems: Record<Variant, string[]> = {
  zanava: ['Dashboard', 'Inventory', 'Orders', 'Suppliers', 'Staff', 'Reports'],
  medico: ['Dashboard', 'Patients', 'Appointments', 'Claims', 'Inventory', 'Reports'],
  guluva: ['Dashboard', 'Bookings', 'Fleet', 'Drivers', 'Payments', 'Reports'],
  proservices: ['Dashboard', 'Invoices', 'Clients', 'Time', 'Documents', 'Reports'],
};

const accentColors: Record<Variant, string> = {
  zanava: '#4ade80',
  medico: '#60a5fa',
  guluva: '#f97316',
  proservices: '#a78bfa',
};

function ZanavaContent() {
  const bars = [65, 80, 50, 90, 70, 55];
  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock Overview</p>
      <div className="flex gap-2 mb-2">
        {[
          { label: 'Stock Items', value: '1 248' },
          { label: 'Low Stock', value: '23' },
          { label: 'Orders Today', value: '14' },
        ].map((stat) => (
          <div key={stat.label} className="flex-1 bg-white rounded-lg p-2 shadow-sm">
            <p className="text-[10px] text-gray-500">{stat.label}</p>
            <p className="text-base font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-3 shadow-sm flex-1">
        <p className="text-[10px] text-gray-500 mb-2">Monthly Sales</p>
        <div className="flex items-end gap-1 h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{ height: `${h}%`, background: i % 2 === 0 ? '#4ade80' : '#1e3a6f' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MedicoContent() {
  const appointments = [
    { name: 'Thabo Mokoena', time: '09:00', type: 'Consultation' },
    { name: 'Fatima Dlamini', time: '09:45', type: 'Follow-up' },
    { name: 'Sipho Nkosi', time: '10:30', type: 'Procedure' },
    { name: 'Lerato Khumalo', time: '11:15', type: 'Consultation' },
  ];
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="bg-white rounded-lg p-2 shadow-sm flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">7</div>
        <div>
          <p className="text-[10px] text-gray-500">Claims Submitted Today</p>
          <p className="text-xs font-bold text-gray-800">R 48 200 processed</p>
        </div>
      </div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Today&apos;s Appointments</p>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        {appointments.map((a) => (
          <div key={a.name} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm">
            <span className="text-[10px] text-blue-500 font-mono w-9 shrink-0">{a.time}</span>
            <span className="text-[10px] font-medium text-gray-700 flex-1 truncate">{a.name}</span>
            <span className="text-[9px] bg-blue-50 text-blue-600 rounded px-1">{a.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuluvaContent() {
  const bookings = [
    { type: 'Generator 50kVA', status: 'Active', id: '#BK-1041' },
    { type: 'Furniture Truck 8T', status: 'Pending', id: '#BK-1042' },
    { type: 'Portable Toilet x6', status: 'Active', id: '#BK-1043' },
    { type: 'Crane 20T', status: 'Confirmed', id: '#BK-1044' },
  ];
  const statusColor: Record<string, string> = {
    Active: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-blue-100 text-blue-700',
  };
  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Active Bookings</p>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        {bookings.map((b) => (
          <div key={b.id} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm">
            <span className="text-[9px] text-gray-400 font-mono w-14 shrink-0">{b.id}</span>
            <span className="text-[10px] font-medium text-gray-700 flex-1 truncate">{b.type}</span>
            <span className={`text-[9px] rounded px-1.5 py-0.5 font-medium ${statusColor[b.status]}`}>{b.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProservicesContent() {
  const invoices = [
    { client: 'Apex Consulting', amount: 'R 12 500', status: 'Paid' },
    { client: 'Sunrise Legal', amount: 'R 8 200', status: 'Overdue' },
    { client: 'TechBridge SA', amount: 'R 22 000', status: 'Sent' },
    { client: 'Ndlovu & Assoc', amount: 'R 5 600', status: 'Draft' },
  ];
  const statusColor: Record<string, string> = {
    Paid: 'bg-green-100 text-green-700',
    Overdue: 'bg-red-100 text-red-700',
    Sent: 'bg-blue-100 text-blue-700',
    Draft: 'bg-gray-100 text-gray-600',
  };
  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recent Invoices</p>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        {invoices.map((inv) => (
          <div key={inv.client} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm">
            <span className="text-[10px] font-medium text-gray-700 flex-1 truncate">{inv.client}</span>
            <span className="text-[10px] font-bold text-gray-800 w-16 text-right shrink-0">{inv.amount}</span>
            <span className={`text-[9px] rounded px-1.5 py-0.5 font-medium ${statusColor[inv.status]}`}>{inv.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const contentMap: Record<Variant, React.ReactNode> = {
  zanava: <ZanavaContent />,
  medico: <MedicoContent />,
  guluva: <GuluvaContent />,
  proservices: <ProservicesContent />,
};

export default function DashboardMockup({ variant }: DashboardMockupProps) {
  const items = navItems[variant];
  const accent = accentColors[variant];
  const content = contentMap[variant];

  return (
    <motion.div
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="flex-1 mx-4 h-5 bg-gray-700 rounded text-[10px] text-gray-400 flex items-center px-2">
          app.leamah.co.za
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex h-56" style={{ background: '#f3f4f6' }}>
        {/* Sidebar */}
        <div className="w-28 bg-gray-800 flex flex-col py-3 gap-0.5 shrink-0">
          {items.map((item, i) => (
            <div
              key={item}
              className="px-3 py-1.5 text-[10px] rounded-md mx-1 cursor-default"
              style={
                i === 0
                  ? { background: accent, color: '#0a1e3a', fontWeight: 700 }
                  : { color: '#9ca3af' }
              }
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 overflow-hidden">{content}</div>
      </div>
    </motion.div>
  );
}
