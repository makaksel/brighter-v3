import React from 'react';
import { makeCn } from '@/src/utils';
import './ContactCollapse.scss';
import { DiscussLink } from '@/src/components/DiscussLink';
import Image from 'next/image';
import { Collapse } from '@/src/shared/Collapse';
import { Header } from '@/src/components/Header';


const cn = makeCn('contact-collapse');

interface ContactCollapseProps {
  title: string;
  desc: string;
  days?: string;
  price?: string;
}

export const ContactCollapse: React.FC<ContactCollapseProps> = ({
  title,
  desc,
  days,
  price,
}) => (
  <Collapse className={cn('')} header={
    <div className={cn('header')}>
      <p className={cn('title')}>{title}</p>
      {days && <p className={cn('days')}>{days}</p>}
      {price && <p className={cn('price')}>{price}</p>}
    </div>
  }>
    {desc}
  </Collapse>
);
