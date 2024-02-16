import React from 'react';
import { makeCn } from '@/src/utils';
import './ServiceBlock.scss';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';

const cn = makeCn('service-block');

interface ServiceBlockProps {
  id: string;
  titleNumber: string;
  badge: string;
  about?: string;
  adsText?: string;
  link?: string;
  linkText?: string;
  collapseList?: React.ReactNode | React.ReactNode[];
}

export const  ServiceBlock: React.FC<ServiceBlockProps> = ({
  id,
  titleNumber,
  badge,
  about,
  adsText,
  collapseList,
  link = routerLinks.brif,
  linkText,
}) => (
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
      {collapseList}
    </div>
  </div>
);