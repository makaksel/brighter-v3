import React from 'react';
import { makeCn } from '@/src/utils';
import './HowWeWork.scss';

const cn = makeCn('how-we-work');

const cardsList = [
  {
    id: 1,
    title: 'Заявка',
    body: 'Напишите нам и мы свяжемся с вами, чтобы обсудить детали',
  },
  {
    id: 2,
    title: 'Дизайн',
    body: 'Напишите запрос и мы возьмем его в работу',
  },
  {
    id: 3,
    title: 'Результат',
    body: 'Бесконечные правки, пока вы не будете удовлетворены на 100%',
  },
];

const Card: React.FC<{ title: string, body: string }> = ({ title, body }) => <div className={cn('card')}>
  <svg width='60' height='60' className={cn('card-icon')} viewBox='0 0 60 60' fill='none'
       xmlns='http://www.w3.org/2000/svg'>
    <path id='Stroke 1'
          d='M44.7574 22.1279L33.6491 31.1605C31.5504 32.8255 28.5976 32.8255 26.4988 31.1605L15.2969 22.1279'
          stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path id='Stroke 3' fillRule='evenodd' clipRule='evenodd'
          d='M42.2722 52.4999C49.8755 52.5209 55 46.2739 55 38.5959V21.425C55 13.7471 49.8755 7.5 42.2722 7.5H17.7278C10.1245 7.5 5 13.7471 5 21.425V38.5959C5 46.2739 10.1245 52.5209 17.7278 52.4999H42.2722Z'
          stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
  <div className={cn('card-body')}>
    <p className={cn('card-title')}>{title}</p>
    <p className={cn('card-text')}>{body}</p>
  </div>
</div>;

export const HowWeWork: React.FC = () => <section className={cn()}>
  <div className={cn('header')}>
    <p className={cn('header-text')}>То, что вы давно искали, то, как это должно работать </p>
    <h2 className={cn('header-title')}>Как мы работаем?</h2>
  </div>
  <div className={cn('body')}>
    {cardsList.map((props) => <Card key={props.id} {...props} />)}
  </div>
</section>;
