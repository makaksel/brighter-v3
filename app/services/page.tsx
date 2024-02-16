import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { ServicesHero } from '@/src/components/ServicesHero';
import { ServiceBlock } from '@/src/components/ServiceBlock';
import { number } from 'prop-types';
import { list } from 'postcss';
import { Collapse } from '@/src/shared/Collapse';
import { ContactCollapse } from '@/src/components/ContactCollapse';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('services-page');


const indeed = [
  {
    id: 1,
    title: 'интервью',
    daysString: '2 дня',
    price: '0 ₽',
    desc: 'мы свяжемся с вами в удобное время, уточним задачи и пожелания, получим необходимые для работы материалы',
  },
  {
    id: 2,
    title: 'исследование',
    daysString: '7 дней',
    price: '50 000 ₽',
    desc: 'изучим ваш бизнес, нишу, конкурентов и аудиторию, создадим креативную концепцию и утвердим ее с вами',
  },
  {
    id: 3,
    title: 'реализация идеи',
    daysString: '10 дней',
    price: '100 000 ₽',
    desc: 'создаем все необходимые графические материалы, утверждаем с вами, вносим правки и доводим результат до идеала',
  },
  {
    id: 4,
    title: 'гайдлайн',
    daysString: '3 дня',
    price: '30 000 ₽',
    desc: 'даем подробные инструкции по эффективному использованию элементов айдентики, оптимизируем вашу будущую работу',
  },
];

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
          adsText="создаем яркий брендинг, который выделяет "
          collapseList={
            <>
              {indeed.map((item) => (
                <ContactCollapse
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  days={item.daysString}
                />
              ))}
            </>
          }
        />

        <ServiceBlock
          id="site"
          titleNumber="02"
          badge="сайт"
          about="разработка мудборда / базовый концепт сайта / создание и утверждение прототипа / реализация дизайна главной и субстраниц / верстка"
          adsText="создаем яркие сайты, ориентированные на клиентов"
          collapseList={
            <>
              {indeed.map((item) => (
                <ContactCollapse
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  days={item.daysString}
                />
              ))}
            </>
          }
        />
        <ServiceBlock
          id="design"
          titleNumber="03"
          badge="дизайн-поддержка"
          adsText="дизайн-студия по подписке; решаем все задачи, связанные с визуалом"
          link="#"
          linkText="перейти"
          collapseList={
            <>
              {indeed.map((item) => (
                <ContactCollapse
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </>
          }
        />
      </div>

      <Footer />
    </ main>
  );
}
