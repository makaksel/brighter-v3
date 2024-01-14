import { Metadata } from 'next';
import { Footer } from '@/app/components/Footer';
import React from 'react';
import { Hero } from '@/app/components/Hero';
import { Cases } from '@/app/components/Cases';
import { HowWeWork } from '@/app/components/HowWeWork';
import { About } from '@/app/components/About';
import { ContactCard } from '@/src/shared/ContactCard';
import { Facilities } from '@/app/components/Facilities';
import { Partners } from '@/app/components/Partners';
import { CanOrder } from '@/app/components/CanOrder';
import { Subscribe } from '@/app/components/Subscribe';
import { Faq } from '@/app/components/Faq';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Cases />
      <HowWeWork />
      <About />
      <ContactCard />
      <Facilities />
      <Partners />
      <CanOrder />
      <Subscribe />
      <ContactCard />
      <Faq />
      <Footer />
    </>
  );
}
