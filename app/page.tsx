import { Metadata } from 'next';
import React from 'react';
import { MainHero } from 'src/components/MainHero';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

export default function Home() {
  return (
    <>
      <MainHero />


      {/*<Footer />*/}
    </>
  );
}
