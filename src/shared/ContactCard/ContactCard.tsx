import React from 'react';
import { makeCn } from '@/src/utils';
import Link from 'next/link';
import './ContactCard.scss';
import Image from 'next/image';
import { TELEGRAM_BOT_LINK } from '@/src/data/const';
import Maxim from '@/src/resources/images/maxim.jpg';

const cn = makeCn('contact-card');

const labels = ['нейминг', 'сайты', 'айдентика', 'логотипы', 'дизайн-подписка'];

export const ContactCard: React.FC = () => <div className={cn()}>
  <div className={cn('wrp')}>
    <div className={cn('body')}>
      <p className={cn('title')}>
        <span className={cn('title', ['primary-text'])}>Бесплатная</span> <br /> консультация
      </p>
      <p className={cn('text')}>Напишите мне в Telegram</p>
    </div>
    Ам
    <div className={cn('media')}>
      <div className={cn('people')}>
        <Image src={Maxim} alt={'Максим Поярче'} className={cn('people-img')} />
      </div>
      <div className={cn('button')}>
        <Link href={TELEGRAM_BOT_LINK} className={cn('link')}>
          <svg xmlns='http://www.w3.org/2000/svg' className={cn('link-icon', ['white-icon'])} width='34' height='33'
               viewBox='0 0 34 33' fill='none'>
            <path d='M20.4878 31.6759H33.2597' stroke='white' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M18.7842 2.37119C20.1501 0.739441 22.6055 0.50017 24.2719 1.83773C24.364 1.9103 27.3241 4.20887 27.3241 4.20887C29.1547 5.31501 29.7235 7.66654 28.5919 9.46107C28.5318 9.55717 11.7964 30.4816 11.7964 30.4816C11.2396 31.1759 10.3944 31.5858 9.49117 31.5956L3.0822 31.676L1.63818 25.5668C1.4359 24.7077 1.63818 23.8056 2.19496 23.1113L18.7842 2.37119Z'
                  stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M15.6863 6.25439L25.2877 13.6247' stroke='white' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' />
          </svg>

          <svg xmlns='http://www.w3.org/2000/svg' className={cn('link-icon', ['black-icon'])} width='33' height='33'
               viewBox='0 0 34 33' fill='none'>
            <path d='M20.4878 31.6759H33.2597' stroke='black' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M18.7842 2.37119C20.1501 0.739441 22.6055 0.50017 24.2719 1.83773C24.364 1.9103 27.3241 4.20887 27.3241 4.20887C29.1547 5.31501 29.7235 7.66654 28.5919 9.46107C28.5318 9.55717 11.7964 30.4816 11.7964 30.4816C11.2396 31.1759 10.3944 31.5858 9.49117 31.5956L3.0822 31.676L1.63818 25.5668C1.4359 24.7077 1.63818 23.8056 2.19496 23.1113L18.7842 2.37119Z'
                  stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M15.6863 6.25439L25.2877 13.6247' stroke='black' strokeWidth='1.5' strokeLinecap='round'
                  strokeLinejoin='round' />
          </svg>
          <span className={cn('link-text')}>Написать мне</span>
        </Link>
      </div>
    </div>
  </div>
</div>;
