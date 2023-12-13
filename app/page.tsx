import { Metadata } from 'next';
import { Footer } from '@/app/components/Footer';
import { TagsSection } from '@/src/shared/TagsSection';
import React from 'react';
import { HeroMain } from '@/app/components/HeroMain';
import { Services } from '@/app/components/Services';
import { MainContactCard } from '@/app/components/MainContactCard';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <HeroMain />
      <Services />
      <MainContactCard />
      <TagsSection />
      <Footer />
    </>
  );
}
