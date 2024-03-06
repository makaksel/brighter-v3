'use client';

import React, { useState } from 'react';
import { makeCn } from '@/src/utils';
import './ServiceBlock.scss';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { ContactCollapse } from '@/src/components/ContactCollapse';
import { ServiceFaq } from '@/src/contentfulApi/getServices';

const cn = makeCn('service-block');


interface ServiceBlockProps {
  id: string;
  titleNumber: string;
  badge: string;
  about?: string;
  cost?: string;
  addition?: string;
  link?: string;
  linkText?: string;
  collapseList?: ServiceFaq[];
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  titleNumber,
  badge,
  about,
  cost,
  addition,
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
        <span>{`[${titleNumber.padStart(2, '0')}]`}</span>
      </div>

      <div className={cn('badge-wrp')}>
        <span className={cn('badge')}>{badge}</span>
      </div>

      <div className={cn('about')}>
        <p>{about}</p>
      </div>

      <div className={cn('ads')}>
        {addition && <p className={cn('ads-text')}>{addition}</p>}
        {cost && <p className={cn('ads-text')}>стоимость - <span  className={cn('ads-text-black')}>{cost}</span></p>}

        <Link href={link} className={cn('ads-link')}>
          <span>{linkText || 'обсудить'}</span>
          <ArrowRight className={cn('ads-link-icon')} />
        </Link>
      </div>

      <div className={cn('list')}>
        {collapseList && collapseList.map((item, index) => (
          <ContactCollapse
            key={index}
            title={item.title}
            about={item.about}
            days={item.days}
            open={collapseOpen === index}
            handleClick={() => handleClickCollapse(index)}
          />
        ))}
      </div>

    </div>
  );
};