'use client';

import React from 'react';
import { makeCn } from '@/src/utils';
import './BrifHero.scss';
import Link from 'next/link';
import ArrowRight from '@/src/resources/icons/ArrowRight.svg';
import { useRouter } from 'next/navigation';
import { Onest } from 'next/font/google';
const onest = Onest({ subsets: ['latin'] });

const cn = makeCn('brif-hero');

export const BrifHero: React.FC = () => {
  const router = useRouter();

  return (
    <section className={cn()}>

      <div className={cn('content')}>
        <button className={cn('back-link', [onest.className])} onClick={() => router.back()}>
          <ArrowRight className={cn('back-link-icon')} />
          <span>назад</span>
        </button>
        <h1 className={cn('title')}>настало время заполнить бриф</h1>

        <p className={cn('text')}>чем больше вы дадите информации, тем точнее мы поймем ваш запрос</p>
      </div>

    </section>
  );
};
