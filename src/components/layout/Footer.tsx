import Link from 'next/link';
import Image from 'next/image';

const PRODUCTS = [
  { label: 'Zanava', href: '/zanava' },
  { label: 'Medico', href: '/medico' },
  { label: 'Guluva', href: '/guluva' },
  { label: 'Professional Services', href: '/professional-services' },
];

const COMPANY = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0a1e3a' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.png" alt="Leamah" width={36} height={36} className="rounded-md" />
              <span className="text-white font-bold text-lg">Leamah</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Business software built for African SMEs.
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="flex flex-col gap-2.5">
              {PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:info@leamah.co.za"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  info@leamah.co.za
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2025 Leamah. All rights reserved.</p>
          <p className="text-white/40 text-xs">Built for African businesses.</p>
        </div>
      </div>
    </footer>
  );
}
