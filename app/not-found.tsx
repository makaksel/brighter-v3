import { Metadata } from 'next';
import React from 'react';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function page() {
  return (
    <>
      <Header />
      404

      <Footer/>
    </>
  );
}
