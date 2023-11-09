import React from 'react';
import { makeCn } from '@/src/utils';
import './WhatForUses.scss';
import Link from 'next/link';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import { Waves } from '@/app/doneness/components/Waves';

const cn = makeCn('what-for-uses');

export const WhatForUses: React.FC = () => <section className={cn()}>

    <div className={cn('header')}>
      <h2 className={cn('title')}>Что дает<br /> <span
        className={cn('title', { primary: true })}>Прожарка?</span></h2>
      <div className={cn('badge')}>
        <span className={cn('badge-title')}>31%</span>
        <span className={cn('badge-text')}>Конверсии</span>
      </div>
      <p className={cn('text')}>Наши принципы работы - уникальны</p>
    </div>
    <div className={cn('body')}>

      <Waves />

    </div>
    <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Заказать Прожарку сайта</Link>

  </section>
;
