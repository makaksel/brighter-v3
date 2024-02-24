import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { ServicesHero } from '@/src/components/ServicesHero';
import { ServiceBlock } from '@/src/components/ServiceBlock';
import { design, indeed } from '@/src/data';

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
          adsText="создадим уникальный и привлекательный фирменный стиль, который привлечет клиентов к вашей компании"
          collapseList={indeed}
        />

        <ServiceBlock
          id="design"
          titleNumber="02"
          badge="дизайн-поддержка"
          adsText="работа студии по подписке, решаем все ваши задачи, связанные с дизайном"
          link="#"
          linkText="перейти"
          collapseList={design}
        />
      </div>

      <Footer />
    </ main>
  );
}
