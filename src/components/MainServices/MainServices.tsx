import React from 'react';
import './MainServices.scss';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { getServices } from '@/src/contentfulApi/getServices';

const cn = makeCn('main-services');

interface ServiceProps {
  number: string;
  title: string;
  about: string;
  hashLink: string;
}

export const Service: React.FC<ServiceProps> = ({ number, title, about, hashLink }) => (
  <div className={cn('service')}>
    <span className={cn('service-number')}>
      {`[${number.padStart(2, '0')}]`}
    </span>
    <div className={cn('service-title')}>
      <div className={cn('service-title-text')} dangerouslySetInnerHTML={{ __html: about }}></div>
    </div>
    <span className={cn('service-badge')}>
      {title}
    </span>
    <Link href={`${routerLinks.services}#${hashLink}`} className={cn('service-link')}>
      <span>подробнее <span className={'hide-md'}>об услуге</span></span>
      <ArrowRight className={cn('service-link-icon')} />
    </Link>
  </div>
);


export const MainServices: React.FC = async () => {
  const services = await getServices(true);

  return (
    <div className={cn()}>
      <div className={cn('header')}>
        <p className={cn('title')}>услуги</p>
      </div>
      <div className={cn('body')}>
        {services.map((service) => (
          <Service
            key={service.fields.number}
            number={`${service.fields.number}`}
            title={service.fields.title}
            about={service.fields.about}
            hashLink={service.fields.number}
          />
        ))}

      </div>
    </div>
  );
};