import React from 'react';
import { Header } from '@/app/components/Header';
import { HeroBurn } from '@/app/doneness/components/HeroBurn';
import { BurnWhite } from '@/app/doneness/components/BurnWhite';
import { Reviews } from '@/app/doneness/components/Reviews';
import { WhatForUses } from '@/app/doneness/components/WhatForUses';
import { Footer } from '@/app/components/Footer';
import { FaqBurn } from '@/app/doneness/components/FaqBurn';
import { BrighterBox } from '@/app/doneness/components/BrighterBox';

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
