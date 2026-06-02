import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ProductsGrid from '@/components/home/ProductsGrid';
import StatsSection from '@/components/home/StatsSection';
import IndustryStrip from '@/components/home/IndustryStrip';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Business Management Software for African SMEs',
  description:
    'Leamah gives South African individuals and SMEs enterprise-grade IT solutions across inventory management, healthcare, logistics and professional services.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsGrid />
      <StatsSection />
      <IndustryStrip />
      <HomeCTA />
    </>
  );
}
