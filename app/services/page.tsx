import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { ServicesHero } from '@/src/components/ServicesHero';
import { ServiceBlock } from '@/src/components/ServiceBlock';
import { design, indeed, site } from '@/src/data';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('services-page');


export default function page() {
  return (
    <main className={cn()}>
      <Header />

      <ServicesHero />

      <div className={cn('list')}>
        <ServiceBlock
          id="identity"
          titleNumber="01"
          badge="айдентика"
          about="логотип и 5 примеров использования / разработка фирменного знака базовые правила использования логотипа / геометрия и построение  размеры / масштабирование / цветовая схема / шрифт / дизайн отдельного фирменного элемента"
          adsText="Создаем уникальный стиль компании, который выражает ваши ценности и привлекает клиентов"
          collapseList={indeed}
        />

        <ServiceBlock
          id="site"
          titleNumber="02"
          badge="сайт"
          about="разработка мудборда / базовый концепт сайта / создание и утверждение прототипа / реализация дизайна главной и субстраниц / верстка"
          adsText="создаем дизайн сайта, который привлекает клиентов, говорит на их языке и повышает конверсию лидов"
          collapseList={site}
        />
        <ServiceBlock
          id="design"
          titleNumber="03"
          badge="дизайн-поддержка"
          adsText="дизайн-студия по подписке; решаем все задачи, связанные с визуалом"
          link="#"
          linkText="перейти"
          collapseList={design}
        />
      </div>

      <Footer />
    </ main>
  );
}
