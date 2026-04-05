import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://leamah.co.za', lastModified: new Date(), priority: 1.0 },
    { url: 'https://leamah.co.za/solutions', lastModified: new Date(), priority: 0.9 },
    { url: 'https://leamah.co.za/zanava', lastModified: new Date(), priority: 0.9 },
    { url: 'https://leamah.co.za/medico', lastModified: new Date(), priority: 0.9 },
    { url: 'https://leamah.co.za/guluva', lastModified: new Date(), priority: 0.9 },
    { url: 'https://leamah.co.za/professional-services', lastModified: new Date(), priority: 0.9 },
    { url: 'https://leamah.co.za/industries', lastModified: new Date(), priority: 0.8 },
    { url: 'https://leamah.co.za/about-us', lastModified: new Date(), priority: 0.7 },
    { url: 'https://leamah.co.za/contact-us', lastModified: new Date(), priority: 0.8 },
  ];
}
