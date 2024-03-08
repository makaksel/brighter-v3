import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { BrifHero } from '@/src/components/BrifHero';
import { BrifFrom } from '@/src/components/BrifFrom';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('brif-page')

export default function page() {
  return (
    <main className={cn()}>
      <BrifHero />

      <BrifFrom />

      <Footer noBrifLink/>
    </main>
  );
}
