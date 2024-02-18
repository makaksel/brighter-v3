'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import './BrifHero.scss';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { useRouter } from 'next/navigation';

const cn = makeCn('brif-hero');

export const BrifHero: React.FC = () => {
  const router = useRouter();

  return (
    <section className={cn()}>

      <div className={cn('content')}>
        <span className={cn('back-link')} onClick={() => router.back()}>
          <ArrowRight className={cn('back-link-icon')} />
          <span>назад</span>
        </span>
        <h1 className={cn('title')}>настало время заполнить бриф</h1>

        <p className={cn('text')}>чем больше вы дадите информации, тем точнее мы поймем ваш запрос</p>
      </div>

    </section>
  );
};
