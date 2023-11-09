import React from 'react';
import { makeCn } from '@/src/utils';
import './HeroBurn.scss';
import Image from 'next/image';
import Maxim from '@/src/resources/images/maxim.png';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import Link from 'next/link';

const cn = makeCn('hero-burn');

export const HeroBurn: React.FC = () => <section className={cn()}>
  <div className={cn('maxim')}>
    <div className={cn('maxim-pruf', { left: true })}>
      <span className={cn('maxim-pruf-title')}>+31%</span>
      <span className={cn('maxim-pruf-text')}>Результат</span>
    </div>
    <div className={cn('maxim-wrp')}>
      <Image src={Maxim} className={cn('maxim-img')} alt='Максим Поярче' />
      <span className={cn('maxim-text')}>Максим Поярче</span>
    </div>

    <div className={cn('maxim-pruf', { right: true })}>
      <span className={cn('maxim-pruf-title')}>+24%</span>
      <span className={cn('maxim-pruf-text')}>Конверсии</span>
    </div>
  </div>

  <h1 className={cn('title')}>Хотите больше клиентов? <span className={cn('title', { primary: true })}>Прожарьте свой сайт!</span>
  </h1>
  <p className={cn('subtitle')}>Я показал многим людям, как превратить своих посетителей сайта в постоянных клиентов</p>
  <div className={cn('rotate-box')}>
    <span className={cn('rotate-item', [cn('rotate-item-left')])}>Нет роста конверсии?<br />Я верну вам деньги</span>

    <span className={cn('rotate-item', [cn('rotate-item-right')])}>Я могу прожарить ваш сайт или дизайн</span>
  </div>
  <Link href={TELEGRAM_BOT_LINK} className={cn('button')}>Оставить заявку</Link>

</section>;
