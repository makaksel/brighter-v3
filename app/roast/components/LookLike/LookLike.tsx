import React from 'react';
import { makeCn } from '@/src/utils';
import './LookLike.scss';

const cn = makeCn('look-like');

export const LookLike: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
      <h2 className={cn('title')}>Похоже<br /> <span
        className={cn('title', ['primary-text'])}>на вас?</span></h2>
      <p className={cn('header-text')}>
        Сообщения
      </p>
    </div>
    <div className={cn('body')}>
      <div className={cn('badge', { number: 'one' })}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('badge-icon')} width='51' height='56' viewBox='0 0 51 56'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M22.8187 35.5507C13.7328 32.2437 5.47385 30.7927 3.47228 36.292C1.47071 41.7912 8.66297 46.0198 17.7981 49.3447C26.8841 52.6517 35.1416 54.0996 37.1423 48.6026C39.1431 43.1056 31.9539 38.8756 22.8187 35.5507Z'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path fillRule='evenodd' clipRule='evenodd'
                d='M25.6743 27.7071C31.6369 29.8773 38.2286 26.8034 40.3978 20.8434C42.5671 14.8835 39.4926 8.29392 33.53 6.12372C27.5674 3.95352 20.9743 7.02434 18.805 12.9843C16.623 18.9168 19.6654 25.4972 25.5982 27.6794L25.6743 27.7071Z'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </div>

      <div className={cn('badge', { number: 'two' })}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('badge-icon')} width='61' height='62' viewBox='0 0 61 62'
             fill='none'>
          <path
            d='M20.6512 9.51477L11.8675 12.7118C4.64358 15.3411 1.9757 22.1039 4.61097 29.3442L11.7199 48.8757C14.3551 56.1161 20.7247 59.5895 27.9698 56.9525L48.6994 49.4076C55.9468 46.7697 58.5935 40.0146 55.9582 32.7743L52.5141 23.3116'
            stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path fillRule='evenodd' clipRule='evenodd'
                d='M21.3443 30.8967L32.5103 6.95115C33.9022 3.97031 37.4472 2.68004 40.4296 4.06877L44.3292 5.88719C47.3124 7.27828 48.6035 10.8256 47.2116 13.8065L35.9917 37.8674C35.3836 39.1716 34.2826 40.1815 32.9295 40.674L24.1293 43.877L21.118 34.9166C20.6755 33.5984 20.7556 32.1592 21.3443 30.8967Z'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.8301 10.6345L45.4608 17.457' stroke='#3E51FF' strokeWidth='2' strokeLinecap='round'
                strokeLinejoin='round' />
        </svg>
      </div>
      <div className={cn('badge', { number: 'three' })}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('badge-icon')} width='70' height='70' viewBox='0 0 70 70'
             fill='none'>
          <g clip-path='url(#clip0_22_694)'>
            <path
              d='M59.7125 30.7505C62.11 44.3479 53.0308 57.3143 39.4335 59.7119M59.7125 30.7505C57.3149 17.1532 44.3484 8.07396 30.7511 10.4715M59.7125 30.7505L54.7884 31.6188M39.4335 59.7119C25.8361 62.1095 12.8696 53.0303 10.4721 39.4329M39.4335 59.7119L38.5652 54.7879M10.4721 39.4329C8.07448 25.8356 17.1537 12.8691 30.7511 10.4715M10.4721 39.4329L15.3961 38.5647M30.7511 10.4715L31.6193 15.3956M40.4199 24.1144L25.8896 31.9824C24.0641 32.9709 24.5478 35.7143 26.6014 36.0188L32.637 36.9139C33.3096 37.0136 33.896 37.4242 34.2197 38.0221L37.1251 43.3877C38.1136 45.2132 40.8571 44.7295 41.1616 42.6759L43.5854 26.3309C43.8465 24.57 41.9853 23.2668 40.4199 24.1144Z'
              stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_22_694'>
              <rect width='60' height='60' fill='white' transform='translate(0.337891 10.757) rotate(-10)' />
            </clipPath>
          </defs>
        </svg>
      </div>


      <p className={cn('row', { number: 'one' })}>
        Тратите много времени на маркетинг своего сайта, но клиенты так и не приходят?
      </p>
      <p className={cn('row', { number: 'two' })}>
        Знаете, что ваш продукт отличный, но сайт выглядит скучным? Клиенты посещают вашу страницу, но не приобретают
        услуги?
      </p>
      <p className={cn('row', { number: 'three' })}>
        Ваши реклама приносит посетителей, но не продажи? Или цена за вашего нового клиента слишком высока?
      </p>
    </div>
  </section>
;
