'use client';

import React, { useRef } from 'react';
import { makeCn } from '@/src/utils';
import './Facilities.scss';
import { motion, useInView } from 'framer-motion';

const cn = makeCn('facilities');

interface FacilitiesCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const FacilitiesCard: React.FC<FacilitiesCardProps> = ({
                                                         icon,
                                                         title,
                                                         text,
                                                       }) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    margin: '0px 10px 0px 150px',
  });

  return (<motion.div className={cn('card')}
                      style={{
                        opacity: isInView ? 1 : 0.2,
                        transition: 'all 0.55s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                      }}
                      ref={ref}
  >

    {icon}
    <p className={cn('card-title')}>{title}</p>
    <p className={cn('card-text')}>{text}</p>
  </motion.div>);
};

export const Facilities: React.FC = () => {
  return (<section className={cn()}>
    <div className={cn('left')}>
      <FacilitiesCard
        title='Всегда готовы'
        text='Наша команда готова начать работу без задержек, отсутствует необходимость в переговорах и периодах ожидания'
        icon={<svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='60' height='60'
                   viewBox='0 0 60 60' fill='none'>
          <path
            d='M44.7574 22.1278L33.6491 31.1604C31.5504 32.8254 28.5976 32.8254 26.4988 31.1604L15.2969 22.1278'
            stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path fill-rule='evenodd' clip-rule='evenodd'
                d='M42.2722 52.4999C49.8755 52.5209 55 46.2739 55 38.5959V21.425C55 13.7471 49.8755 7.5 42.2722 7.5H17.7278C10.1245 7.5 5 13.7471 5 21.425V38.5959C5 46.2739 10.1245 52.5209 17.7278 52.4999H42.2722Z'
                stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>}
      />
      <FacilitiesCard
        title='Прозрачность работы'
        text='У нас нет скрытых платежей, мы не просим дополнительных бонусов за выполнение работы. Вы платите одну и ту же фиксированную сумму каждый месяц'
        icon={<svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='60' height='60'
                   viewBox='0 0 60 60' fill='none'>
          <path fill-rule='evenodd' clip-rule='evenodd'
                d='M36.8448 6.90449H20.2123C15.0123 6.88449 10.7498 11.0295 10.6273 16.227V43.0095C10.5123 48.292 14.6998 52.6695 19.9823 52.787C20.0598 52.787 20.1348 52.7895 20.2123 52.787H40.1848C45.4198 52.5745 49.5448 48.2495 49.5073 43.0095V20.0945L36.8448 6.90449Z'
                stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M36.1875 6.875V14.1475C36.1875 17.6975 39.0575 20.575 42.6075 20.585H49.495' stroke='white'
                stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M35.7187 38.3962H22.2188' stroke='white' stroke-width='2' stroke-linecap='round'
                stroke-linejoin='round' />
          <path d='M30.6087 29.015H22.2188' stroke='white' stroke-width='2' stroke-linecap='round'
                stroke-linejoin='round' />
        </svg>}
      />
      <FacilitiesCard
        title='Индивидуальный подход'
        text='Анализируем ваш бизнес, учитываем новые тренды и технологии, предлагаем эффективные решения для максимального результата'
        icon={<svg xmlns='http://www.w3.org/2000/svg' className={cn('card-icon')} width='60' height='60'
                   viewBox='0 0 60 60' fill='none'>
          <path fill-rule='evenodd' clip-rule='evenodd'
                d='M24.6925 38.0155C15.0825 38.0155 6.875 39.468 6.875 45.288C6.875 51.108 15.0325 52.613 24.6925 52.613C34.305 52.613 42.51 51.158 42.51 45.3405C42.51 39.523 34.355 38.0155 24.6925 38.0155Z'
                stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path fill-rule='evenodd' clip-rule='evenodd'
                d='M24.691 29.7148C30.9985 29.7148 36.111 24.6023 36.111 18.2948C36.111 11.9873 30.9985 6.87476 24.691 6.87476C18.386 6.87476 13.2735 11.9873 13.2735 18.2948C13.251 24.5798 18.326 29.6923 24.6135 29.7148H24.691Z'
                stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M48.0117 21.6727V31.6977' stroke='white' stroke-width='2' stroke-linecap='round'
                stroke-linejoin='round' />
          <path d='M53.1234 26.6851H42.8984' stroke='white' stroke-width='2' stroke-linecap='round'
                stroke-linejoin='round' />
        </svg>}
      />

    </div>
    <div className={cn('right')}>
      {/*<h2 className={cn("title")}>Удобство превыше всего</h2>
        <p className={cn("text")}>Это настолько удобно, что вы больше не захотите иметь дело с ненадежными фрилансерами и
          дорогими студиями</p>*/}
      <div className={cn('right-wrp')}>
        <h2 className={cn('title')}>Удобство превыше всего</h2>
        <p className={cn('text')}>Это настолько удобно, что вы больше не захотите иметь дело с ненадежными
          фрилансерами и
          дорогими студиями</p>
      </div>
    </div>
  </section>);
};