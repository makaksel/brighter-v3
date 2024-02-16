'use client'

import React from 'react';
import { makeCn } from '@/src/utils';
import './Card.scss';
import Image from 'next/image';
import CaseImg1 from '@/src/resources/images/case1.png';
import Verified from '@/src/resources/icons/verified.svg';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ReactStars from 'react-stars';

const cn = makeCn('card');

export const Card: React.FC = () => {
  return (
    <div className={cn()}>
      <div className={cn('media')}>
        <Image src={CaseImg1} className={cn('img')} alt={'ник чернобаев'} />
      </div>
      <div className={cn('body')}>
        <div className={cn('rating')}>
          <ReactStars
            count={5}
            value={4.5}
            size={25}
            color1={'#080808'}
            color2={'#A1A1A1'}
            edit={false}
          />
        </div>
        <p className={cn('title')}>
          <Link href={routerLinks.root} className={cn('title-text')}>ник чернобаев</Link>
          <Verified className={cn('title-icon')} />
        </p>
        <p className={cn('desc')}>разработка логотипа и брендбука,<br />продуктовый дизайн</p>
      </div>

    </div>
  );
};