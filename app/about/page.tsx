import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Footer } from '@/src/components/Footer';
import { AboutHero } from '@/src/components/AboutHero';
import { Media } from '@/src/components/Media';
import { makeCn } from '@/src/utils';
import { Team } from '@/src/components/Team';
import { TeamSlider } from '@/src/components/TeamSlider';
import { Principles } from '@/src/components/Principles';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('about-page');

export default function page() {
  return (
    <main className={cn()}>
      <AboutHero />

      <Team />

      <TeamSlider />

      <Principles />

      <Media />

      <Footer />
    </ main>
  );
}
