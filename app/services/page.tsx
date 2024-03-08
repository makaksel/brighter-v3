import { Metadata } from 'next';
import React from 'react';
import './page.scss';
import { Footer } from '@/src/components/Footer';
import { makeCn } from '@/src/utils';
import { ServicesHero } from '@/src/components/ServicesHero';
import { ServiceBlock } from '@/src/components/ServiceBlock';
import { getServices } from '@/src/contentfulApi/getServices';

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Если дизайн, то поярче. Разрабатываем не просто картинки, мы создаем смыслы.',
};

const cn = makeCn('services-page');


export default async function page() {
  const services = await getServices();

  return (
    <main className={cn()}>

      <ServicesHero />

      <div className={cn('list')}>
        {services.map((service) => (

          <ServiceBlock
            key={service.fields.number}
            id={service.fields.number}
            titleNumber={`${service.fields.number}`}
            badge={service.fields.title}
            about={service.fields.about}
            cost={service.fields.cost}
            addition={service.fields.addition}
            collapseList={service.fields.faq}
          />
        ))}


      </div>

      <Footer />
    </ main>
  );
}
