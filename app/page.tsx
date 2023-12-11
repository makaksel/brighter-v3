import { Metadata } from 'next';
import { Footer } from '@/app/components/Footer';
import { TagsSection } from '@/src/shared/TagsSection';
import React from 'react';
import { HeroMain } from '@/app/components/HeroMain';
import { Services } from '@/app/components/Services';
import { ContactCard } from '@/src/shared/ContactCard';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <HeroMain />

      <Services />

      <ContactCard title={`Бесплатная<br/> консультация`} />

      <div>contact card</div>

      <TagsSection />
      <Footer />
    </>
  );
}
