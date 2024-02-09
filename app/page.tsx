import { Metadata } from 'next';
import React from 'react';
import { MainHero } from 'src/components/MainHero';
import { Header } from "@/src/components/Header";
import { makeCn } from "@/src/utils";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('main-page')

export default function Home() {
  return (
    <>
      <div className={cn('hero')}>
        <Header className={cn('header')} />
        <MainHero />
      </div>



      <Footer />
    </>
  );
}
