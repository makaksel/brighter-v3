import React from 'react';
import './MainServices.scss';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';

const cn = makeCn('main-services');

interface ServiceProps {
  number: string;
  title: string;
  badge: string;
  hashLink: string;
}

export const Service: React.FC<ServiceProps> = ({ number, title, badge, hashLink }) => (
  <div className={cn('service')}>
    <span className={cn('service-number')}>
      {`[${number.padStart(2, '0')}]`}
    </span>
    <p className={cn('service-title')}><span className={cn('service-title-text')}>{title}</span></p>
    <span className={cn('service-badge')}>
      {badge}
    </span>
    <Link href={`${routerLinks.services}#${hashLink}`} className={cn('service-link')}>
      <span>подробнее <span className={'hide-md'}>об услуге</span></span>
      <ArrowRight className={cn('service-link-icon')} />
    </Link>
  </div>
);


export const MainServices: React.FC = () => (
  <div className={cn()}>
    <div className={cn('header')}>
      <p className={cn('title')}>услуги</p>
    </div>
    <div className={cn('body')}>
      <Service
        number={'1'}
        title={'создаем яркий брендинг, который выделяет '}
        badge={'айдентика'}
        hashLink={'identity'}
      />
      <Service
        number={'2'}
        title={'помогаем бизнесам решать задачи по дизайну'}
        badge={'дизайн-поддержка'}
        hashLink={'design'}
      />
    </div>
  </div>
);