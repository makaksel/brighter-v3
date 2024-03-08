import { Metadata } from 'next';
import React from 'react';
import { MainHero } from 'src/components/MainHero';
import { makeCn } from '@/src/utils';
import { Footer } from '@/src/components/Footer';
import { Partners } from '@/src/components/Partners/Partners';
import { MainCases } from 'src/components/MainCases';
import { MainServices } from '@/src/components/MainServices';
import { Media } from '@/src/components/Media';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('main-page')

export default async function page() {

  return (
    <main className={cn()}>
      <MainHero />

      <Partners />

      <MainCases />

      <MainServices />

      <Media />

      <Footer />
    </main>

  );
}
