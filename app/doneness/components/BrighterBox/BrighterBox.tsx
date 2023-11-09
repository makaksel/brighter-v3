import React from 'react';
import { makeCn } from '@/src/utils';
import './BrighterBox.scss';
import Link from 'next/link';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import { AboutBurn } from '@/app/doneness/components/AboutBurn';
import { TagsSection } from '@/app/doneness/components/TagsSection';
import { LookLike } from '@/app/doneness/components/LookLike';
import { ContactOrange } from '@/app/doneness/components/ContactOrange';
import { FaqBurn } from '@/app/doneness/components/FaqBurn';
import { Footer } from '@/app/components/Footer';
import longlogo from '@/src/resources/images/longlogo.png';
import Image from 'next/image';

const cn = makeCn('brighter-box');

export const BrighterBox: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
      <div className={cn('loopline')}>
        <Image src={longlogo} alt='Поярче' className={cn('img')} />
        <Image src={longlogo} alt='Поярче' className={cn('img')} />
        <Image src={longlogo} alt='Поярче' className={cn('img')} />
      </div>

    </div>
    <div className={cn('body')}>
      <FaqBurn />
      <Footer className={cn('footer')} theme='light' />
    </div>
  </section>
;
