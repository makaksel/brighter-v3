import { Metadata } from 'next';
import { Footer } from '@/src/components/Footer';
import React from 'react';
import { Hero } from '@/src/components/Hero';
import { Faq } from '@/src/components/Faq';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <Hero />


      {/*<Footer />*/}
    </>
  );
}
