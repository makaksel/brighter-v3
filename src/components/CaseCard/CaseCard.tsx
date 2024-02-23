'use client';

import React from 'react';
import { makeCn, MediaObject, useMediaQuery } from '@/src/utils';
import './CaseCard.scss';
import Image from 'next/image';
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
  imgs: MediaObject[];
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
            <svg className={cn('title-icon')} width="30" height="30" viewBox="0 0 30 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.75 15L25.7 11.5125L26.125 6.9L21.6125 5.875L19.25 1.875L15 3.7L10.75 1.875L8.3875 5.8625L3.875 6.875L4.3 11.5L1.25 15L4.3 18.4875L3.875 23.1125L8.3875 24.1375L10.75 28.125L15 26.2875L19.25 28.1125L21.6125 24.125L26.125 23.1L25.7 18.4875L28.75 15ZM12.6125 20.9L7.8625 16.1375L9.7125 14.2875L12.6125 17.2L19.925 9.8625L21.775 11.7125L12.6125 20.9Z"
                fill="#0095F6" />
            </svg>
          </p>
          {desc && <div className={cn('desc')} dangerouslySetInnerHTML={{ __html: desc }}></div>}
        </div>

        <div className={cn('rating')}>
          <ReactStars
            className={'rating-component'}
            count={5}
            value={rating}
            size={27}
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

      {!!imgs?.length && <div className={cn('media')}>
        {!!imgs?.length && imgs.map((img) => (
          <Image key={null} src={`https:${img.fields.file.url}`} className={cn('img')} alt={title}
                 width={img.fields.file.details.image.width} height={img.fields.file.details.image.height
          } />
        ))}

      </div>}

    </div>
  );
};