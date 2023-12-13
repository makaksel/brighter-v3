import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './ContactOrange.scss';
import Image from 'next/image';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import ImgMaxim from '@/src/resources/images/maxim-cut.png';

const cn = makeCn('contact-orange');

export const ContactOrange = () => <div className={cn()}>
  <div className={cn('container')}>
    <div className={cn('people')}>
      <Image src={ImgMaxim} alt={'Максим Поярче'} className={cn('people-img')} />
    </div>
    <h2 className={cn('title')}>Расскажу чем<br />поможет <span
      className={cn('title', ['primary-text'])}>Прожарка</span>
    </h2>
    <Link href={TELEGRAM_BOT_LINK} className={cn('link')}>
      Бесплатная консультация
    </Link>
  </div>
</div>;
