import { Metadata } from 'next';
import React from 'react';
import { Footer } from '@/src/components/Footer';
import { PortfolioHero } from '@/src/components/PortfolioHero';
import { PortfolioCases } from '@/src/components/PortfolioCases';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default async function page() {

  return (
    <main>
      <PortfolioHero />

      <PortfolioCases />

      <Footer />
    </main>
  );
}
