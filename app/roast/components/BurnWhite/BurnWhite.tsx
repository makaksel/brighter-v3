import React from 'react';
import { makeCn } from '@/src/utils';
import './BurnWhite.scss';
import Link from 'next/link';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import { AboutBurn } from '@/app/roast/components/AboutBurn';
import { TagsSection } from '@/app/roast/components/TagsSection';
import { LookLike } from '@/app/roast/components/LookLike';
import { ContactOrange } from '@/app/roast/components/ContactOrange';

const cn = makeCn('burn-white');

export const BurnWhite: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
      <h2 className={cn('header-title')}>Посмотрите<br /><span
        className={cn('header-title', { primary: true })}>Прожарку</span> сайта</h2>
      <p className={cn('header-text')}>Прожарка будет индивидуальной и на 100% конфиденциальной</p>
    </div>
    <div className={cn('body')}>
      {/* TODO MEDIA */}

      <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Бесплатная консультация</Link>
      <AboutBurn />
      <TagsSection />
      <LookLike />
      <ContactOrange />
    </div>
  </section>
;
