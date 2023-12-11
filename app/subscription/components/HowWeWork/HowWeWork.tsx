import React from 'react';
import { makeCn } from '../../../../src/utils';
import './HowWeWork.scss';
/* @ts-ignore */
/* @ts-ignore */
/* @ts-ignore */

const cn = makeCn('how-we-work');

export const HowWeWork: React.FC = () => <section className={cn()}>
  <div className={cn('header')}>
    <p className={cn('header-text')}>То, что вы давно искали, то, как это должно работать </p>
    <h2 className={cn('header-title')}>Как мы работаем?</h2>
  </div>
  <div className={cn('body')}>
    <div className={cn('card')}>
      <svg width='60' height='60' className={cn('card-icon')} viewBox='0 0 60 60' fill='none'
           xmlns='http://www.w3.org/2000/svg'>
        <path id='Stroke 1'
              d='M44.7574 22.1279L33.6491 31.1605C31.5504 32.8255 28.5976 32.8255 26.4988 31.1605L15.2969 22.1279'
              stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        <path id='Stroke 3' fill-rule='evenodd' clip-rule='evenodd'
              d='M42.2722 52.4999C49.8755 52.5209 55 46.2739 55 38.5959V21.425C55 13.7471 49.8755 7.5 42.2722 7.5H17.7278C10.1245 7.5 5 13.7471 5 21.425V38.5959C5 46.2739 10.1245 52.5209 17.7278 52.4999H42.2722Z'
              stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      </svg>
      <div className={cn('card-body')}>
        <p className={cn('card-title')}>Заявка</p>
        <p className={cn('card-text')}>Напишите нам и мы свяжемся с вами, чтобы обсудить детали</p>
      </div>
    </div>

    <div className={cn('card')}>
      <svg width='60' height='60' className={cn('card-icon')} viewBox='0 0 60 60' fill='none'
           xmlns='http://www.w3.org/2000/svg'>
        <path id='Stroke 1' fill-rule='evenodd' clip-rule='evenodd'
              d='M40.835 6.87549H19.1625C11.61 6.87549 6.875 12.223 6.875 19.7905V40.2105C6.875 47.778 11.585 53.1255 19.1625 53.1255H40.8325C48.41 53.1255 53.125 47.778 53.125 40.2105V19.7905C53.125 12.223 48.41 6.87549 40.835 6.87549Z'
              stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        <path id='Stroke 3' d='M38.4775 35.0442L30 29.9867V19.0842' stroke='white' stroke-width='2'
              stroke-linecap='round' stroke-linejoin='round' />
      </svg>
      <div className={cn('card-body')}>
        <p className={cn('card-title')}>Дизайн</p>
        <p className={cn('card-text')}>Получите свой дизайн до 48 часов</p>
      </div>
    </div>

    <div className={cn('card')}>
      <svg width='60' height='60' className={cn('card-icon')} viewBox='0 0 60 60' fill='none'
           xmlns='http://www.w3.org/2000/svg'>
        <path id='Vector'
              d='M22.5 37.5C22.5 37.5 25.3125 40 30 40C34.6875 40 37.5 37.5 37.5 37.5M45 5H15C9.47715 5 5 9.47715 5 15V45C5 50.5229 9.47715 55 15 55H45C50.5229 55 55 50.5228 55 45V15C55 9.47715 50.5228 5 45 5ZM42.5 25C42.5 26.3807 41.3807 27.5 40 27.5C38.6193 27.5 37.5 26.3807 37.5 25C37.5 23.6193 38.6193 22.5 40 22.5C41.3807 22.5 42.5 23.6193 42.5 25ZM22.5 25C22.5 26.3807 21.3807 27.5 20 27.5C18.6193 27.5 17.5 26.3807 17.5 25C17.5 23.6193 18.6193 22.5 20 22.5C21.3807 22.5 22.5 23.6193 22.5 25Z'
              stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      </svg>
      <div className={cn('card-body')}>
        <p className={cn('card-title')}>Результат</p>
        <p className={cn('card-text')}>Бесконечные правки, пока вы не будете удовлетворены на 100%</p>
      </div>
    </div>
  </div>
</section>;
