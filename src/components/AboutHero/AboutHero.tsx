import React from 'react';
import { makeCn } from '@/src/utils';
import './AboutHero.scss';

const cn = makeCn('about-hero');

export const AboutHero: React.FC = () => <section className={cn()}>

  <div className={cn('content')}>
    <h1 className={cn('title')}>поярче это лучший дизайн прямо здесь прямо сейчас</h1>
  </div>

</section>;
