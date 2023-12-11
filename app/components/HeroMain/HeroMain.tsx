import React from 'react';
import { makeCn } from '@/src/utils';
import './HeroMain.scss';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import Link from 'next/link';

const cn = makeCn('hero-main');

export const HeroMain: React.FC = () => <section className={cn()}>
  <div className={cn('wrp')}>
    <h1 className={cn('title')}>
      Если дизайн, то <span className={cn('title', { primary: true })}>Поярче</span>
    </h1>
    <p className={cn('subtitle')}>
      Здесь создаются яркие и запоминающиеся дизайн-концепции, которые подчеркнут вашу индивидуальность и уникальность
    </p>
  </div>
  <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Оставить заявку</Link>
</section>;
