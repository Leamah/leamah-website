import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ProductsGrid from '@/components/home/ProductsGrid';
import StatsSection from '@/components/home/StatsSection';
import IndustryStrip from '@/components/home/IndustryStrip';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Business Management Software for African SMEs',
  description:
    'Leamah is a South African IT solutions company delivering purpose-built software for individuals and SMEs across multiple industries.',
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
