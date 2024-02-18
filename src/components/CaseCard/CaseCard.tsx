'use client';

import React from 'react';
import { makeCn, useMediaQuery } from '@/src/utils';
import './CaseCard.scss';
import Image, { StaticImageData } from 'next/image';
import Verified from '@/src/resources/icons/verified.svg';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import ReactStars from 'react-stars';

const cn = makeCn('case-card');

interface CaseCardProps {
  id: string | number;
  theme: string;
  title: string;
  desc?: string;
  rating?: number;
  imgs: (string | StaticImageData)[];
}


export const CaseCard: React.FC<CaseCardProps> = ({
  id,
  theme,
  title,
  imgs,
  desc,
  rating = 5,
}) => {

  const isDesktop = useMediaQuery('(min-width:1024px)');

  return (
    <div className={cn()}>
      <div className={cn('body')}>

        <p className={cn('theme')}>[{theme}]</p>

        <div className={cn('about')}>
          <p className={cn('title')}>
            <Link
              href={`${routerLinks.portfolio}/${id}`}
              className={cn('title-text')}
            >
              {title}
            </Link>
            <Verified className={cn('title-icon')} />
          </p>
          {desc && <p className={cn('desc')} dangerouslySetInnerHTML={{ __html: desc }}></p>}
        </div>

        <div className={cn('rating')}>
          <ReactStars
            count={5}
            value={rating}
            size={isDesktop ? 27 : 20}
            color1={'#080808'}
            color2={'#A1A1A1'}
            edit={false}
          />
        </div>

        <Link href={`${routerLinks.portfolio}/${id}`} className={cn('link')}>
          <span className={cn('link-text')}>подробнее о проекте</span>
          <ArrowRight className={cn('link-icon')} />
        </Link>

      </div>

      <div className={cn('media')}>
        {imgs.map((img) => (
          <Image key={null} src={img} className={cn('img')} alt={title} />
        ))}


      </div>

    </div>
  );
};