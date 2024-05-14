import React from 'react';
import { makeCn } from '@/src/utils';
import './ExpressHero.scss';
import localFont from 'next/font/local';

const cn = makeCn('express-hero');

const NeutralFaceFont = localFont({ src: '../../../public/fonts/NeutralFace.otf' });

export const ExpressHero: React.FC = () => <section className={cn()}>

  <div className={cn('content')}>
    <h1 className={cn('title', [NeutralFaceFont.className])}>
      <span className={cn('line')}>быстро</span>
      <span className={cn('line')}>дешево</span>
      <span className={cn('line')}>ярко</span>
    </h1>
  </div>

  <div className={cn('row')}>
    <p className={cn('row-text')}>[экспресс-дизайн]</p>
    <p className={cn('row-text')}>[2024]</p>
  </div>

</section>;
