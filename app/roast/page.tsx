import React from 'react';
import { Header } from '@/app/components/Header';
import { HeroBurn } from '@/app/roast/components/HeroBurn';
import { BurnWhite } from '@/app/roast/components/BurnWhite';
import { Reviews } from '@/app/roast/components/Reviews';
import { WhatForUses } from '@/app/roast/components/WhatForUses';
import { BrighterBox } from '@/app/roast/components/BrighterBox';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};
export default function Page() {
  return (
    <main>
      <Header />
      <HeroBurn />
      <BurnWhite />
      <Reviews />
      <WhatForUses />
      <BrighterBox />
    </main>
  );
}
