import React from 'react';
import { makeCn } from '@/src/utils';
import './CardMedia.scss';
import Image, { StaticImageData } from 'next/image';
import CaseImg1 from '@/src/resources/images/case1.png';
import Link from 'next/link';

const cn = makeCn('card-media');

interface CardMediaProps {
  title: string;
  img: string | StaticImageData;
  date: string;
  desc: string;
  link: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  title,
  img = CaseImg1,
  date,
  desc,
  link,
}) => {
  return (
    <div className={cn()}>
      <div className={cn('media')}>
        <Image src={img} className={cn('img')} alt={title} />
      </div>
      <div className={cn('body')}>
        <p className={cn('title')}>
          <Link href={link} className={cn('title-text')}>{title}</Link>
          <span className={cn('title-date')}>{date}</span>
        </p>
        <p className={cn('desc')}>[{desc}]</p>
      </div>
    </div>
  );
};