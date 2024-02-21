'use client';

import React, { useState } from 'react';
import { makeCn } from '@/src/utils';
import './ServiceBlock.scss';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { ContactCollapse } from '@/src/components/ContactCollapse';
import { ServiceCollapse } from '@/src/data';

const cn = makeCn('service-block');


interface ServiceBlockProps {
  id: string;
  titleNumber: string;
  badge: string;
  about?: string;
  adsText?: string;
  link?: string;
  linkText?: string;
  collapseList: ServiceCollapse[];
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  titleNumber,
  badge,
  about,
  adsText,
  collapseList,
  link = routerLinks.brif,
  linkText,
}) => {
  const [collapseOpen, setCollapseOpen] = useState<number | null>(null);

  const handleClickCollapse = (id: number) => {
    if (collapseOpen === id) {
      setCollapseOpen(null);
      return;
    }

    setCollapseOpen(id);
  };

  return (
    <div className={cn()} id={id}>

      <div className={cn('number')}>
        <span>[{titleNumber}]</span>
      </div>

      <div className={cn('badge-wrp')}>
        <span className={cn('badge')}>{badge}</span>
      </div>

      <div className={cn('about')}>
        <p>{about}</p>
      </div>

      <div className={cn('ads')}>
        {adsText && <p className={cn('ads-text')}>{adsText}</p>}
        <Link href={link} className={cn('ads-link')}>
          <span>{linkText || 'обсудить'}</span>
          <ArrowRight className={cn('ads-link-icon')} />
        </Link>
      </div>

      <div className={cn('list')}>
        {collapseList.map((item) => (
          <ContactCollapse
            key={item.id}
            title={item.title}
            desc={item.desc}
            price={item.price}
            days={item.days}
            open={collapseOpen === item.id}
            handleClick={() => handleClickCollapse(item.id)}
          />
        ))}
      </div>

    </div>
  );
};