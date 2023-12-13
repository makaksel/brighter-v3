import React from 'react';
import { makeCn } from '@/src/utils';
import './AboutBurn.scss';

const cn = makeCn('about-burn');

export const AboutBurn: React.FC = () => <section className={cn()}>
    <div className={cn('header')}>
      <h2 className={cn('title')}>Для чего подходит<br /> <span
        className={cn('title', ['primary-text'])}>Прожарка?</span></h2>
      <div className={cn('badge')}>
        <span className={cn('badge-title')}>31%</span>
        <span className={cn('badge-text')}>Результат</span>
      </div>
    </div>
    <div className={cn('body')}>

      <div className={cn('card')}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='60' height='60' viewBox='0 0 60 60'
             fill='none'>
          <path d='M44.7574 22.1279L33.6491 31.1605C31.5504 32.8255 28.5976 32.8255 26.4988 31.1605L15.2969 22.1279'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path fillRule='evenodd' clipRule='evenodd'
                d='M42.2722 52.4999C49.8755 52.5209 55 46.2739 55 38.5959V21.425C55 13.7471 49.8755 7.5 42.2722 7.5H17.7278C10.1245 7.5 5 13.7471 5 21.425V38.5959C5 46.2739 10.1245 52.5209 17.7278 52.4999H42.2722Z'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
        <p className={cn('card-text')}>Сайт не решает задач бизнеса</p>
      </div>

      <div className={cn('card')}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='61' height='60' viewBox='0 0 61 60'
             fill='none'>
          <path
            d='M23 37.5C23 37.5 25.8125 40 30.5 40C35.1875 40 38 37.5 38 37.5M45.5 5H15.5C9.97715 5 5.5 9.47715 5.5 15V45C5.5 50.5229 9.97715 55 15.5 55H45.5C51.0229 55 55.5 50.5228 55.5 45V15C55.5 9.47715 51.0228 5 45.5 5ZM43 25C43 26.3807 41.8807 27.5 40.5 27.5C39.1193 27.5 38 26.3807 38 25C38 23.6193 39.1193 22.5 40.5 22.5C41.8807 22.5 43 23.6193 43 25ZM23 25C23 26.3807 21.8807 27.5 20.5 27.5C19.1193 27.5 18 26.3807 18 25C18 23.6193 19.1193 22.5 20.5 22.5C21.8807 22.5 23 23.6193 23 25Z'
            stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
        <p className={cn('card-text')}>Сайт перестал приносить заявки</p>
      </div>

      <div className={cn('card')}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='60' height='60' viewBox='0 0 60 60'
             fill='none'>
          <path fillRule='evenodd' clipRule='evenodd'
                d='M40.835 6.87549H19.1625C11.61 6.87549 6.875 12.223 6.875 19.7905V40.2105C6.875 47.778 11.585 53.1255 19.1625 53.1255H40.8325C48.41 53.1255 53.125 47.778 53.125 40.2105V19.7905C53.125 12.223 48.41 6.87549 40.835 6.87549Z'
                stroke='#3E51FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M38.4775 35.0442L30 29.9867V19.0842' stroke='#3E51FF' strokeWidth='2' strokeLinecap='round'
                strokeLinejoin='round' />
        </svg>
        <p className={cn('card-text')}>Сайт визуально и морально устарел</p>
      </div>

      <div className={cn('card')}>
        <svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='61' height='60' viewBox='0 0 61 60'
             fill='none'>
          <path
            d='M5.5 34H4.5V36H5.5V34ZM55.5 36H56.5V34H55.5V36ZM23 54C22.4477 54 22 54.4477 22 55C22 55.5523 22.4477 56 23 56V54ZM38 56C38.5523 56 39 55.5523 39 55C39 54.4477 38.5523 54 38 54V56ZM31.5 45C31.5 44.4477 31.0523 44 30.5 44C29.9477 44 29.5 44.4477 29.5 45H31.5ZM13 6H48V4H13V6ZM54.5 12.5V37.5H56.5V12.5H54.5ZM48 44H13V46H48V44ZM6.5 37.5V12.5H4.5V37.5H6.5ZM13 44C9.41015 44 6.5 41.0899 6.5 37.5H4.5C4.5 42.1944 8.30558 46 13 46V44ZM54.5 37.5C54.5 41.0899 51.5899 44 48 44V46C52.6944 46 56.5 42.1944 56.5 37.5H54.5ZM48 6C51.5899 6 54.5 8.91015 54.5 12.5H56.5C56.5 7.80558 52.6944 4 48 4V6ZM13 4C8.30558 4 4.5 7.80558 4.5 12.5H6.5C6.5 8.91015 9.41015 6 13 6V4ZM5.5 36H55.5V34H5.5V36ZM23 56H30.5V54H23V56ZM30.5 56H38V54H30.5V56ZM31.5 55V45H29.5V55H31.5Z'
            fill='#3E51FF' />
        </svg>
        <p className={cn('card-text')}>Ищите варианты, как повысить конверсию</p>
      </div>
    </div>
  </section>
;
