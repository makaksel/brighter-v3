'use client';

import React from 'react';
import { makeCn, MediaObject } from '@/src/utils';
import './Card.scss';
import Image from 'next/image';
import Verified from '@/src/resources/icons/verified.svg';
import ReactStars from 'react-stars';
import Link from 'next/link';
import { routerLinks } from '@/src/data/navigation';

const cn = makeCn('card');

interface CardProps {
  id: string;
  title: string;
  about: string;
  img: MediaObject;
  rating?: number;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  about,
  rating = 5,
  img,
}) => {
  return (
    <div className={cn()}>
      <div className={cn('media')}>
        <Image
          src={`https:${img.fields.file.url}`}
          className={cn('img')}
          width={img.fields.file.details.image.width}
          height={img.fields.file.details.image.height}
          alt={title}
        />
      </div>
      <div className={cn('body')}>
        <div className={cn('rating')}>
          <ReactStars
            count={5}
            value={rating}
            size={25}
            color1={'#080808'}
            color2={'#A1A1A1'}
            edit={false}
          />
        </div>
        <p className={cn('title')}>
          <Link href={`${routerLinks.portfolio}/${id}`} className={cn('title-text')}>{title}</Link>
          <Verified className={cn('title-icon')} />
        </p>
        <div className={cn('desc')} dangerouslySetInnerHTML={{ __html: about }}></div>
      </div>

    </div>
  );
};